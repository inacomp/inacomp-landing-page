import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/competitive-programming", label: "Competitive Programming" },
  { href: "/ui-ux-design", label: "UI/UX Design" },
  { href: "/#contact", label: "Contact" },
];

const SPONSOR_LOGO = "/assets/dewa-web-logo.png";
const SPONSOR_URL = "https://www.dewaweb.com";

export function Footer() {
  return (
    <>
      {/* Sponsor Dedicated Section */}
      <section className="border-t border-slate-100 bg-slate-50/50 py-16">
        <Container className="flex flex-col items-center justify-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Organized & Supported By
          </p>
          <div className="mt-8 flex items-center justify-center px-4">
            <a
              href={SPONSOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="relative h-28 w-80 sm:h-36 sm:w-112">
                <Image
                  src={SPONSOR_LOGO}
                  alt="Dewaweb Logo"
                  fill
                  sizes="(max-width: 640px) 320px, 448px"
                  className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </a>
          </div>
        </Container>
      </section>

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
    </>
  );
}
