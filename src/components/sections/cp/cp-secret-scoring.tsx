import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function CPSecretScoring() {
  return (
    <section className="section-shell">
      <Container>
        <div className="surface-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-brand-navy px-6 py-8 text-white sm:px-8 lg:px-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Mekanisme Penilaian
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Informasi penilaian disimpan sebagai secure contest information.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                Detail mekanisme penilaian tidak dipublikasikan di halaman ini. Penyelenggara menjaga informasi tersebut tetap rahasia agar proses kompetisi tetap terstruktur dan adil.
              </p>
            </div>

            <div className="space-y-5 px-6 py-8 sm:px-8 lg:px-10">
              <div className="flex flex-wrap gap-3">
                <Badge tone="brand">Secure</Badge>
                <Badge tone="emerald">Restricted</Badge>
                <Badge tone="neutral">Contest Only</Badge>
              </div>
              <div className="rounded-[24px] border border-border bg-slate-50 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                  status
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">Mekanisme penilaian bersifat rahasia.</p>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                  Halaman ini tidak menampilkan skor, penalty, maupun detail penjurian. Informasi teknis hanya akan dibagikan melalui kanal resmi sesuai kebutuhan kompetisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
