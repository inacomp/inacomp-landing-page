import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const faqItems = [
  {
    question: "Siapa yang bisa mengikuti lomba ini?",
    answer:
      "Siswa/i SMA/SMK/sederajat dari seluruh Indonesia yang ingin berkompetisi di cabang Competitive Programming INACOMP 2.0.",
  },
  {
    question: "Berapa maksimal anggota tim?",
    answer:
      "Maksimal 2 orang per tim.",
  },
  {
    question: "Apakah materi akan diumumkan?",
    answer:
      "Tidak. Topik yang diujikan tidak dibocorkan sebelumnya agar kompetisi tetap adil bagi semua peserta.",
  },
  {
    question: "Apakah mekanisme penilaian dipublikasikan?",
    answer:
      "Tidak. Detail sistem penilaian bersifat rahasia dan tidak diumumkan di halaman ini.",
  },
  {
    question: "Kapan detail teknis akan diberikan?",
    answer:
      "Detail teknis lengkap akan disampaikan melalui guidebook dan technical meeting resmi dari panitia.",
  },
];

export function CPFaq() {
  return (
    <section id="faq" className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering muncul seputar Competitive Programming."
            description="Jawaban singkat untuk pertanyaan umum — format tim, kerahasiaan materi, dan cara mendapatkan informasi teknis lebih lanjut."
          />
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
