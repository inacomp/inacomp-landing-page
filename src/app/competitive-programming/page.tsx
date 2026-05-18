import type { Metadata } from "next";
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
import { GalleryMosaic, SectionIntro } from "@/components/marketing/primitives";
import { Container } from "@/components/ui/container";
import { cpFaqItems, cpGallery, cpTimeline } from "@/lib/site-content";

const pageUrl = "https://inacomp.vercel.app/competitive-programming";
const pageTitle = "Competitive Programming | INACOMP 2.0";
const pageDescription =
  "Competitive Programming INACOMP 2.0 adalah divisi lomba nasional untuk pelajar yang ingin menguji logika, ketepatan solusi, dan kemampuan problem solving secara terstruktur.";

const formatItems = [
  {
    title: "Tekanan waktu yang nyata",
    description:
      "Peserta dituntut membaca persoalan dengan cepat, memilih strategi yang masuk akal, lalu mengeksekusi solusi dengan tenang.",
    icon: Clock3,
  },
  {
    title: "Fokus pada kualitas solusi",
    description:
      "Yang dilihat bukan hanya hasil akhir, tetapi juga ketepatan pendekatan dan konsistensi berpikir sepanjang babak kompetisi.",
    icon: BrainCircuit,
  },
  {
    title: "Atmosfer teknis yang rapi",
    description:
      "Halaman ini dibangun agar terasa kompetitif dan teknis, tetapi tetap bersih, mudah dibaca, dan tidak berlebihan secara visual.",
    icon: Cpu,
  },
];

const rulesOverview = [
  "Peserta perlu siap menghadapi soal yang menuntut logika, strategi, dan ketelitian.",
  "Babak penyisihan dan final mengikuti timeline umum INACOMP 2.0.",
  "Informasi teknis rinci akan disampaikan melalui technical meeting dan kanal resmi panitia.",
  "Persiapan terbaik untuk track ini adalah latihan berpikir sistematis dan manajemen waktu.",
];

const benefits = [
  "Mengasah kemampuan problem solving pada konteks kompetitif.",
  "Melatih konsistensi berpikir cepat tanpa kehilangan akurasi.",
  "Memberi pengalaman kompetisi nasional yang relevan untuk pelajar teknologi.",
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
          item: "https://inacomp.vercel.app/",
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
      startDate: "2026-05-18",
      endDate: "2026-07-04",
      url: pageUrl,
      image: ["https://inacomp.vercel.app/assets/booklet-cp.jpg"],
      organizer: {
        "@type": "Organization",
        name: "BEM PTIK Universitas Negeri Jakarta",
        url: "https://inacomp.vercel.app/",
      },
      audience: {
        "@type": "EducationalAudience",
        audienceType: "Siswa/i SMA/SMK/sederajat",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "competitive programming inacomp",
    "kompetisi coding pelajar nasional",
    "lomba algoritma sma smk",
    "INACOMP 2.0 competitive programming",
  ],
  alternates: {
    canonical: "/competitive-programming",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/assets/booklet-cp.jpg",
        alt: "Competitive Programming INACOMP 2.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/booklet-cp.jpg"],
  },
};

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
                      Cabang untuk peserta yang ingin diuji lewat
                      <span className="text-brand-accent"> logika, strategi, dan ketepatan solusi.</span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-muted">
                      Competitive Programming INACOMP 2.0 dirancang untuk
                      pelajar yang kuat di problem solving dan siap tampil pada
                      atmosfer kompetisi nasional yang terstruktur.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/#tracks" className="primary-button">
                    Kembali ke Divisi Lomba
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                        Fokus pada pembacaan soal, ketenangan, dan kualitas keputusan.
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        Tampilan halaman ini sengaja dibuat lebih tegas dan
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
                title="Competitive Programming harus terasa fokus, terukur, dan disiplin."
                description="Cabang ini tidak membutuhkan visual yang ramai. Yang lebih penting adalah struktur informasi yang tajam dan suasana yang konsisten dengan karakter lombanya."
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
                  title="Hal-hal penting yang perlu dipahami peserta sebelum masuk ke track ini."
                  description="Section ini menegaskan ekspektasi kompetisi tanpa membuat halaman terasa terlalu padat atau terlalu teknis."
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
                  title="Manfaat utama mengikuti Competitive Programming di INACOMP."
                  description="Selain hasil lomba, peserta membawa pulang pengalaman berpikir yang lebih terstruktur dan nilai kompetitif yang lebih nyata."
                />
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-3">
                {benefits.map((item, index) => (
                  <Reveal key={item} delay={0.05 * index}>
                    <article className="surface-card h-full p-5">
                      <Trophy className="h-5 w-5 text-brand-dark" />
                      <p className="mt-4 text-sm leading-7 text-muted">{item}</p>
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
                title="Timeline Competitive Programming disusun khusus untuk alur cabang ini."
                description="Di halaman Competitive Programming, timeline perlu fokus pada fase-fase yang benar-benar dilalui peserta cabang ini dari pendaftaran sampai pengumuman juara."
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
                      <p className="mt-2 text-sm leading-7 text-muted">{item.note}</p>
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
                eyebrow="Gallery"
                title="Atmosfer kompetitif yang tetap rapi dan kredibel."
                description="Galeri membantu menjaga rasa teknis dan keseriusan cabang ini tanpa memakai visual yang terlalu gelap atau teatrikal."
                align="center"
              />
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <GalleryMosaic items={cpGallery} />
            </Reveal>
          </Container>
        </section>

        <section className="section-space soft-section">
          <Container>
            <Reveal>
              <SectionIntro
                eyebrow="FAQ"
                title="Pertanyaan yang paling sering diajukan calon peserta Competitive Programming."
                description="Tetap ringkas, tetapi cukup untuk membantu peserta memahami arah kompetisi ini."
                align="center"
              />
            </Reveal>

            <Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
              <FaqAccordion items={cpFaqItems} />
            </Reveal>
          </Container>
        </section>

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
                      Kalau kekuatanmu ada di logika dan akurasi, cabang ini layak kamu prioritaskan.
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                      Pelajari kembali timeline dan arah kompetisinya, lalu
                      kembalilah ke halaman utama untuk memilih jalur yang paling
                      tepat bagi timmu.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link href="/#tracks" className="primary-button">
                      Kembali ke Divisi Lomba
                    </Link>
                    <Link href="/ui-ux-design" className="secondary-button">
                      Lihat UI/UX Design
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
