import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const faqItems = [
  {
    question: "Berapa maksimal anggota tim?",
    answer:
      "Setiap tim terdiri dari maksimal 2 orang sesuai format kompetisi Cisco Networking INACOMP 2.0.",
  },
  {
    question: "Apakah pada final ada presentasi?",
    answer:
      "Ya. Pada babak final terdapat sesi presentasi sebagai bagian dari rangkaian kompetisi.",
  },
  {
    question: "Apakah topik diumumkan sebelumnya?",
    answer:
      "Tidak. Topik yang diujikan bersifat rahasia dan tidak dipublikasikan sebelumnya pada halaman ini.",
  },
  {
    question: "Apakah skill yang dinilai dipublikasikan?",
    answer:
      "Tidak. Skill yang dinilai juga bersifat rahasia dan tidak ditampilkan secara rinci pada landing page.",
  },
  {
    question: "Kapan informasi teknis dibagikan?",
    answer:
      "Informasi teknis lebih lanjut akan dibagikan melalui guidebook resmi dan technical meeting dari panitia.",
  },
];

export function CiscoFaq() {
  return (
    <section id="faq" className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Jawaban cepat untuk pertanyaan yang paling sering ditanyakan calon peserta Cisco Networking."
            description="FAQ ini dirancang singkat dan langsung ke poin penting agar peserta mudah memahami format tim, final presentation, kerahasiaan topik, dan distribusi informasi teknis."
          />
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
