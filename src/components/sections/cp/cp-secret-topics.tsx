import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

export function CPSecretTopics() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeading
            eyebrow="Materi / Topik"
            title="Topik yang diujikan bersifat rahasia dan tidak dipublikasikan pada halaman ini."
            description="Untuk menjaga fairness dan atmosfer kompetitif, materi yang diujikan tidak dibuka di landing page. Informasi yang relevan akan disampaikan sesuai kebutuhan penyelenggaraan."
          />

          <div className="surface-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/8 via-transparent to-brand-amber/8" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-3">
                <Badge tone="neutral">Hidden</Badge>
                <Badge tone="brand">Locked</Badge>
                <Badge tone="amber">Confidential</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="rounded-[24px] border border-dashed border-border bg-slate-50/70 p-4">
                    <SkeletonBlock className="h-28 w-full blur-[2px]" />
                    <div className="mt-4 flex items-center justify-between text-sm text-muted">
                      <span>Topik terkunci</span>
                      <span className="font-mono">••••</span>
                    </div>
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
