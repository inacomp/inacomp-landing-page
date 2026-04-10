import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

export function CiscoGuidebookCTA() {
  return (
    <section id="guidebook" className="section-shell">
      <Container>
        <div className="surface-card overflow-hidden border-cyan-100/70 bg-[radial-gradient(circle_at_top_left,_rgba(67,199,255,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(54,92,255,0.18),_transparent_34%),linear-gradient(135deg,_#0f2254,_#15357b_58%,_#115e73_100%)] px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/90">
                Download Guidebook
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Unduh guidebook Cisco Networking untuk melihat informasi resmi yang perlu dipersiapkan.
              </h2>
              <p className="text-base leading-8 text-white/80 sm:text-lg">
                Guidebook menjadi acuan utama untuk memahami alur pelaksanaan,
                kebutuhan peserta, serta informasi teknis lanjutan sebelum kompetisi
                dimulai.
              </p>

              <Link
                href="#"
                className="inline-flex h-13 shrink-0 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-brand-navy shadow-soft hover:bg-cyan-50"
              >
                Download Guidebook
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
                <SkeletonBlock className="h-52 w-full border-white/10 bg-gradient-to-br from-white/20 via-white/10 to-white/5" />
              </div>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-4 backdrop-blur-sm sm:translate-y-10">
                <SkeletonBlock className="h-52 w-full border-white/10 bg-gradient-to-br from-cyan-200/20 via-white/10 to-white/5" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
