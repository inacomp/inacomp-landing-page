import { ArrowRight, BookOpen } from "lucide-react";
import { Reveal } from "@/components/marketing/reveal";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/marketing/primitives";
import { BookletCard } from "@/components/BookletCard";

type BookletType = "cp" | "uiux" | "all";

interface BookletSectionProps {
  type: BookletType;
}

const bookletData = {
  cp: {
    id: "cp",
    label: "COMPETITIVE PROGRAMMING",
    title: "Panduan Lengkap CP",
    description:
      "Aturan, format soal, kriteria penilaian, dan semua yang perlu kamu tahu sebelum bertanding.",
    link: "https://drive.google.com/file/d/11W5wSYLveWGsv-FbLH6IY3uNEnsqPJft/view",
    accentColor: "#2EC4A0",
    coverImage: "/assets/cover-booklet-cp.jpg",
  },
  uiux: {
    id: "uiux",
    label: "UI/UX DESIGN",
    title: "Panduan Lengkap UI/UX",
    description:
      "Alur kompetisi, kriteria penilaian, format pengumpulan karya, dan template yang bisa kamu gunakan.",
    link: "https://drive.google.com/file/d/1Peif8Z4eGpW0857rPVNLF46Th0JPuUhr/view",
    accentColor: "#2EA0C4",
    coverImage: "/assets/cover-booklet-uiux.jpg",
  },
};

export function BookletSection({ type }: BookletSectionProps) {
  const cards =
    type === "all" ? [bookletData.cp, bookletData.uiux] : [bookletData[type]];

  return (
    <section id="guidebook" className="section-space soft-section">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Guidebook"
            title={
              type === "all"
                ? "Baca dulu sebelum daftar."
                : "Panduan Resmi Kompetisi"
            }
            description={
              type === "all"
                ? "Semua aturan, format soal, dan kriteria penilaian sudah kami rangkum dalam satu booklet per divisi."
                : "Pelajari aturan, kriteria penilaian, dan teknis lomba secara lengkap."
            }
            align="center"
          />
        </Reveal>

        <div
          className={`mx-auto mt-10 flex flex-wrap justify-center gap-8 ${
            type === "all" ? "max-w-4xl" : "max-w-md"
          }`}
        >
          {cards.map((card, index) => (
            <Reveal key={card.id} delay={0.1 * index}>
              <BookletCard
                title={card.title}
                label={card.label}
                description={card.description}
                link={card.link}
                accentColor={card.accentColor}
                coverImage={card.coverImage}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
