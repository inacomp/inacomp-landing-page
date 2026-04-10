import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const faqItems = [
  {
    question: "Siapa yang bisa mengikuti lomba ini?",
    answer:
      "Lomba ini tersedia untuk siswa/i SMA/SMK/sederajat yang ingin mengikuti cabang Competitive Programming INACOMP 2.0.",
  },
  {
    question: "Berapa maksimal anggota tim?",
    answer:
      "Setiap tim terdiri dari maksimal 2 orang. Peserta dapat mengikuti kompetisi sesuai format tim yang ditetapkan panitia.",
  },
  {
    question: "Apakah materi akan diumumkan?",
    answer:
      "Tidak. Materi atau topik yang diujikan bersifat rahasia dan tidak dipublikasikan pada halaman ini.",
  },
  {
    question: "Apakah mekanisme penilaian dipublikasikan?",
    answer:
      "Tidak. Mekanisme penilaian bersifat rahasia dan tidak menampilkan detail scoring maupun penjurian pada landing page.",
  },
  {
    question: "Kapan detail teknis akan diberikan?",
    answer:
      "Detail teknis lengkap akan dijelaskan lebih lanjut melalui guidebook dan technical meeting resmi dari panitia.",
  },
];

export function CPFaq() {
  return (
    <section id="faq" className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Jawaban cepat untuk pertanyaan yang paling sering ditanyakan peserta."
            description="Disusun singkat agar mudah dipindai, terutama untuk informasi peserta, format tim, kerahasiaan materi, dan waktu pembagian detail teknis."
          />
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
