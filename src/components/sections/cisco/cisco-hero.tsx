import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

const stats = [
  { label: "Peserta", value: "SMA/SMK" },
  { label: "Format Tim", value: "Maks. 2" },
  { label: "Final", value: "Ada Presentasi" },
];

export function CiscoHero() {
  return (
    <section id="top" className="section-shell overflow-hidden pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <Badge tone="brand">Cisco Networking</Badge>
              <Badge tone="emerald">Skala Nasional</Badge>
              <Badge tone="amber">Maks. 2 Orang per Tim</Badge>
            </div>

            <div className="space-y-5">
              <h1 className="text-balance max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Cisco Networking Competition untuk tim yang siap berpikir terstruktur, presisi, dan adaptif di dunia jaringan komputer.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Cabang Cisco Networking INACOMP 2.0 dirancang untuk siswa/i
                SMA/SMK/sederajat yang tertarik pada jaringan komputer,
                troubleshooting, dan kesiapan menghadapi tantangan infrastruktur
                digital modern. Kompetisi diikuti maksimal 2 orang per tim dan pada
                babak final terdapat sesi presentasi.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#daftar"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-navy px-6 text-sm font-semibold text-white shadow-soft hover:bg-brand-indigo"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="#guidebook"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground hover:border-brand-cyan hover:text-brand-indigo"
              >
                Download Guidebook
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-card bg-gradient-to-br from-white to-cyan-50/60 p-5">
                  <p className="text-sm text-muted">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card relative overflow-hidden border-cyan-100/70 bg-[radial-gradient(circle_at_top_left,_rgba(67,199,255,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(54,92,255,0.16),_transparent_36%),linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(236,247,255,0.96))] p-5 sm:p-6">
            <div className="bg-grid-soft absolute inset-0 opacity-50" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(20,184,166,0.10),_transparent_18%),radial-gradient(circle_at_78%_26%,_rgba(6,182,212,0.14),_transparent_16%),radial-gradient(circle_at_72%_78%,_rgba(54,92,255,0.12),_transparent_18%)]" />

            <div className="relative space-y-4">
              <div className="surface-panel p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                    topology map
                  </span>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy">
                    active links
                  </span>
                </div>
                <div className="relative h-56 rounded-[26px] border border-white/70 bg-white/70 p-4 sm:h-64">
                  <div className="absolute left-[14%] top-[18%] h-3 w-3 rounded-full bg-brand-cyan shadow-[0_0_0_8px_rgba(67,199,255,0.12)]" />
                  <div className="absolute left-[46%] top-[26%] h-4 w-4 rounded-full bg-brand-indigo shadow-[0_0_0_10px_rgba(54,92,255,0.10)]" />
                  <div className="absolute right-[16%] top-[16%] h-3.5 w-3.5 rounded-full bg-teal-400 shadow-[0_0_0_9px_rgba(45,212,191,0.12)]" />
                  <div className="absolute bottom-[20%] left-[24%] h-3.5 w-3.5 rounded-full bg-sky-400 shadow-[0_0_0_9px_rgba(56,189,248,0.12)]" />
                  <div className="absolute bottom-[18%] right-[22%] h-4 w-4 rounded-full bg-brand-navy shadow-[0_0_0_10px_rgba(17,33,79,0.08)]" />

                  <div className="absolute left-[17%] top-[22%] h-px w-[28%] rotate-[10deg] bg-gradient-to-r from-brand-cyan/70 to-brand-indigo/30" />
                  <div className="absolute left-[49%] top-[30%] h-px w-[26%] -rotate-[18deg] bg-gradient-to-r from-brand-indigo/60 to-teal-300/40" />
                  <div className="absolute bottom-[24%] left-[28%] h-px w-[22%] -rotate-[24deg] bg-gradient-to-r from-sky-300/60 to-brand-indigo/30" />
                  <div className="absolute bottom-[25%] right-[26%] h-px w-[24%] rotate-[18deg] bg-gradient-to-r from-teal-300/50 to-brand-navy/25" />

                  <div className="absolute left-[8%] top-[48%] w-24 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm">
                    <SkeletonBlock className="h-7 w-full rounded-xl border-0" />
                    <SkeletonBlock className="mt-2 h-3.5 w-3/4 rounded-full border-0" />
                  </div>
                  <div className="absolute right-[8%] top-[42%] w-28 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm">
                    <SkeletonBlock className="h-8 w-full rounded-xl border-0" />
                    <SkeletonBlock className="mt-2 h-3.5 w-2/3 rounded-full border-0" />
                  </div>
                  <div className="absolute bottom-[8%] left-[34%] w-32 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm">
                    <SkeletonBlock className="h-9 w-full rounded-xl border-0" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="surface-panel p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                      infra cards
                    </span>
                    <Badge tone="neutral">Enterprise</Badge>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((item) => (
                      <SkeletonBlock key={item} className="h-20 w-full rounded-[20px]" />
                    ))}
                  </div>
                </div>

                <div className="surface-panel p-4">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                    node health
                  </span>
                  <div className="mt-4 space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-[20px] border border-white/80 bg-white/80 p-3"
                      >
                        <SkeletonBlock className="h-4 w-2/3 rounded-full border-0" />
                        <SkeletonBlock className="mt-3 h-9 w-full rounded-2xl border-0" />
                      </div>
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
