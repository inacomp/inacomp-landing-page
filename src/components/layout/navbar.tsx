import Link from "next/link";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import { Container } from "@/components/ui/container";

const navLinks = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#cabang-lomba", label: "Cabang" },
  { href: "/competitive-programming", label: "Competitive Programming" },
  { href: "/cisco-networking", label: "Cisco Networking" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-18 flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-indigo text-sm font-bold text-white shadow-soft">
              IC
            </div>
            <div>
              <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
                INACOMP 2.0
              </Link>
              <p className="text-xs text-muted">Competitive Programming & Cisco Networking</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-muted hover:text-brand-indigo">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/cisco-networking#daftar"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-indigo px-5 text-sm font-semibold text-white shadow-soft hover:bg-brand-navy"
            >
              Daftar
            </Link>
          </div>

          <MobileNavMenu navLinks={navLinks} />
        </div>
      </Container>
    </header>
  );
}
