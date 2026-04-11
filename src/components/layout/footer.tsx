import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/competitive-programming", label: "Competitive Programming" },
  { href: "/cisco-networking", label: "Cisco Networking" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/48 backdrop-blur-xl">
      <Container className="py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary-strong">
              INACOMP 2.0
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Kompetisi nasional bidang informatika untuk siswa/i SMA/SMK/sederajat dengan pengalaman lomba yang modern, rapi, dan siap berkembang.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-brand-dark">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
