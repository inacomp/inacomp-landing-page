import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";


const aboutHighlights = [
  {
    title: "Edisi Kedua",
    icon: "sparkles",
    description:
      "Edisi kedua yang hadir lebih matang, dengan format yang lebih terarah.",
  },
  {
    title: "Diselenggarakan BEM PTIK UNJ",
    icon: "school",
    description:
      "Digelar oleh BEM Prodi Pendidikan Teknik Informatika dan Komputer UNJ.",
  },
  {
    title: "Untuk Siswa/i SMA/SMK",
    icon: "users",
    description:
      "Terbuka untuk siswa/i SMA/SMK/sederajat dari seluruh Indonesia.",
  },
  {
    title: "Fokus Teknologi",
    icon: "cpu",
    description:
      "Dua cabang lomba: Competitive Programming dan Cisco Networking.",
  },
];

const tracks = [
  {
    title: "Competitive Programming",
    href: "/competitive-programming",
    accent: "from-brand-primary/14 via-white to-brand-accent/8",
    badgeClass: "bg-brand-primary text-white",
    buttonClass: "bg-brand-primary text-white hover:bg-brand-primary-strong",
    description:
      "Uji logika dan kemampuan problem solving lewat soal-soal algoritma yang menantang waktu.",
    points: ["Algoritma & logika", "Format kompetitif", "Cocok untuk problem solver"],
    image: "/assets/booklet-cp.jpg"
  },
  {
    title: "Cisco Networking",
    href: "/cisco-networking",
    accent: "from-brand-accent/12 via-white to-brand-primary/10",
    badgeClass: "bg-brand-dark text-white",
    buttonClass: "bg-brand-dark text-white hover:bg-brand-accent",
    description:
      "Tes pemahaman jaringan komputer, troubleshooting, dan konfigurasi infrastruktur digital.",
    points: ["Networking fundamentals", "Cisco-oriented", "Hands-on problem mindset"],
    image: "/assets/booklet-cisco.jpg"

  },
];

const timelineItems = [
  {
    date: "21 Mei – 28 Mei 2026",
    title: "Pendaftaran Peserta Perlombaan",
  },
  {
    date: "31 Mei 2026",
    title: "Technical Meeting Penyisihan",
  },
  {
    date: "2 Juni 2026",
    title: "Penyisihan Competitive Programming dan Cisco Networking",
  },
  {
    date: "4 Juni 2026",
    title: "Pengumuman Finalis Perlombaan",
  },
  {
    date: "9 Juni 2026",
    title: "Technical Meeting Final",
  },
  {
    date: "12 Juni 2026",
    title: "Final dan Pengumuman Juara",
  },
];

const faqItems = [
  {
    question: "Siapa yang bisa mengikuti INACOMP?",
    answer:
      "Siswa/i SMA/SMK/sederajat dari seluruh Indonesia yang punya minat di bidang pemrograman komputer atau jaringan komputer.",
  },
  {
    question: "Apakah lomba dilaksanakan secara tim?",
    answer:
      "Format per cabang berbeda. Cek halaman cabang lomba atau guidebook resmi untuk detailnya.",
  },
  {
    question: "Bagaimana cara mendapatkan guidebook?",
    answer:
      "Ada tombol Download Guidebook di halaman ini dan di masing-masing halaman cabang lomba.",
  },
  {
    question: "Apa saja cabang lomba yang tersedia?",
    answer:
      "INACOMP 2.0 membuka dua cabang lomba: Competitive Programming dan Cisco Networking.",
  },
  {
    question: "Kapan informasi teknis diumumkan?",
    answer:
      "Setelah registrasi dibuka, info teknis lengkap akan disampaikan lewat kanal resmi INACOMP 2.0.",
  },
];

const galleryImages = [
  { src: "/assets/inacomp/home/satu.png", alt: "Gallery 1", heightClass: "h-52 sm:h-64" },
  { src: "/assets/inacomp/home/dua.png", alt: "Gallery 2", heightClass: "h-72 sm:h-80" },
  { src: "/assets/inacomp/home/empat.jpg", alt: "Gallery 4", heightClass: "h-80 sm:h-96" },
  { src: "/assets/inacomp/home/lima.jpeg", alt: "Gallery 5", heightClass: "h-56 sm:h-64" },
  { src: "/assets/inacomp/home/enam.jpg", alt: "Gallery 6", heightClass: "h-72 sm:h-80" },
  { src: "/assets/inacomp/home/tujuh.jpg", alt: "Gallery 7", heightClass: "h-64 sm:h-72" },
];

