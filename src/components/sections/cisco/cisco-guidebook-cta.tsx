import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

export function CiscoGuidebookCTA() {
  return (
    <section id="guidebook" className="section-shell">
      <Container>
        <div className="surface-card overflow-hidden border-white/15 bg-[radial-gradient(circle_at_top_left,_rgba(83,170,161,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(45,73,93,0.24),_transparent_34%),linear-gradient(135deg,_#22464C,_#2D495D_58%,_#53AAA1_120%)] px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
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
                className="inline-flex h-13 shrink-0 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-brand-dark shadow-soft hover:bg-white/90"
              >
                Download Guidebook
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
                <SkeletonBlock className="h-52 w-full border-white/10 bg-gradient-to-br from-white/20 via-white/10 to-white/5" />
              </div>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-4 backdrop-blur-sm sm:translate-y-10">
                <SkeletonBlock className="h-52 w-full border-white/10 bg-gradient-to-br from-brand-primary/25 via-white/10 to-white/5" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
