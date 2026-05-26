import type { Metadata } from "next";

const LOCAL_SITE_URL = "http://localhost:3000";
const FALLBACK_PRODUCTION_SITE_URL = "https://inacomp.cloud";

function normalizeSiteUrl(url: string) {
	const trimmedUrl = url.trim();

	if (!trimmedUrl) {
		return process.env.NODE_ENV === "development"
			? LOCAL_SITE_URL
			: FALLBACK_PRODUCTION_SITE_URL;
	}

	const withProtocol =
		trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://")
			? trimmedUrl
			: `https://${trimmedUrl}`;

	return withProtocol.replace(/\/+$/, "");
}

const resolvedSiteUrl = normalizeSiteUrl(
	process.env.NEXT_PUBLIC_SITE_URL ??
		process.env.SITE_URL ??
		process.env.VERCEL_PROJECT_PRODUCTION_URL ??
		process.env.VERCEL_URL ??
		(process.env.NODE_ENV === "development"
			? LOCAL_SITE_URL
			: FALLBACK_PRODUCTION_SITE_URL),
);

export const siteUrl = resolvedSiteUrl;
export const siteUrlObject = new URL(siteUrl);

export const siteConfig = {
	name: "INACOMP 2.0",
	defaultTitle: "INACOMP 2.0 | Informatics National Competition",
	description:
		"Landing page resmi INACOMP 2.0, kompetisi IT nasional untuk pelajar dengan track Competitive Programming dan UI/UX Design.",
	organizationName:
		"Badan Eksekutif Mahasiswa Prodi Pendidikan Teknik Informatika dan Komputer Universitas Negeri Jakarta",
	locale: "id_ID",
	languageTag: "id-ID",
	defaultOgImage: {
		url: "/assets/logo-inacomp.png",
		alt: "Logo INACOMP 2.0",
		width: 1200,
		height: 1200,
	},
} as const;

export const eventSchedule = {
	startDate: "2026-05-18",
	endDate: "2026-07-04",
} as const;

export const googleTagManagerId =
	process.env.NEXT_PUBLIC_GTM_ID?.trim() || undefined;

export const googleSiteVerification =
	process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
	process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
	undefined;

type MetadataImage = {
	url: string;
	alt: string;
	width?: number;
	height?: number;
};

type BuildPageMetadataOptions = {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
	image?: MetadataImage;
};

export function absoluteUrl(path = "/") {
	return new URL(path, siteUrlObject).toString();
}

function resolveImageUrl(url: string) {
	return url.startsWith("http://") || url.startsWith("https://")
		? url
		: absoluteUrl(url);
}

export function buildPageMetadata({
	title,
	description,
	path,
	keywords,
	image = siteConfig.defaultOgImage,
}: BuildPageMetadataOptions): Metadata {
	const resolvedImage = {
		...image,
		url: resolveImageUrl(image.url),
	};

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical: path,
		},
		openGraph: {
			title,
			description,
			url: absoluteUrl(path),
			siteName: siteConfig.name,
			locale: siteConfig.locale,
			type: "website",
			images: [resolvedImage],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [resolvedImage.url],
		},
	};
}