function Icon({ name }: { name: string }) {
  if (name === "sparkles")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
        <path d="M21 3v2" />
        <path d="M21 7v2" />
        <path d="M19 5h2" />
        <path d="M15 5h2" />
      </svg>
    );
  if (name === "school")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
        <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
        <path d="M18 5v17" />
        <path d="m4 6 8-4 8 4" />
        <path d="M6 5v17" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    );
  if (name === "users")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  if (name === "cpu")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    );
  return null;
}

export default function Home() {
  return (
    <div className="page-shell page-shell-home flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(83,170,161,0.2),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(45,73,93,0.16),_transparent_24%)]" />
      <div className="pointer-events-none absolute left-[-6rem] top-28 -z-10 h-64 w-64 rounded-full bg-brand-primary/14 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-[-8rem] top-36 -z-10 h-80 w-80 rounded-full bg-brand-accent/12 blur-3xl animate-glow-drift" />

      <div>
        <section className="px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary-strong shadow-soft backdrop-blur-sm">
                  INACOMP
                </div>
                <div className="space-y-2">
                  <h1 className="max-w-3xl font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                    Informatics National Competition
                  </h1>
                </div>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  Informatics National Competition (INACOMP) merupakan kompetisi
                  yang berfokus pada bidang pemrograman komputer dan jaringan komputer.
                  Diselenggarakan oleh Badan Eksekutif Mahasiswa Prodi Pendidikan Teknik
                  Informatika dan Komputer Universitas Negeri Jakarta, kompetisi ini
                  diselenggarakan nasional dan ditujukan kepada siswa/i
                  SMA/SMK/sederajat.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#closing-cta"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-primary-strong sm:text-base"
                >
                  Daftar Sekarang
                </a>
                <a
                  href="#cabang-lomba"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white/78 px-6 py-3.5 text-sm font-semibold text-brand-dark hover:border-brand-primary hover:text-brand-dark sm:text-base"
                >
                  Lihat Cabang Lomba
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-radial-brand shadow-soft relative overflow-hidden rounded-[2rem] border border-white/70 p-5 sm:p-7 lg:p-8">
                <div className="bg-grid-soft absolute inset-0 opacity-45" />
                <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-brand-primary/18 blur-3xl animate-float-slow" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-brand-accent/12 blur-3xl animate-glow-drift" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between rounded-[1.5rem] border border-white/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                        We're Back
                      </p>
                      <p className="mt-1 text-lg font-semibold text-foreground">
                        INACOMP 2.0
                      </p>
                    </div>
                    <span className="rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
                      Bright Mode
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                    <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                      <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(83,170,161,0.08),_rgba(45,73,93,0.06))] p-8 sm:p-12">
                        <div className="relative h-full w-full">
                          <Image
                            src="/favicon/android-chrome-512x512.png"
                            alt="INACOMP Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="rounded-[1.75rem] border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                          Cabang Lomba
                        </p>
                        <div className="mt-4 space-y-3">
                          <div className="rounded-[1.25rem] bg-brand-primary/12 px-3 py-3 text-sm font-medium text-brand-dark">
                            Competitive Programming
                          </div>
                          <div className="rounded-[1.25rem] bg-brand-accent/10 px-3 py-3 text-sm font-medium text-brand-dark">
                            Cisco Networking
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[1.75rem] border border-brand-dark/10 bg-brand-dark p-5 text-white shadow-soft">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                          Penyelenggara
                        </p>
                        <p className="mt-3 text-xl font-semibold leading-snug">
                          Universitas Negeri Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="tentang" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-border bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary-strong">
                Tentang INACOMP
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Kompetisi teknologi nasional untuk siswa/i SMA/SMK yang siap unjuk kemampuan.
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                INACOMP 2.0 adalah edisi kedua dari Informatics National Competition — ajang tahunan yang membuka ruang bagi siswa/i SMA/SMK/sederajat untuk bersaing di bidang pemrograman komputer dan jaringan komputer di tingkat nasional.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/80 bg-white/76 p-6 shadow-soft backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_rgba(83,170,161,0.2),_rgba(45,73,93,0.18))] text-brand-primary-strong">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cabang-lomba" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex rounded-full border border-border bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary-strong">
                Cabang Lomba
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Dua cabang lomba, satu kompetisi — pilih yang paling sesuai minatmu.
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Competitive Programming untuk yang suka algoritma, Cisco Networking untuk yang tertarik di dunia jaringan. Keduanya berskala nasional, keduanya menantang.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              {tracks.map((track) => (
                <article
                  key={track.title}
                  className={`relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br ${track.accent} p-6 shadow-soft backdrop-blur-sm sm:p-7`}
                >

                  <div className="space-y-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted sm:text-xs">
                        INACOMP Track
                      </p>
                      <h3 className="mt-2 font-mono text-xl font-bold text-foreground sm:text-2xl">
                        {track.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-6 text-muted sm:text-sm sm:leading-7">
                      {track.description}
                    </p>
                    <div className="relative h-56 overflow-hidden rounded-[1.75rem] border border-white/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.5),_rgba(83,170,161,0.12),_rgba(45,73,93,0.12))] sm:h-72">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {track.points.map((point, index) => (
                        <div
                          key={point}
                          className="rounded-[1.25rem] border border-white/80 bg-white/76 p-3 text-sm font-medium text-foreground"
                        >
                          <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary/10 text-[10px] font-semibold text-brand-dark">
                            0{index + 1}
                          </span>
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href={track.href}
                        className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold sm:py-3 ${track.buttonClass}`}
                      >
                        Lihat Detail
                      </Link>
                      <a
                        href="#guidebook"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-white/78 px-5 py-2.5 text-sm font-semibold text-brand-dark hover:border-brand-primary hover:text-brand-dark sm:py-3"
                      >
                        Download Guidebook
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.72),_rgba(239,247,246,0.78))] p-6 shadow-soft backdrop-blur-xl sm:p-8 lg:p-12">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(83,170,161,0.2),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(45,73,93,0.14),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(81,158,151,0.04))]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,_rgba(34,70,76,0.04)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(34,70,76,0.04)_1px,_transparent_1px)] bg-[size:32px_32px] opacity-35 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),transparent_96%)]" />
            <div className="pointer-events-none absolute left-[-4rem] top-20 -z-10 h-40 w-40 rounded-full bg-brand-primary/18 blur-3xl" />
            <div className="pointer-events-none absolute right-[-3rem] top-12 -z-10 h-52 w-52 rounded-full bg-brand-accent/14 blur-3xl" />

            <div className="max-w-3xl space-y-4">
              <span className="inline-flex rounded-full border border-white/80 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary-strong backdrop-blur-sm">
                Timeline
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Dari pendaftaran sampai grand final — ini jadwal lengkap INACOMP 2.0.
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Catat tanggalnya, siapkan timmu, dan pastikan tidak ada satu tahapan pun yang terlewat.
              </p>
            </div>

            <div className="relative mt-14 sm:mt-16 lg:mt-20">
              <div className="space-y-0">
                {timelineItems.map((item, index) => {
                  const isLast = index === timelineItems.length - 1;
                  const isRight = !isLast && index % 2 === 0;
                  const isLeft = !isLast && index % 2 !== 0;

                  const desktopAlign = isLast
                    ? "lg:justify-center"
                    : isRight
                      ? "lg:justify-end lg:pr-20"
                      : "lg:justify-start lg:pl-20";

                  const cardClass = isLast
                    ? "relative w-full max-w-[34rem] overflow-hidden rounded-[1.9rem] border border-white/85 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96),_rgba(241,248,247,0.92))] px-5 py-5 text-left shadow-[0_22px_56px_rgba(34,70,76,0.12)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-primary/35 group-hover:shadow-[0_28px_68px_rgba(34,70,76,0.16)] sm:px-6 sm:py-6 lg:px-8 lg:py-7"
                    : "relative w-full max-w-[28rem] overflow-hidden rounded-[1.75rem] border border-white/85 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(241,248,247,0.9))] px-5 py-5 text-left shadow-[0_18px_50px_rgba(34,70,76,0.08)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-primary/35 group-hover:shadow-[0_24px_60px_rgba(34,70,76,0.12)] sm:px-6 sm:py-6 lg:px-7";

                  return (
                    <div key={item.title} className="group relative py-10 sm:py-12 lg:py-16">
                      {/* Vertical Line Fragment */}
                      <div className="absolute left-5 top-0 h-full w-px lg:left-1/2">
                        <div
                          className={`w-full border-l-[1.5px] border-dashed border-brand-primary/25 ${index === 0 ? "mt-[28%] h-[72%]" : isLast ? "h-[26%]" : "h-full"}`}
                        />
                      </div>

                      {/* Dot on Central Line */}
                      {!isLast && (
                        <div className="pointer-events-none absolute left-5 top-1/4 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-white bg-brand-primary shadow-[0_0_0_5px_rgba(83,170,161,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-accent lg:left-1/2 lg:z-10" />
                      )}

                      {isLast && (
                        <div className="pointer-events-none absolute left-5 top-[26%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-brand-primary shadow-[0_0_0_6px_rgba(83,170,161,0.12)] lg:left-1/2 lg:z-10" />
                      )}

                      {/* Curve Connector (Desktop Only) */}
                      {!isLast && (
                        <div
                          className={`pointer-events-none absolute top-1/4 hidden h-16 w-20 -translate-y-1/2 lg:block ${isRight ? "left-1/2" : "right-1/2 mr-[-1px]"}`}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 80 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-brand-primary/30"
                          >
                            <path
                              d={
                                isRight
                                  ? "M 0,0 C 32,0 48,32 80,32"
                                  : "M 80,0 C 48,0 32,32 0,32"
                              }
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeDasharray="3 4"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      )}

                      {/* Content Row */}
                      <div className={`flex pl-12 sm:pl-16 lg:pl-0 ${desktopAlign}`}>
                        <article className={cardClass}>
                          {/* Dot on Card Edge */}
                          {!isLast && (
                            <div
                              className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-primary shadow-[0_0_0_3px_white,0_0_0_6px_rgba(83,170,161,0.13)] transition-all duration-500 group-hover:scale-125 group-hover:bg-brand-accent ${isRight ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
                            />
                          )}

                          <div className="space-y-3">
                            <span className="inline-flex rounded-full border border-brand-primary/15 bg-brand-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary-strong">
                              Tahap {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="font-mono text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl xl:text-[1.65rem]">
                              {item.date}
                            </p>
                            <h3 className="text-xl font-bold leading-tight text-foreground sm:text-2xl xl:text-[1.95rem]">
                              {item.title}
                            </h3>
                          </div>
                        </article>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="galeri" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex rounded-full border border-border bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary-strong">
                Galeri INACOMP 1.0
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Begini suasana INACOMP tahun lalu.
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Sekilas momen dari INACOMP 1.0 — dari sesi kompetisi sampai pengumuman juara.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src + index}
                  className={`relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/76 p-3 shadow-soft backdrop-blur-sm ${image.heightClass}`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-border bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary-strong">
                FAQ Umum
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Ada yang ingin kamu tanyakan sebelum daftar?
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Beberapa pertanyaan yang sering muncul — jawaban singkat, langsung ke poinnya.
              </p>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <section id="guidebook" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(83,170,161,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(45,73,93,0.24),_transparent_28%),linear-gradient(135deg,_#22464C,_#2D495D_60%,_#53AAA1_125%)] px-6 py-10 text-white shadow-soft sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Download Guidebook
                </span>
                <h2 className="font-mono text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Unduh guidebook dan mulai persiapanmu dari sekarang.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  Semua yang perlu kamu tahu — alur kompetisi, ketentuan peserta, dan informasi teknis — ada di guidebook masing-masing cabang.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark hover:bg-white/90 sm:text-base"
                  >
                    Download Guidebook CP
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 sm:text-base"
                  >
                    Download Guidebook Cisco Networking
                  </a>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 p-3 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/assets/booklet-cp.jpg"
                    alt="Guidebook Competitive Programming"
                    fill
                    className="rounded-[1.25rem] object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 p-3 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02] sm:translate-y-10">
                  <Image
                    src="/assets/booklet-cisco.jpg"
                    alt="Guidebook Cisco Networking"
                    fill
                    className="rounded-[1.25rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="closing-cta" className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/78 px-6 py-10 text-center shadow-soft backdrop-blur-sm sm:px-8 sm:py-12 lg:px-14">
            <span className="inline-flex rounded-full border border-border bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary-strong">
              Closing CTA
            </span>
            <h2 className="mt-5 font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Saatnya pilih cabang lomba, siapkan guidebook, dan jadi bagian dari INACOMP 2.0.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Masuk ke cabang yang paling sesuai dengan minatmu dan mulai persiapan
              dari sekarang untuk tampil maksimal di kompetisi nasional ini.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#cabang-lomba"
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-primary-strong sm:text-base"
              >
                Pilih Cabang Lomba
              </a>
              <a
                href="#guidebook"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark hover:border-brand-primary hover:text-brand-dark sm:text-base"
              >
                Lihat Guidebook
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
