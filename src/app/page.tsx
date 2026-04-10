import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";

const stats = [
  { label: "Skala", value: "Nasional" },
  { label: "Cabang", value: "2 Kompetisi" },
  { label: "Peserta", value: "SMA/SMK" },
];

const aboutHighlights = [
  {
    title: "Edisi Kedua",
    description:
      "INACOMP 2.0 hadir sebagai lanjutan kompetisi informatika yang semakin matang dan relevan.",
  },
  {
    title: "Diselenggarakan BEM PTIK UNJ",
    description:
      "Dikurasi oleh Badan Eksekutif Mahasiswa PTIK Universitas Negeri Jakarta.",
  },
  {
    title: "Untuk Siswa/i SMA/SMK",
    description:
      "Dirancang untuk peserta sederajat yang ingin bertanding, belajar, dan berkembang.",
  },
  {
    title: "Fokus Teknologi",
    description:
      "Mengangkat dua ranah utama: pemrograman komputer dan jaringan komputer.",
  },
];

const tracks = [
  {
    title: "Competitive Programming",
    href: "/competitive-programming",
    accent: "from-brand-indigo/15 via-white to-brand-amber/10",
    badgeClass: "bg-brand-indigo text-white",
    buttonClass: "bg-brand-indigo text-white hover:bg-brand-navy",
    description:
      "Untuk siswa yang ingin menguji logika, algoritma, dan ketelitian problem solving dalam atmosfer kompetisi yang cepat dan menantang.",
    points: ["Algoritma & logika", "Format kompetitif", "Cocok untuk problem solver"],
  },
  {
    title: "Cisco Networking",
    href: "/cisco-networking",
    accent: "from-brand-cyan/20 via-white to-brand-indigo/10",
    badgeClass: "bg-brand-navy text-white",
    buttonClass: "bg-brand-navy text-white hover:bg-brand-indigo",
    description:
      "Untuk peserta yang tertarik pada jaringan komputer, troubleshooting, dan pemahaman infrastruktur digital yang aplikatif.",
    points: ["Networking fundamentals", "Cisco-oriented", "Hands-on problem mindset"],
  },
];

const timelineItems = [
  "Pendaftaran",
  "Penutupan Pendaftaran",
  "Technical Meeting",
  "Babak Penyisihan",
  "Babak Final",
  "Pengumuman Pemenang",
];

const faqItems = [
  {
    question: "Siapa yang bisa mengikuti INACOMP?",
    answer:
      "INACOMP 2.0 ditujukan untuk siswa/i SMA/SMK/sederajat dari seluruh Indonesia yang memiliki minat pada bidang pemrograman komputer maupun jaringan komputer.",
  },
  {
    question: "Apakah lomba dilaksanakan secara tim?",
    answer:
      "Skema partisipasi akan dijelaskan pada detail masing-masing cabang lomba. Silakan cek halaman cabang lomba dan guidebook resmi untuk format terbaru.",
  },
  {
    question: "Bagaimana cara mendapatkan guidebook?",
    answer:
      "Guidebook dapat diakses melalui tombol Download Guidebook pada kartu cabang lomba maupun pada section download khusus di bagian bawah halaman ini.",
  },
  {
    question: "Apa saja cabang lomba yang tersedia?",
    answer:
      "INACOMP 2.0 memiliki dua cabang lomba utama, yaitu Competitive Programming dan Cisco Networking.",
  },
  {
    question: "Kapan informasi teknis diumumkan?",
    answer:
      "Informasi teknis seperti timeline detail, technical meeting, dan ketentuan lomba akan diumumkan melalui kanal resmi INACOMP 2.0 setelah registrasi dibuka.",
  },
];

