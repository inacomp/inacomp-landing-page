import Link from "next/link";
import { Container } from "@/components/ui/container";

export function CPClosingCTA() {
  return (
    <section id="daftar" className="section-shell pt-4">
      <Container>
        <div className="surface-card px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-indigo">
                Closing CTA
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Siapkan tim terbaikmu dan ambil bagian di Competitive Programming INACOMP 2.0.
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Jika kamu adalah siswa/i SMA/SMK/sederajat dan siap berkompetisi dalam format maksimal 2 orang per tim, ini saatnya mendaftar dan bersiap untuk challenge berikutnya.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex h-13 shrink-0 items-center justify-center rounded-full bg-brand-indigo px-7 text-sm font-semibold text-white shadow-soft hover:bg-brand-navy"
            >
              Daftar Competitive Programming
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
