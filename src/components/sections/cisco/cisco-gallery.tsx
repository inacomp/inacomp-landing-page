import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

const ciscoImages = [
  { src: "/assets/inacomp/cisco/satu.jpeg", alt: "Galeri Cisco Networking 1" },
  { src: "/assets/inacomp/cisco/dua.jpeg", alt: "Galeri Cisco Networking 2" },
  { src: "/assets/inacomp/cisco/tiga.jpeg", alt: "Galeri Cisco Networking 3" },
  { src: "/assets/inacomp/cisco/empat.jpeg", alt: "Galeri Cisco Networking 4" },
  { src: "/assets/inacomp/cisco/lima.jpeg", alt: "Galeri Cisco Networking 5" },
  { src: "/assets/inacomp/cisco/enam.jpeg", alt: "Galeri Cisco Networking 6" },
];

export function CiscoGallery() {
  return (
    <section className="section-shell">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Galeri Cisco Networking INACOMP 1.0"
            title="Dokumentasi Cisco Networking Competition."
            description="Melihat kembali antusiasme para peserta dalam memecahkan tantangan jaringan pada penyelenggaraan INACOMP sebelumnya."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ciscoImages.map((image, index) => (
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
