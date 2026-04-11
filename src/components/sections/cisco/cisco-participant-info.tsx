import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const infoCards = [
  {
    value: "Maksimal 2 Orang",
    label: "Komposisi tim",
    accent: "from-brand-primary/12 to-white",
  },
  {
    value: "Jaringan Komputer",
    label: "Profil peserta",
    accent: "from-brand-primary-strong/12 to-white",
  },
  {
    value: "Skala Nasional",
    label: "Cakupan kompetisi",
    accent: "from-brand-accent/10 to-white",
  },
];

export function CiscoParticipantInfo() {
  return (
    <section className="section-shell">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Informasi Peserta"
            title="Informasi peserta ditampilkan ringkas agar langsung terbaca dan mudah dipahami."
            description="Section ini menyorot siapa yang cocok mengikuti Cisco Networking, format tim, dan skala kompetisi secara cepat tanpa membuat halaman terasa terlalu padat."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {infoCards.map((card) => (
              <div key={card.label} className={`surface-card bg-gradient-to-br ${card.accent} p-6`}>
                <p className="text-sm text-muted">{card.label}</p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
