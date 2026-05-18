import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
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
	metadataBase: new URL("https://inacomp.vercel.app/"),
	title: {
		default: "INACOMP 2.0 | Informatics National Competition",
		template: "%s | INACOMP 2.0",
	},
	description:
		"Landing page resmi INACOMP 2.0, kompetisi IT nasional untuk pelajar dengan track Competitive Programming dan UI/UX Design.",
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
	openGraph: {
		title: "INACOMP 2.0 | Informatics National Competition",
		description:
			"Kompetisi IT nasional untuk pelajar dengan dua jalur utama: Competitive Programming dan UI/UX Design.",
		url: "https://inacomp.vercel.app/",
		siteName: "INACOMP 2.0",
		locale: "id_ID",
		type: "website",
		images: [
			{
				url: "/favicon/android-chrome-512x512.png",
				width: 512,
				height: 512,
				alt: "INACOMP 2.0",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "INACOMP 2.0 | Informatics National Competition",
		description:
			"Kompetisi IT nasional untuk pelajar dengan track Competitive Programming dan UI/UX Design.",
		images: ["/favicon/android-chrome-512x512.png"],
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
				<Navbar />
				<main className="flex-1">{children}</main>
				<ScrollToTopButton />
				<Footer />
			</body>
		</html>
	);
}
