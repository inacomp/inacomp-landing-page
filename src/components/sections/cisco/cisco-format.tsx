import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const formatItems = [
  {
    title: "Format Tim",
    description:
      "Kompetisi diikuti secara tim dengan komposisi maksimal 2 orang untuk menjaga kolaborasi tetap efektif dan fokus.",
  },
  {
    title: "Babak Final + Presentasi",
    description:
      "Peserta yang melaju ke final akan mengikuti sesi presentasi sebagai bagian dari penilaian dan penyampaian hasil kerja.",
  },
  {
    title: "Detail Teknis Lanjutan",
    description:
      "Penjelasan teknis lebih lengkap mengenai alur, ketentuan, dan pelaksanaan akan diberikan melalui guidebook dan technical meeting resmi.",
  },
];

export function CiscoFormat() {
  return (
    <section id="format" className="section-shell">
      <Container>
        <div className="surface-card bg-gradient-to-br from-white via-brand-primary/5 to-brand-accent/10 p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Format Kompetisi"
            title="Struktur kompetisi disajikan jelas, rapi, dan tetap menyisakan detail teknis untuk guidebook serta technical meeting."
            description="Halaman ini menampilkan gambaran utama kompetisi secara high-level agar mudah dipindai. Rincian teknis operasional akan dijelaskan lebih lanjut melalui guidebook dan technical meeting."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {formatItems.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-border bg-white/74 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-dark text-sm font-semibold text-white">
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
