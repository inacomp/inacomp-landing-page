import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

export function CiscoSecretTopics() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeading
            eyebrow="Topik yang Diujikan"
            title="Topik kompetisi bersifat rahasia dan tidak diumumkan sebelumnya pada halaman ini."
            description="Untuk menjaga fairness, fokus kompetisi, dan kualitas tantangan, detail topik tidak dibuka di landing page. Informasi teknis yang relevan akan disampaikan melalui kanal resmi sesuai kebutuhan penyelenggaraan."
          />

          <div className="surface-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/8 via-transparent to-brand-indigo/10" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-3">
                <Badge tone="neutral">Hidden</Badge>
                <Badge tone="brand">Locked</Badge>
                <Badge tone="emerald">Confidential</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-dashed border-cyan-100 bg-[linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(236,247,255,0.75))] p-4"
                  >
                    <SkeletonBlock className="h-28 w-full border-0 blur-[2px]" />
                    <div className="mt-4 flex items-center justify-between text-sm text-muted">
                      <span>Network topic locked</span>
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
