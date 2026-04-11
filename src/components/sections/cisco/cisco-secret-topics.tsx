import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Lock } from "lucide-react";

export function CiscoSecretTopics() {
  const topics = [
    { name: "Layer 2 Switching", code: "L2-SW-01" },
    { name: "IP Connectivity", code: "IP-RT-02" },
    { name: "IP Services", code: "IP-SRV-03" },
    { name: "Security Fundamentals", code: "SEC-FND-04" },
  ];

  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeading
            eyebrow="Topik yang Diujikan"
            title="Topik kompetisi bersifat rahasia dan tidak diumumkan sebelumnya pada halaman ini."
            description="Untuk menjaga fairness, fokus kompetisi, dan kualitas tantangan, detail topik tidak dibuka di landing page. Informasi teknis yang relevan akan disampaikan melalui kanal resmi sesuai kebutuhan penyelenggaraan."
          />

          <div className="surface-card relative overflow-hidden p-6 sm:p-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-accent/10" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-3">
                <Badge tone="neutral">Hidden</Badge>
                <Badge tone="brand">Locked</Badge>
                <Badge tone="emerald">Confidential</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {topics.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-[24px] border border-dashed border-border bg-white/66 p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/50"
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Lock className="w-8 h-8 text-brand-primary/20" />
                    </div>
                    <div className="relative blur-[3px] select-none">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40">{item.code}</p>
                      <h4 className="mt-2 text-lg font-bold text-foreground/40">{item.name}</h4>
                      <div className="mt-4 space-y-2">
                         <div className="h-2 w-full bg-gray-100 rounded-full" />
                         <div className="h-2 w-2/3 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-[11px] font-medium text-muted/60 font-mono">
                      <span>SECURE_DATA</span>
                      <span>••••</span>
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

