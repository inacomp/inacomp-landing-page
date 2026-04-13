import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    title: "Problem Solving",
    description: "Peserta ditantang menyusun solusi yang efektif, terukur, dan tepat di bawah tekanan kompetisi.",
  },
  {
    title: "Logika & Strategi",
    description: "Setiap keputusan membutuhkan analisis yang rapi, pemetaan pendekatan, dan strategi penyelesaian yang matang.",
  },
  {
    title: "Kolaborasi Tim",
    description: "Format tim mendorong pembagian peran, komunikasi cepat, dan sinkronisasi pemikiran yang efisien.",
  },
];

export function CPAbout() {
  return (
    <section id="tentang" className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Tentang Lomba"
            title="Bukan sekadar lomba coding — ini tentang seberapa cepat kamu bisa berpikir dan mengeksekusi."
            description="Di Competitive Programming INACOMP 2.0, kamu dan timmu akan dihadapkan pada soal-soal algoritmik yang menuntut logika tajam, strategi yang tepat, dan eksekusi yang efisien."
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`surface-card p-6 ${index === 1 ? "bg-[linear-gradient(180deg,_rgba(83,170,161,0.08),_rgba(255,255,255,0.88))]" : ""}`}
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
