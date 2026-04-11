import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Hash, Network, Zap } from "lucide-react";

export function CPSecretTopics() {
  const topics = [
    { name: "Dynamic Programming", icon: Zap, color: "text-amber-500" },
    { name: "Graph Algorithms", icon: Network, color: "text-blue-500" },
    { name: "Number Theory", icon: Hash, color: "text-emerald-500" },
    { name: "String Manipulation", icon: Code2, color: "text-purple-500" },
  ];

  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeading
            eyebrow="Materi / Topik"
            title="Topik yang diujikan bersifat rahasia dan tidak dipublikasikan pada halaman ini."
            description="Untuk menjaga fairness dan atmosfer kompetitif, materi yang diujikan tidak dibuka di landing page. Informasi yang relevan akan disampaikan sesuai kebutuhan penyelenggaraan."
          />

          <div className="surface-card relative overflow-hidden p-6 sm:p-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-accent/8" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-3">
                <Badge tone="neutral">Hidden</Badge>
                <Badge tone="brand">Locked</Badge>
                <Badge tone="amber">Confidential</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {topics.map((item, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-[24px] border border-dashed border-border bg-white/65 p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/40">
                    <div className="relative blur-[4px] select-none scale-95 group-hover:scale-100 transition-transform duration-500">
                      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 ${item.color}`}>
                         <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground/50">{item.name}</h4>
                      <p className="mt-2 text-xs text-muted/40">Skenario algoritma tingkat lanjut untuk optimasi solusi.</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-[11px] font-mono font-medium text-muted/50">
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

