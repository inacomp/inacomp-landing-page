import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    title: "Pemahaman Jaringan",
    description:
      "Peserta diuji dalam memahami konsep jaringan komputer secara menyeluruh, terstruktur, dan siap diterapkan pada skenario kompetisi.",
  },
  {
    title: "Kesiapan Teknis",
    description:
      "Kompetisi dirancang untuk melihat kesiapan peserta dalam menghadapi tantangan teknis yang menuntut ketelitian, analisis, dan respons cepat.",
  },
  {
    title: "Presentasi Solusi",
    description:
      "Pada babak final, peserta juga perlu menjelaskan hasil dan pendekatan mereka melalui sesi presentasi secara profesional.",
  },
];

export function CiscoAbout() {
  return (
    <section id="tentang" className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Tentang Lomba"
            title="Kompetisi jaringan komputer nasional untuk pelajar yang ingin serius di bidang networking."
            description="Cisco Networking di INACOMP 2.0 dirancang untuk siswa/i SMA/SMK/sederajat yang ingin menunjukkan pemahaman jaringan komputer, ketelitian teknis, dan kesiapan presentasi dalam format kompetisi yang profesional."
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="surface-card bg-gradient-to-br from-white via-brand-primary/5 to-brand-accent/10 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
