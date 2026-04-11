import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export function CiscoSecretSkills() {
  const skills = [
    { name: "Diagnostic Aptitude", desc: "Kemampuan identifikasi anomali pada topologi kompleks." },
    { name: "Command Efficiency", desc: "Ketepatan dan kecepatan penggunaan sintaks CLI Cisco." },
    { name: "Infrastructural Logic", desc: "Pemahaman logika routing dan switching di level enterprise." },
    { name: "Dynamic Resolution", desc: "Penyelesaian masalah secara real-time pada skenario kritis." },
  ];

  return (
    <section className="section-shell">
      <Container>
        <div className="surface-card overflow-hidden group">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[linear-gradient(180deg,_#22464C,_#2D495D)] px-6 py-8 text-white sm:px-8 lg:px-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 transition-transform duration-1000 group-hover:rotate-45">
                 <ShieldAlert className="w-48 h-48" />
              </div>
              <div className="relative">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Skill yang Dinilai
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Informasi skill penilaian disimpan sebagai private competition information.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                  Halaman ini tidak mempublikasikan indikator skill yang dinilai secara rinci. Informasi tersebut dijaga tetap terbatas agar pengalaman kompetisi tetap objektif dan profesional.
                </p>
              </div>
            </div>

            <div className="space-y-5 px-6 py-8 sm:px-8 lg:px-10 bg-white/40">
              <div className="flex flex-wrap gap-3">
                <Badge tone="brand">Private</Badge>
                <Badge tone="emerald">Secure</Badge>
                <Badge tone="neutral">Assessment Only</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((item, idx) => (
                  <div key={idx} className="rounded-[24px] border border-border bg-white/72 p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                        SKILL_CAT_{idx + 1}
                      </p>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-muted">
                      {item.desc}
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

