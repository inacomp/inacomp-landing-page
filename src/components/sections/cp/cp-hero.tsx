import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

const stats = [
  { label: "Peserta", value: "SMA/SMK" },
  { label: "Format Tim", value: "Maks. 2" },
  { label: "Skala", value: "Nasional" },
];

export function CPHero() {
  return (
    <section id="top" className="section-shell overflow-hidden pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <Badge tone="brand">Competitive Programming</Badge>
              <Badge tone="emerald">SMA/SMK/Sederajat</Badge>
              <Badge tone="amber">Maks. 2 Orang per Tim</Badge>
            </div>

            <div className="space-y-5">
              <h1 className="text-balance max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Competitive Programming untuk tim problem solver yang siap berpikir cepat, rapi, dan strategis.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Cabang Competitive Programming INACOMP 2.0 dirancang untuk siswa/i SMA/SMK/sederajat yang ingin menguji logika, ketelitian, dan kemampuan kolaborasi dalam format lomba yang clean, technical, dan contest-oriented.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#daftar"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-indigo px-6 text-sm font-semibold text-white shadow-soft hover:bg-brand-navy"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="#guidebook"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground hover:border-brand-indigo hover:text-brand-indigo"
              >
                Download Guidebook
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-card p-5">
                  <p className="text-sm text-muted">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card bg-radial-brand relative overflow-hidden p-5 sm:p-6">
            <div className="bg-grid-soft absolute inset-0 opacity-60" />
            <div className="relative space-y-4">
              <div className="surface-panel p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                    editor
                  </span>
                </div>
                <SkeletonBlock className="h-56 w-full" />
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="surface-panel p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                      leaderboard
                    </span>
                    <Badge tone="neutral">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <SkeletonBlock key={item} className="h-14 w-full rounded-[18px]" />
                    ))}
                  </div>
                </div>
                <div className="surface-panel p-4">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                    test status
                  </span>
                  <div className="mt-4 space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <SkeletonBlock key={item} className="h-10 w-full rounded-2xl" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