const galleryHeights = [
  "h-52 sm:h-64",
  "h-72 sm:h-80",
  "h-60 sm:h-72",
  "h-80 sm:h-96",
  "h-56 sm:h-64",
  "h-72 sm:h-80",
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(67,199,255,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(54,92,255,0.2),_transparent_24%)]" />

      <div>
        <section className="px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-indigo shadow-soft backdrop-blur-sm">
                Informatics National Competition
              </div>
              <div className="space-y-6">
                <h1 className="max-w-3xl font-mono text-4xl font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-7xl">
                  Panggung kompetisi teknologi untuk generasi problem solver berikutnya.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Informatics National Competition (INACOMP) 2.0 merupakan kompetisi
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
                  className="inline-flex items-center justify-center rounded-full bg-brand-indigo px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-brand-navy sm:text-base"
                >
                  Daftar Sekarang
                </a>
                <a
                  href="#cabang-lomba"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-6 py-3.5 text-sm font-semibold text-brand-navy hover:border-brand-sky hover:text-brand-indigo sm:text-base"
                >
                  Lihat Cabang Lomba
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.75rem] border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur-sm"
                  >
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-lg font-semibold text-brand-navy">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-radial-brand shadow-soft relative overflow-hidden rounded-[2rem] border border-white/70 p-5 sm:p-7 lg:p-8">
                <div className="bg-grid-soft absolute inset-0 opacity-60" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between rounded-[1.5rem] border border-white/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                        Opening Wave
                      </p>
                      <p className="mt-1 text-lg font-semibold text-brand-navy">
                        INACOMP 2.0 Launching Soon
                      </p>
                    </div>
                    <span className="rounded-full bg-brand-indigo px-3 py-1 text-xs font-semibold text-white">
                      Bright Mode
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-4 rounded-[1.75rem] border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                      <div className="h-56 rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(54,92,255,0.14),_rgba(67,199,255,0.16))] sm:h-72" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-20 rounded-[1.25rem] bg-slate-100" />
                        <div className="h-20 rounded-[1.25rem] bg-blue-50" />
                        <div className="h-20 rounded-[1.25rem] bg-cyan-50" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="rounded-[1.75rem] border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                          Branch Focus
                        </p>
                        <div className="mt-4 space-y-3">
                          <div className="rounded-[1.25rem] bg-blue-50 px-3 py-3 text-sm font-medium text-brand-navy">
                            Competitive Programming
                          </div>
                          <div className="rounded-[1.25rem] bg-cyan-50 px-3 py-3 text-sm font-medium text-brand-navy">
                            Cisco Networking
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[1.75rem] border border-white/80 bg-brand-navy p-5 text-white shadow-lg shadow-slate-900/10">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                          Event Feel
                        </p>
                        <p className="mt-3 text-xl font-semibold leading-snug">
                          Modern, bold, premium, dan siap menarik perhatian dari first glance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 left-4 rounded-[1.5rem] border border-white/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-sm sm:left-auto sm:right-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Untuk Siswa/i
                </p>
                <p className="mt-1 text-sm font-semibold text-brand-navy">
                  SMA / SMK / Sederajat
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tentang" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-indigo">
                Tentang INACOMP
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Kompetisi nasional yang mempertemukan semangat belajar, bertanding, dan berkembang.
              </h2>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                INACOMP 2.0 adalah edisi kedua dari Informatics National Competition.
                Event ini dirancang sebagai ruang bagi siswa/i SMA/SMK/sederajat untuk
                menunjukkan kemampuan di bidang pemrograman komputer dan jaringan
                komputer dalam atmosfer yang kompetitif, rapi, dan profesional.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-sm"
                >
                  <div className="mb-4 h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,_rgba(54,92,255,0.16),_rgba(67,199,255,0.22))]" />
                  <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
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
              <span className="inline-flex rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-indigo">
                Cabang Lomba
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Pilih jalur kompetisi yang paling sesuai dengan kekuatanmu.
              </h2>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Dua cabang lomba utama disiapkan untuk peserta dengan minat yang berbeda,
                namun tetap berada dalam satu ekosistem kompetisi teknologi yang solid.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {tracks.map((track) => (
                <article
                  key={track.title}
                  className={`relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br ${track.accent} p-6 shadow-soft sm:p-8`}
                >
                  <div className="absolute right-6 top-6">
                    <a
                      href="#guidebook"
                      className={`inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${track.badgeClass}`}
                    >
                      Download Guidebook
                    </a>
                  </div>
                  <div className="space-y-6 pr-24">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                        INACOMP Track
                      </p>
                      <h3 className="mt-3 font-mono text-2xl font-bold text-brand-navy sm:text-3xl">
                        {track.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {track.description}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {track.points.map((point, index) => (
                        <div
                          key={point}
                          className="rounded-[1.25rem] border border-white/80 bg-white/85 p-3 text-sm font-medium text-slate-700"
                        >
                          <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-brand-navy">
                            0{index + 1}
                          </span>
                          {point}
                        </div>
                      ))}
                    </div>
                    <div className="h-48 rounded-[1.75rem] border border-white/80 bg-[linear-gradient(135deg,_rgba(255,255,255,0.45),_rgba(214,226,255,0.7))] sm:h-56" />
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href={track.href}
                        className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold sm:text-base ${track.buttonClass}`}
                      >
                        Lihat Detail
                      </Link>
                      <a
                        href="#guidebook"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-white/85 px-5 py-3 text-sm font-semibold text-brand-navy hover:border-brand-sky hover:text-brand-indigo sm:text-base"
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
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/80 bg-white/75 p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex rounded-full border border-border bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-indigo">
                Timeline
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Alur kompetisi disusun sebagai perjalanan yang jelas dari registrasi hingga podium.
              </h2>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Timeline dirancang ringkas dan mudah dipahami agar peserta dapat melihat
                progres event dari awal hingga akhir secara cepat.
              </p>
            </div>

            <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3">
              {timelineItems.map((item, index) => (
                <article
                  key={item}
                  className={`relative rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,_white,_rgba(239,244,255,0.9))] p-6 ${index % 2 === 1 ? "translate-y-10" : ""}`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      Step 0{index + 1}
                    </span>
                    <span className="h-3 w-3 rounded-full bg-brand-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy">{item}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Placeholder informasi tahap {index + 1} untuk memberikan gambaran ritme event secara umum.
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:hidden">
              {timelineItems.map((item, index) => (
                <article
                  key={item}
                  className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-indigo text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy">{item}</h3>
                      <p className="mt-1 text-sm text-slate-500">Tahap perjalanan INACOMP 2.0</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeri" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-indigo">
                Galeri INACOMP 1.0
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Sekilas dokumentasi dari penyelenggaraan INACOMP sebelumnya.
              </h2>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Area ini menampilkan placeholder dokumentasi sebagai gambaran atmosfer
                kompetisi sebelumnya tanpa menggunakan aset final.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryHeights.map((heightClass, index) => (
                <div
                  key={heightClass + index}
                  className={`overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/85 p-3 shadow-soft ${heightClass}`}
                >
                  <div className="h-full rounded-[1.25rem] bg-[linear-gradient(180deg,_rgba(54,92,255,0.08),_rgba(67,199,255,0.16))]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-indigo">
                FAQ Umum
              </span>
              <h2 className="font-mono text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Pertanyaan yang paling sering ditanyakan calon peserta.
              </h2>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Informasi dasar dirangkum agar peserta bisa memahami alur partisipasi
                sebelum berpindah ke detail masing-masing cabang lomba.
              </p>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <section id="guidebook" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-brand-navy px-6 py-10 text-white shadow-soft sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Download Guidebook
                </span>
                <h2 className="font-mono text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Unduh guidebook dan siapkan strategi terbaikmu dari sekarang.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  Akses panduan resmi masing-masing cabang untuk memahami alur,
                  ketentuan, dan persiapan sebelum pendaftaran dibuka sepenuhnya.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy hover:bg-blue-50 sm:text-base"
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
                <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-4">
                  <div className="h-52 rounded-[1.5rem] bg-white/10" />
                </div>
                <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-4 sm:translate-y-10">
                  <div className="h-52 rounded-[1.5rem] bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="closing-cta" className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/85 px-6 py-10 text-center shadow-soft backdrop-blur-sm sm:px-8 sm:py-12 lg:px-14">
            <span className="inline-flex rounded-full border border-border bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-indigo">
              Closing CTA
            </span>
            <h2 className="mt-5 font-mono text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Saatnya pilih cabang lomba, siapkan guidebook, dan jadi bagian dari INACOMP 2.0.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Masuk ke cabang yang paling sesuai dengan minatmu dan mulai persiapan
              dari sekarang untuk tampil maksimal di kompetisi nasional ini.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#cabang-lomba"
                className="inline-flex items-center justify-center rounded-full bg-brand-indigo px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-navy sm:text-base"
              >
                Pilih Cabang Lomba
              </a>
              <a
                href="#guidebook"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy hover:border-brand-sky hover:text-brand-indigo sm:text-base"
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
