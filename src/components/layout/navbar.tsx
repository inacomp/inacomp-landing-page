import Link from "next/link";
import Image from "next/image";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import { Container } from "@/components/ui/container";

const navLinks = [
	{ href: "/#tracks", label: "Kategori" },
	{ href: "/#timeline", label: "Timeline" },
	{ href: "/competitive-programming", label: "Competitive Programming" },
	{ href: "/ui-ux-design", label: "UI/UX Design" },
	{ href: "/#faq", label: "FAQ" },
	{ href: "/#contact", label: "Contact" },
];

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
			<Container className="relative">
				<div className="flex min-h-18 items-center justify-between gap-4 rounded-full border border-slate-200/90 bg-white/88 px-4 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-5">
					<Link href="/" className="group flex items-center gap-4">
						<div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] border border-slate-200 bg-slate-50 transition-transform group-hover:scale-[1.03]">
							<Image
								src="/favicon/android-chrome-512x512.png"
								alt="Inacomp Logo"
								fill
								className="object-contain p-1.5"
							/>
						</div>
						<div className="space-y-0.5">
							<span className="block text-base font-semibold tracking-[0.18em] text-foreground uppercase">
								INACOMP 2.0
							</span>
							<span className="hidden text-xs uppercase tracking-[0.18em] text-muted md:block">
								Informatics National Competition
							</span>
						</div>
					</Link>

					<nav className="hidden items-center gap-6 lg:flex">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-sm font-medium text-muted hover:text-brand-dark"
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="hidden lg:block">
						<Link
							href="/#tracks"
							className="primary-button px-5 py-2.5 text-sm"
						>
							Lihat Kategori
						</Link>
					</div>

					<MobileNavMenu navLinks={navLinks} />
				</div>
			</Container>
		</header >
	);
}
