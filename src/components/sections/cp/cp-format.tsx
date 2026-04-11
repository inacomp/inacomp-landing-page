import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const formatItems = [
  {
    title: "Format Tim",
    description: "Kompetisi diikuti secara tim dengan komposisi maksimal 2 orang per tim.",
  },
  {
    title: "Alur Kompetisi",
    description: "Peserta akan mengikuti rangkaian kompetisi dalam format terstruktur dan berorientasi pada penyelesaian soal secara efisien.",
  },
  {
    title: "Detail Teknis",
    description: "Format lengkap, aturan teknis, dan penjelasan operasional akan dijabarkan melalui guidebook dan technical meeting.",
  },
];

export function CPFormat() {
  return (
    <section id="format" className="section-shell">
      <Container>
        <div className="surface-card p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Format Kompetisi"
            title="Disusun terarah, tidak bertele-tele, dan tetap memberi ruang untuk detail teknis di guidebook."
            description="Informasi pada halaman ini sengaja ditampilkan secara high-level. Penjelasan lengkap mengenai alur dan pelaksanaan kompetisi akan diberikan lebih lanjut pada guidebook dan technical meeting."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {formatItems.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-border bg-white/72 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
