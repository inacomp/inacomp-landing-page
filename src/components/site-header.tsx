"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Tentang", href: "#tentang" },
  { label: "Cabang Lomba", href: "#cabang-lomba" },
  { label: "Timeline", href: "#timeline" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
  { label: "Guidebook", href: "#guidebook" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,_var(--brand-indigo),_var(--brand-cyan))] text-sm font-bold text-white shadow-lg shadow-blue-500/20">
            2.0
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
              Tech Competition
            </p>
            <p className="text-sm font-semibold text-brand-navy sm:text-base">
              INACOMP 2.0
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-indigo"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#cabang-lomba"
            className="rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-sky hover:text-brand-indigo"
          >
            Lihat Cabang
          </a>
          <a
            href="#closing-cta"
            className="rounded-full bg-brand-indigo px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-brand-navy"
          >
            Daftar Sekarang
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-brand-navy lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 w-full max-w-7xl rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-brand-indigo"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="#cabang-lomba"
              className="rounded-full border border-border px-4 py-3 text-center text-sm font-semibold text-brand-navy"
              onClick={() => setIsOpen(false)}
            >
              Lihat Cabang
            </a>
            <a
              href="#closing-cta"
              className="rounded-full bg-brand-indigo px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
