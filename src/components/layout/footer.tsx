import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/competitive-programming", label: "Competitive Programming" },
  { href: "/ui-ux-design", label: "UI/UX Design" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-dark">
              INACOMP 2.0
            </p>
            <p className="max-w-2xl text-sm leading-7 text-muted">
              Informatics National Competition untuk pelajar yang ingin tampil di
              panggung teknologi nasional melalui Competitive Programming dan UI/UX
              Design.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-soft">
              Organized by BEM PTIK Universitas Negeri Jakarta
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
