"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type MobileNavMenuProps = {
  navLinks: NavLink[];
};

export function MobileNavMenu({ navLinks }: MobileNavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/72 text-foreground backdrop-blur-sm lg:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label="Buka menu navigasi"
      >
        <span className="flex flex-col gap-1.5">
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
        </span>
      </button>

      {isOpen ? (
        <div id="mobile-nav-menu" className="surface-card basis-full p-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-muted hover:bg-brand-primary/8 hover:text-brand-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cisco-networking#daftar"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-brand-primary px-5 text-sm font-semibold text-white hover:bg-brand-primary-strong"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
