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
];

const SPONSOR_LOGO = "/assets/dewa-web-logo.png";
const SPONSOR_URL = "https://www.dewaweb.com";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
			<Container className="relative">
				<div className="flex min-h-18 items-center justify-between gap-4 rounded-full border border-slate-200/90 bg-white/88 px-4 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-5">
					<div className="flex items-center gap-3 sm:gap-4">
						<Link href="/" className="group flex items-center gap-3 sm:gap-4">
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

						{/* Vertical Divider */}
						<div className="hidden min-[400px]:block h-8 w-px bg-slate-200" />

						{/* Sponsor Logo */}
						<a
							href={SPONSOR_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="hidden min-[400px]:flex flex-col items-start gap-0.5 transition-opacity hover:opacity-80"
						>
							<span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase leading-none">
								Presented by
							</span>
							<div className="relative h-6 w-20 sm:h-7 sm:w-24">
								<Image
									src={SPONSOR_LOGO}
									alt="Dewaweb"
									fill
									sizes="(max-width: 640px) 80px, 96px"
									className="object-contain object-left"
									priority
								/>
							</div>
						</a>
					</div>

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
						<a
							href="https://forms.gle/WJBUZnyZUKkasZ9Z7"
							target="_blank"
							rel="noopener noreferrer"
							className="primary-button px-5 py-2.5 text-sm"
						>
							Daftar
						</a>
					</div>

					<MobileNavMenu navLinks={navLinks} />
				</div>
			</Container>
		</header >
	);
}
