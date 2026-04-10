import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function CiscoSecretSkills() {
  return (
    <section className="section-shell">
      <Container>
        <div className="surface-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[linear-gradient(180deg,_#11214f,_#16306f)] px-6 py-8 text-white sm:px-8 lg:px-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Skill yang Dinilai
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Informasi skill penilaian disimpan sebagai private competition information.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                Halaman ini tidak mempublikasikan indikator skill yang dinilai secara rinci. Informasi tersebut dijaga tetap terbatas agar pengalaman kompetisi tetap objektif dan profesional.
              </p>
            </div>

            <div className="space-y-5 px-6 py-8 sm:px-8 lg:px-10">
              <div className="flex flex-wrap gap-3">
                <Badge tone="brand">Private</Badge>
                <Badge tone="emerald">Secure</Badge>
                <Badge tone="neutral">Assessment Only</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Matrix A", "Matrix B", "Matrix C", "Matrix D"].map((item) => (
                  <div key={item} className="rounded-[24px] border border-border bg-[linear-gradient(180deg,_white,_rgba(241,248,255,0.95))] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                      {item}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-foreground">
                      Skill assessment terkunci
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      Detail parameter penilaian tidak ditampilkan pada landing page dan akan tetap bersifat rahasia.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
