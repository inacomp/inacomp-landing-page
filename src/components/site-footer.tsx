const footerNavigation = [
  { label: "Tentang", href: "#tentang" },
  { label: "Cabang Lomba", href: "#cabang-lomba" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = ["Instagram", "TikTok", "LinkedIn"];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-white/60 px-4 py-12 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white/80 px-4 py-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
              2.0
            </span>
            <span className="text-sm font-semibold text-brand-navy">INACOMP 2.0</span>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Informatics National Competition 2.0 merupakan kompetisi nasional di bidang
            Competitive Programming dan Cisco Networking untuk siswa/i
            SMA/SMK/sederajat.
          </p>
          <p className="text-sm font-medium text-slate-500">
            Diselenggarakan oleh BEM PTIK UNJ.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
            Navigasi
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-brand-indigo">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
            Kontak Singkat
          </h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>inacomp@unj.ac.id</p>
            <p>Jakarta, Indonesia</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
