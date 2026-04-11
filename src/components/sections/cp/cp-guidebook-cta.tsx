import Link from "next/link";
import { Container } from "@/components/ui/container";

export function CPGuidebookCTA() {
  return (
    <section id="guidebook" className="section-shell">
      <Container>
        <div className="surface-card bg-radial-brand overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary-strong">
                Download Guidebook
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Unduh guidebook Competitive Programming untuk melihat detail teknis resmi.
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Guidebook akan menjadi acuan utama untuk informasi pelaksanaan, alur teknis, dan kebutuhan peserta yang perlu dipahami sebelum kompetisi dimulai.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex h-13 shrink-0 items-center justify-center rounded-full bg-brand-primary px-7 text-sm font-semibold text-white shadow-soft hover:bg-brand-primary-strong"
            >
              Download Guidebook
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
