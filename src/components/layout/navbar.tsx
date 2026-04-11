import Link from "next/link";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import { Container } from "@/components/ui/container";
import Image from "next/image";

const navLinks = [
	{ href: "/#tentang", label: "Tentang" },
	{ href: "/#cabang-lomba", label: "Cabang" },
	{ href: "/competitive-programming", label: "Competitive Programming" },
	{ href: "/cisco-networking", label: "Cisco Networking" },
];

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50">
			<Container>
				<div className="flex min-h-18 flex-wrap items-center justify-between gap-4 py-4">
					<Link href="/" className="group flex items-center gap-4">
						<div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl shadow-soft transition-transform group-hover:scale-105">
							<Image
								src="/favicon/android-chrome-512x512.png"
								alt="Inacomp Logo"
								fill
								className="object-contain p-1"
							/>
						</div>
						<div>
							<span className="block text-xl font-extrabold tracking-wider text-foreground uppercase">
								INACOMP 2.0
							</span>
						</div>
					</Link>

					<nav className="hidden items-center gap-7 lg:flex">
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
							href="/cisco-networking#daftar"
							className="inline-flex h-11 items-center justify-center rounded-full bg-brand-primary px-5 text-sm font-semibold text-white shadow-soft hover:bg-brand-primary-strong"
						>
							Daftar
						</Link>
					</div>

					<MobileNavMenu navLinks={navLinks} />
				</div>
			</Container>
		</header >
	);
}
