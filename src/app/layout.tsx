import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta-sans",
	subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://inacomp.vercel.app/"), // Ganti dengan domain asli jika sudah ada
	title: {
		default: "INACOMP 2.0",
		template: "%s | INACOMP 2.0",
	},
	description:
		"Landing page resmi INACOMP 2.0, kompetisi nasional Competitive Programming dan Cisco Networking untuk siswa/i SMA/SMK/sederajat.",
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
		title: "INACOMP 2.0",
		description:
			"Landing page resmi INACOMP 2.0, kompetisi nasional Competitive Programming dan Cisco Networking.",
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
		title: "INACOMP 2.0",
		description:
			"Landing page resmi INACOMP 2.0, kompetisi nasional Competitive Programming dan Cisco Networking.",
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
			className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-background text-foreground font-sans">
				<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
					<div className="animate-float-slow absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-brand-primary/14 blur-3xl" />
					<div className="animate-glow-drift absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-brand-accent/12 blur-3xl" />
					<div className="animate-float-slow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-primary-strong/10 blur-3xl" />
				</div>
				<Navbar />
				<main className="flex-1">{children}</main>
				<ScrollToTopButton />
				<Footer />
			</body>
		</html>
	);
}
