import Link from "next/link";
import {
	ArrowRight,
	CalendarRange,
	FileText,
	LayoutTemplate,
	MonitorSmartphone,
	SearchCheck,
	Users,
} from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/marketing/reveal";
import { SectionIntro } from "@/components/marketing/primitives";
import { Container } from "@/components/ui/container";
import { ContactAdminSection } from "@/components/sections/shared/contact-admin-section";
import { uiuxFaqItems, uiuxTimeline } from "@/lib/site-content";
import {
	absoluteUrl,
	buildHybridEventLocation,
	buildPageMetadata,
	eventSchedule,
	siteConfig,
} from "@/lib/seo";

const pagePath = "/ui-ux-design";
const pageUrl = absoluteUrl(pagePath);
const pageTitle = "UI/UX Design | INACOMP 2.0";
const pageDescription =
	"UI/UX Design INACOMP 2.0 adalah cabang kompetisi nasional untuk pelajar yang menilai riset UX, desain UI, dan kualitas prototype atau mockup secara terstruktur.";

const participantsCreate = [
	{
		title: "UI design",
		description:
			"Peserta menyusun tampilan antarmuka yang rapi, jelas, dan mendukung alur penggunaan produk.",
		icon: LayoutTemplate,
	},
	{
		title: "UX research report",
		description:
			"Peserta menyusun proposal PDF yang menjelaskan masalah, target pengguna, solusi, dan alasan di balik keputusan desain.",
		icon: SearchCheck,
	},
	{
		title: "Prototype or mockup",
		description:
			"Peserta menyerahkan tautan prototype atau mockup sebagai bentuk visualisasi solusi yang diajukan.",
		icon: MonitorSmartphone,
	},
];

const teamRules = [
	"Maksimal 3 orang dalam satu tim.",
	"Seluruh anggota tim harus berasal dari sekolah yang sama.",
	"Setiap peserta hanya boleh bergabung dalam satu tim.",
	"Satu peserta tidak boleh terdaftar di lebih dari satu tim.",
];

const deliverables = [
	"Proposal PDF",
	"Prototype atau mockup link, misalnya melalui Figma",
	"Proposal dapat memuat latar belakang masalah, target pengguna, solusi, fitur utama, user flow, UX explanation, dan UI explanation",
];

const uiuxFlow = [
	"Team Registration",
	"Proposal & Prototype Submission",
	"Preliminary Selection by Judges",
	"Finalist Announcement",
	"Final Presentation",
	"Winner Announcement",
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
					name: "UI/UX Design",
					item: pageUrl,
				},
			],
		},
		{
			"@type": "Event",
			name: "UI/UX Design INACOMP 2.0",
			description: pageDescription,
			eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
			eventStatus: "https://schema.org/EventScheduled",
			startDate: eventSchedule.startDate,
			endDate: eventSchedule.endDate,
			url: pageUrl,
			image: [absoluteUrl("/assets/logo-inacomp.png")],
			location: buildHybridEventLocation(pageUrl),
			organizer: {
				"@type": "Organization",
				name: siteConfig.organizationName,
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
		"ui ux design inacomp",
		"kompetisi ui ux design pelajar",
		"proposal pdf prototype figma lomba",
		"INACOMP 2.0 ui ux",
	],
	image: {
		url: "/assets/logo-inacomp.png",
		alt: "UI/UX Design INACOMP 2.0",
	},
});

