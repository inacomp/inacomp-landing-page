import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CalendarRange,
  CheckCircle2,
  Clock3,
  Code2,
  Cpu,
  Trophy,
} from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/marketing/reveal";
import { SectionIntro } from "@/components/marketing/primitives";
import { Container } from "@/components/ui/container";
import { ContactAdminSection } from "@/components/sections/shared/contact-admin-section";
import { BookletCard } from "@/components/BookletCard";
import { cpFaqItems, cpTimeline } from "@/lib/site-content";
import {
  absoluteUrl,
  buildHybridEventLocation,
  buildPageMetadata,
  eventSchedule,
} from "@/lib/seo";

const pagePath = "/competitive-programming";
const pageUrl = absoluteUrl(pagePath);
const pageTitle = "Competitive Programming | INACOMP 2.0";
const pageDescription =
  "Competitive Programming INACOMP 2.0 adalah kategori lomba nasional untuk pelajar yang ingin menguji logika, ketepatan solusi, dan kemampuan problem solving secara terstruktur.";

const formatItems = [
  {
    title: "Waktu yang tidak menunggu",
    description:
      "Setiap soal punya batas. Kamu dituntut bukan cuma benar, tapi juga efisien.",
    icon: Clock3,
  },
  {
    title: "Solusi, bukan sekadar jawaban",
    description:
      "Partial credit tidak cukup. Yang dihitung adalah solusi yang lulus semua test case.",
    icon: BrainCircuit,
  },
  {
    title: "Tim yang saling menjaga ritme",
    description:
      "Dua kepala lebih baik satu — kalau keduanya bisa komunikasi saat stuck.",
    icon: Cpu,
  },
];

const rulesOverview = [
  "Kompetisi berlangsung secara online (penyisihan) dan offline di Universitas Negeri Jakarta (final).",
  "Satu tim terdiri dari 2–3 orang. Tidak bisa mendaftar sendiri.",
  "Soal ditulis dalam Bahasa Indonesia dan Inggris.",
  "Kamu akan menggunakan judge system standar — pastikan familiar dengan format input/output.",
  "Peserta yang lolos ke final akan dihubungi melalui email dan pengumuman resmi di media sosial.",
];

const benefits = [
  "Sertifikat nasional — diakui sebagai peserta kompetisi programming berskala nasional.",
  "Networking sesama programmer — ketemu orang-orang yang solve soal yang sama, kenal sebelum wisuda.",
  'Portofolio yang konkret — bukan sekadar "pernah ikut lomba", tapi ada hasilnya.',
  "Hadiah untuk finalis dan juara — detail di booklet resmi.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "INACOMP 2.0",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Competitive Programming",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Event",
      name: "Competitive Programming INACOMP 2.0",
      description: pageDescription,
      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: eventSchedule.startDate,
      endDate: eventSchedule.endDate,
      url: pageUrl,
      image: [absoluteUrl("/assets/booklet-cp.jpg")],
      location: buildHybridEventLocation(pageUrl),
      organizer: {
        "@type": "Organization",
        name: "BEM PTIK Universitas Negeri Jakarta",
        url: absoluteUrl("/"),
      },
      audience: {
        "@type": "EducationalAudience",
        audienceType: "Siswa/i SMA/SMK/sederajat",
      },
    },
  ],
};

export const metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    "competitive programming inacomp",
    "kompetisi coding pelajar nasional",
    "lomba algoritma sma smk",
    "INACOMP 2.0 competitive programming",
  ],
  image: {
    url: "/assets/booklet-cp.jpg",
    alt: "Competitive Programming INACOMP 2.0",
  },
});

