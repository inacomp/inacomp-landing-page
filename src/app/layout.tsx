import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import {
	absoluteUrl,
	googleSiteVerification,
	googleTagManagerId,
	siteConfig,
	siteUrlObject,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: siteUrlObject,
	title: siteConfig.defaultTitle,
	description: siteConfig.description,
	applicationName: siteConfig.name,
	authors: [{ name: siteConfig.organizationName }],
	creator: siteConfig.organizationName,
	publisher: siteConfig.organizationName,
	referrer: "origin-when-cross-origin",
	icons: {
		icon: [
			{ url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon/favicon.ico", sizes: "any" },
		],
		apple: [
			{
				url: "/favicon/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
	manifest: "/favicon/site.webmanifest",
	verification: googleSiteVerification
		? {
				google: googleSiteVerification,
			}
		: undefined,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	openGraph: {
		title: siteConfig.defaultTitle,
		description: siteConfig.description,
		url: absoluteUrl("/"),
		siteName: siteConfig.name,
		locale: siteConfig.locale,
		type: "website",
		images: [
			{
				...siteConfig.defaultOgImage,
				url: absoluteUrl(siteConfig.defaultOgImage.url),
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.defaultTitle,
		description: siteConfig.description,
		images: [absoluteUrl(siteConfig.defaultOgImage.url)],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="id"
			className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col bg-background text-foreground font-sans">
				{googleTagManagerId ? (
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
				) : null}
				{googleTagManagerId ? (
					<GoogleTagManager gtmId={googleTagManagerId} />
				) : null}
				<Navbar />
				<main className="flex-1">{children}</main>
				<ScrollToTopButton />
				<Footer />
			</body>
		</html>
	);
}