export default function UiUxDesignPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<div className="page-shell">
				<section className="section-space pb-12 pt-10 md:pt-14 lg:pt-16">
					<Container>
						<div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
							<Reveal className="space-y-8">
								<div className="space-y-5">
									<span className="eyebrow">
										<MonitorSmartphone className="h-3.5 w-3.5" />
										UI/UX Design
									</span>
									<div className="space-y-4">
										<h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1] sm:text-5xl lg:text-6xl">
											Cabang untuk peserta yang ingin menampilkan
											<span className="text-brand-accent">
												{" "}
												riset, rancangan UI, dan prototype
											</span>{" "}
											dalam satu alur kompetisi yang jelas.
										</h1>
										<p className="max-w-2xl text-lg leading-8 text-muted">
											UI/UX Design INACOMP 2.0 ditujukan untuk tim yang ingin
											menunjukkan kemampuan merumuskan masalah, menyusun solusi,
											dan mempresentasikan produk digital secara meyakinkan.
										</p>
									</div>
								</div>

								<div className="flex flex-col gap-3 sm:flex-row">
									<Link href="/#tracks" className="primary-button">
										Kembali ke Kategori Lomba
										<ArrowRight className="h-4 w-4" />
									</Link>
									<Link href="#uiux-flow" className="secondary-button">
										Lihat Alur Kompetisi
									</Link>
								</div>
							</Reveal>

							<Reveal delay={0.08}>
								<div className="hero-surface p-5 sm:p-6">
									<div className="grid gap-4">
										<div className="surface-card p-5">
											<p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">
												Product Design Atmosphere
											</p>
											<h2 className="mt-3 text-2xl font-bold">
												Halaman ini harus terasa visual, rapi, dan
												product-oriented.
											</h2>
											<p className="mt-3 text-sm leading-7 text-muted">
												Karena itu komposisinya dibuat lebih editorial dengan
												preview sederhana, bukan efek glassmorphism berat atau
												visual startup yang generik.
											</p>
										</div>

										<div className="surface-card editorial-grid p-5">
											<div className="grid gap-3 rounded-[16px] bg-white p-4 sm:grid-cols-[1.12fr_0.88fr]">
												<div className="rounded-[14px] border border-slate-200 bg-slate-50 p-4">
													<p className="text-sm font-semibold">
														Problem statement
													</p>
													<div className="mt-4 h-2 rounded-full bg-slate-200" />
													<div className="mt-2 h-2 w-5/6 rounded-full bg-slate-200" />
													<div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
												</div>
												<div className="rounded-[14px] border border-slate-200 bg-brand-soft/45 p-4">
													<p className="text-sm font-semibold">
														Prototype preview
													</p>
													<div className="mt-4 space-y-2">
														<div className="h-10 rounded-[12px] bg-white" />
														<div className="grid grid-cols-2 gap-2">
															<div className="h-16 rounded-[12px] bg-white" />
															<div className="h-16 rounded-[12px] bg-white" />
														</div>
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
								eyebrow="What Participants Create"
								title="Peserta UI/UX diminta menunjukkan proses berpikir sekaligus kualitas hasil desain."
								description="Cabang ini bukan hanya soal tampilan. Yang ingin terlihat adalah bagaimana tim membaca masalah, menyusun user flow, lalu menerjemahkannya menjadi solusi yang layak dipresentasikan."
							/>
						</Reveal>

						<div className="mt-10 grid gap-5 lg:grid-cols-3">
							{participantsCreate.map((item, index) => {
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

				<section id="uiux-flow" className="section-space soft-section">
					<Container>
						<div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
							<Reveal>
								<SectionIntro
									eyebrow="Competition Flow"
									title="Alur UI/UX Design perlu terbaca jelas karena registrasi berjalan bersama fase kerja awal."
									description="Peserta mendaftar terlebih dahulu, lalu melanjutkan ke tahap pengumpulan proposal dan prototype sebelum masuk ke penilaian juri."
								/>
							</Reveal>

							<div className="grid gap-4">
								{uiuxFlow.map((item, index) => (
									<Reveal key={item} delay={0.05 * index}>
										<article className="surface-card flex items-start gap-4 p-5">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-dark">
												{index + 1}
											</div>
											<div>
												<h3 className="text-lg font-bold">{item}</h3>
												<p className="mt-2 text-sm leading-7 text-muted">
													{index === 0 &&
														"Peserta membentuk tim dan melakukan pendaftaran sesuai ketentuan kompetisi."}
													{index === 1 &&
														"Setelah terdaftar, tim menyiapkan proposal PDF dan prototype atau mockup link."}
													{index === 2 &&
														"Juri menilai kualitas ide, struktur solusi, user flow, dan ketepatan presentasi awal."}
													{index === 3 &&
														"Pengumuman finalis mengikuti tanggal resmi yang sama dengan cabang Competitive Programming."}
													{index === 4 &&
														"Finalis mempresentasikan solusi secara langsung di hadapan juri."}
													{index === 5 &&
														"Pemenang diumumkan pada akhir rangkaian kompetisi INACOMP 2.0."}
												</p>
											</div>
										</article>
									</Reveal>
								))}
							</div>
						</div>
					</Container>
				</section>

				<section className="section-space">
					<Container>
						<div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
							<Reveal>
								<SectionIntro
									eyebrow="Team Rules"
									title="Aturan tim dibuat sederhana agar struktur kompetisi tetap tertib."
									description="Semua ketentuan ini perlu tampil jelas karena langsung berpengaruh pada kelayakan tim saat registrasi."
								/>
							</Reveal>

							<div className="grid gap-3">
								{teamRules.map((item, index) => (
									<Reveal key={item} delay={0.04 * index}>
										<div className="surface-card flex items-start gap-3 p-4">
											<Users className="mt-1 h-4 w-4 shrink-0 text-brand-primary" />
											<p className="text-sm leading-7 text-muted">{item}</p>
										</div>
									</Reveal>
								))}
							</div>
						</div>
					</Container>
				</section>

				<section className="section-space soft-section">
					<Container>
						<div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
							<Reveal>
								<SectionIntro
									eyebrow="Deliverables"
									title="Berkas yang harus dipersiapkan sejak awal kompetisi."
									description="Cabang UI/UX perlu menjelaskan deliverables dengan tegas agar peserta langsung memahami apa yang harus dibuat dan dikumpulkan."
								/>
							</Reveal>

							<div className="grid gap-3">
								{deliverables.map((item, index) => (
									<Reveal key={item} delay={0.04 * index}>
										<div className="surface-card flex items-start gap-3 p-4">
											<FileText className="mt-1 h-4 w-4 shrink-0 text-brand-primary" />
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
						<Reveal>
							<SectionIntro
								eyebrow="Timeline"
								title="Timeline UI/UX Design dibuat sesuai ritme kerja cabang ini."
								description="Cabang UI/UX punya pola yang berbeda karena registrasi berjalan bersama fase kerja awal, lalu berlanjut ke seleksi berkas, finalis, dan presentasi final."
								align="center"
							/>
						</Reveal>

						<div className="mx-auto mt-10 max-w-4xl space-y-4">
							{uiuxTimeline.map((item, index) => (
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

				<section className="section-space soft-section">
					<Container>
						<Reveal>
							<SectionIntro
								eyebrow="FAQ"
								title="Frequently Asked Question”"
								description="Bagian ini menegaskan alur kerja, aturan tim, dan dokumen yang perlu disiapkan."
								align="center"
							/>
						</Reveal>

						<Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
							<FaqAccordion items={uiuxFaqItems} />
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
											UI/UX Design CTA
										</span>
										<h2 className="max-w-3xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
											Kalau timmu kuat di riset, struktur solusi, dan presentasi
											visual, cabang ini layak dipilih.
										</h2>
										<p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
											Kembali ke halaman utama untuk melihat keseluruhan
											kompetisi, lalu pastikan timmu siap menyiapkan proposal
											dan prototype.
										</p>
									</div>

									<div className="flex flex-col gap-3">
										<button
											type="button"
											disabled
											className="inline-flex min-h-13 items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-100 px-6 text-sm font-semibold text-slate-500 shadow-sm"
										>
											Form UI/UX Design Segera Hadir
										</button>
										<Link href="/#tracks" className="primary-button">
											Kembali ke Kategori Lomba
										</Link>
										<Link
											href="/competitive-programming"
											className="secondary-button"
										>
											Lihat Competitive Programming
										</Link>
										<p className="max-w-xs text-sm leading-7 text-muted">
											Tombol form sudah disiapkan. Link Google Form cabang
											UI/UX Design akan ditambahkan setelah form resmi
											tersedia.
										</p>
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
