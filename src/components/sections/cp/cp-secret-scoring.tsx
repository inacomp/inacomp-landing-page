import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Award, Clock, FileWarning, HelpCircle, ShieldCheck } from "lucide-react";

export function CPSecretScoring() {
  const rules = [
    { title: "Penilaian Otomatis", desc: "Sistem judge standar (ICPC manual filter).", icon: ShieldCheck },
    { title: "Penalty Waktu", desc: "20 menit tambahan untuk setiap submission yang salah.", icon: Clock },
    { title: "Format Jawaban", desc: "Kesesuaian format I/O sangat berpengaruh.", icon: FileWarning },
    { title: "Tie-breaker", desc: "Berdasarkan total waktu tercepat jika skor sama.", icon: Award },
  ];

  return (
    <section className="section-shell">
      <Container>
        <div className="surface-card overflow-hidden group">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[linear-gradient(180deg,_#22464C,_#2D495D)] px-6 py-8 text-white sm:px-8 lg:px-10 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform duration-700 group-hover:scale-110">
                 <HelpCircle className="w-40 h-40" />
              </div>
              <div className="relative">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Mekanisme Penilaian
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Mekanisme penilaian dijaga tetap rahasia hingga hari kompetisi.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                  Detail sistem penilaian tidak diumumkan sebelumnya. Penyelenggara menjaga informasi ini agar proses kompetisi tetap adil dan terstruktur bagi semua peserta.
                </p>
              </div>
            </div>

            <div className="space-y-5 px-6 py-8 sm:px-8 lg:px-10 bg-white/40">
              <div className="flex flex-wrap gap-3">
                <Badge tone="brand">Secure</Badge>
                <Badge tone="emerald">Restricted</Badge>
                <Badge tone="neutral">Contest Only</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {rules.map((rule, idx) => (
                   <div key={idx} className="rounded-[24px] border border-border bg-white/72 p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-brand-primary/30">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                           <rule.icon className="w-4 h-4" />
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                          RULE_{idx + 1}
                        </p>
                      </div>
                      <p className="mt-3 text-lg font-semibold text-foreground">
                        {rule.title}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-muted">
                        {rule.desc}
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

