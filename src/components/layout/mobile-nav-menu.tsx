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
        className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 text-foreground hover:border-brand-primary/35 hover:bg-white lg:hidden"
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
        <div
          id="mobile-nav-menu"
          className="surface-panel basis-full p-4 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[14px] px-3 py-2 text-sm font-medium text-muted hover:bg-brand-soft/50 hover:text-brand-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#tracks"
              onClick={() => setIsOpen(false)}
              className="primary-button mt-2"
            >
              Lihat Cabang
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