export default function CompetitiveProgrammingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="page-shell">
        <section className="section-space pb-12 pt-10 md:pt-14 lg:pt-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
              <Reveal className="space-y-8">
                <div className="space-y-5">
                  <span className="eyebrow">
                    <Code2 className="h-3.5 w-3.5" />
                    Competitive Programming
                  </span>
                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1] sm:text-5xl lg:text-6xl">
                      Seberapa cepat kamu bisa debug di bawah tekanan?
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-muted">
                      Competitive Programming INACOMP 2.0 — satu arena, dua jam,
                      satu jawaban yang benar. Kalau kamu terbiasa latihan di
                      Codeforces, LeetCode, atau ICPC, ini tempatnya. Bawa tim,
                      tulis kode, buktikan.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://forms.gle/WJBUZnyZUKkasZ9Z7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    Daftar Sekarang
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="#cp-timeline" className="secondary-button">
                    Lihat Timeline
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="hero-surface p-5 sm:p-6">
                  <div className="grid gap-4">
                    <div className="surface-card p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">
                        Competition Format
                      </p>
                      <h2 className="mt-3 text-2xl font-bold">
                        Fokus pada pembacaan soal, ketenangan, and kualitas
                        keputusan.
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        Tampilan halaman ini sengaja dibuat lebih tegas and
                        lebih ringkas, agar atmosfer teknisnya terasa tanpa
                        berubah menjadi visual yang gelap atau berlebihan.
                      </p>
                    </div>

                    <div className="surface-card editorial-grid p-5">
                      <div className="rounded-[16px] bg-white/90 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">
                          Technical Atmosphere
                        </p>
                        <div className="mt-4 space-y-3 text-sm text-muted">
                          <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3">
                            Baca persoalan dengan cermat.
                          </div>
                          <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3">
                            Pilih pendekatan yang paling efisien.
                          </div>
                          <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3">
                            Jaga akurasi sampai batas waktu terakhir.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="section-space pt-6">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="Competition Format"
                title="Bukan soal siapa yang paling banyak tahu. Tapi siapa yang paling cepat berpikir."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {formatItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={0.05 * index}>
                    <article className="surface-card h-full p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-brand-soft text-brand-dark">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="section-space soft-section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <Reveal>
                <SectionIntro
                  eyebrow="Rules Overview"
                  title="Sebelum daftar, baca ini dulu."
                />
              </Reveal>

              <div className="grid gap-3">
                {rulesOverview.map((item, index) => (
                  <Reveal key={item} delay={0.04 * index}>
                    <div className="surface-card flex items-start gap-3 p-4">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-primary" />
                      <p className="text-sm leading-7 text-muted">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="section-space">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <Reveal>
                <SectionIntro
                  eyebrow="Benefits"
                  title="Kenapa ikut INACOMP 2.0 CP?"
                />
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((item, index) => (
                  <Reveal key={item} delay={0.05 * index}>
                    <article className="surface-card h-full p-5">
                      <Trophy className="h-5 w-5 text-brand-dark" />
                      <p className="mt-4 text-sm leading-7 text-muted">
                        {item}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="cp-timeline" className="section-space soft-section">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="Timeline"
                title="Timeline dirancang ketat agar semua peserta punya waktu persiapan yang sama."
                align="center"
              />
            </Reveal>

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {cpTimeline.map((item, index) => (
                <Reveal key={`${item.date}-${item.title}`} delay={0.04 * index}>
                  <article className="surface-panel grid gap-4 p-5 md:grid-cols-[220px_1fr]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">
                      {item.date}
                    </p>
                    <div className="border-t border-slate-200 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {item.note}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-space">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="Guidebook"
                title="Panduan Resmi Kompetisi"
                description="Pelajari aturan, kriteria penilaian, dan teknis lomba secara lengkap."
                align="center"
              />
            </Reveal>
            <div className="mx-auto mt-10 flex max-w-md justify-center">
              <Reveal delay={0.1}>
                <BookletCard
                  title="Panduan Lengkap CP"
                  label="COMPETITIVE PROGRAMMING"
                  description="Aturan, format soal, kriteria penilaian, dan semua yang perlu kamu tahu sebelum bertanding."
                  link="https://drive.google.com/file/d/1-x9eYZNNAknuPu85JfHzxG-wD5w2Lzs9/view?usp=sharing"
                  accentColor="#2EC4A0"
                  coverImage="/assets/cover-booklet-cp.jpg"
                />
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="section-space soft-section">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="FAQ"
                title="Frequently Asked Question”"
                description="Tetap ringkas, tetapi cukup untuk membantu peserta memahami arah kompetisi ini."
                align="center"
              />
            </Reveal>

            <Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
              <FaqAccordion items={cpFaqItems} />
            </Reveal>
          </Container>
        </section>

        <ContactAdminSection />

        <section className="section-space pt-10">
          <Container>
            <Reveal>
              <div className="hero-surface px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="space-y-4">
                    <span className="eyebrow">
                      <CalendarRange className="h-3.5 w-3.5" />
                      Competitive Programming CTA
                    </span>
                    <h2 className="max-w-3xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
                      Sudah siap nulis kode di bawah tekanan?
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                      Pendaftaran ditutup 29 Juni. Satu form untuk dua cabang.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://forms.gle/WJBUZnyZUKkasZ9Z7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-button justify-center"
                    >
                      Daftar Sekarang
                    </a>
                    <p className="text-sm text-muted">
                      Satu form untuk Competitive Programming & UI/UX Design.
                    </p>
                    <Link
                      href="/#tracks"
                      className="secondary-button justify-center"
                    >
                      Kembali ke Kategori Lomba
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>
    </>
  );
}
