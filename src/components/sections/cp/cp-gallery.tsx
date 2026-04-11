import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

const cpImages = [
  { src: "/assets/inacomp/cp/satu.jpeg", alt: "Suasana Kompetisi CP 1" },
  { src: "/assets/inacomp/cp/dua.jpeg", alt: "Suasana Kompetisi CP 2" },
  { src: "/assets/inacomp/cp/tiga.jpeg", alt: "Suasana Kompetisi CP 3" },
  { src: "/assets/inacomp/cp/empat.jpeg", alt: "Suasana Kompetisi CP 4" },
  { src: "/assets/inacomp/cp/lima.jpeg", alt: "Suasana Kompetisi CP 5" },
  { src: "/assets/inacomp/cp/enam.jpg", alt: "Suasana Kompetisi CP 6" },
];

export function CPGallery() {
  return (
    <section className="section-shell">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Galeri CP INACOMP 1.0"
            title="Dokumentasi Competitive Programming."
            description="Melihat kembali momen-momen antusiasme dan fokus para peserta Competitive Programming dalam ajang INACOMP sebelumnya."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cpImages.map((image, index) => (
              <div
                key={index}
                className="surface-card group overflow-hidden p-3 transition-all duration-300 hover:border-brand-primary/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
