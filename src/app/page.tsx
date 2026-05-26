import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Award,
	CalendarRange,
	CheckCircle2,
	Code2,
	MonitorSmartphone,
	Network,
	NotebookTabs,
	Sparkles,
	Trophy,
	Users,
} from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/marketing/reveal";
import { GalleryMosaic, SectionIntro } from "@/components/marketing/primitives";
import { Container } from "@/components/ui/container";
import {
	homeFaqItems,
	homeGallery,
	officialTimeline,
} from "@/lib/site-content";

export const metadata: Metadata = {
	title: "INACOMP 2.0 | Informatics National Competition",
	description:
		"INACOMP 2.0 adalah kompetisi IT nasional untuk siswa SMA/SMK sederajat dengan cabang Competitive Programming dan UI/UX Design.",
	keywords: [
		"INACOMP 2.0",
		"Informatics National Competition",
		"kompetisi IT nasional siswa",
		"competitive programming sma smk",
		"ui ux design competition siswa",
		"lomba informatika nasional",
	],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "INACOMP 2.0 | Informatics National Competition",
		description:
			"Kompetisi IT nasional untuk pelajar dengan cabang Competitive Programming dan UI/UX Design.",
		url: "/",
		type: "website",
		locale: "id_ID",
		images: [
			{
				url: "/assets/logo-inacomp.png",
				width: 1200,
				height: 1200,
				alt: "Logo INACOMP 2.0",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "INACOMP 2.0 | Informatics National Competition",
		description:
			"Kompetisi IT nasional untuk pelajar dengan cabang Competitive Programming dan UI/UX Design.",
		images: ["/assets/logo-inacomp.png"],
	},
};

const overviewCards = [
	{
		title: "Competitive Programming",
		description:
			"Cabang untuk peserta yang ingin menguji logika, strategi, dan ketelitian menyelesaikan soal algoritma.",
		href: "/competitive-programming",
		icon: Code2,
	},
	{
		title: "UI/UX Design",
		description:
			"Cabang untuk peserta yang ingin menyusun solusi digital melalui riset, desain antarmuka, dan prototype yang meyakinkan.",
		href: "/ui-ux-design",
		icon: MonitorSmartphone,
	},
];

const whyJoinItems = [
	{
		title: "Pengalaman kompetisi nasional",
		description:
			"INACOMP memberi panggung yang terasa serius, terstruktur, dan layak untuk peserta pelajar yang ingin naik level.",
		icon: Trophy,
	},
	{
		title: "Portofolio yang lebih kuat",
		description:
			"Hasil yang kamu bangun dan performa yang kamu tampilkan akan menjadi nilai tambah untuk perjalanan akademik maupun pengembangan diri.",
		icon: NotebookTabs,
	},
	{
		title: "Jaringan sesama talenta teknologi",
		description:
			"Peserta bertemu dengan pelajar dari berbagai daerah yang sama-sama serius di bidang informatika dan desain digital.",
		icon: Users,
	},
	{
		title: "Skill yang relevan",
		description:
			"Dua cabang yang dipilih dirancang untuk membangun logika komputasional dan kemampuan merancang produk digital.",
		icon: Award,
	},
];

const trackDetails = [
	{
		title: "Competitive Programming",
		href: "/competitive-programming",
		description:
			"Berfokus pada pemecahan masalah, algoritma, dan pengambilan keputusan yang presisi dalam waktu terbatas.",
		bullets: [
			"Atmosfer teknis dan kompetitif",
			"Format yang menuntut akurasi solusi",
			"Cocok untuk peserta yang kuat di logika",
		],
	},
	{
		title: "UI/UX Design",
		href: "/ui-ux-design",
		description:
			"Berfokus pada design thinking, user flow, interface quality, dan kemampuan menerjemahkan ide menjadi prototype yang jelas.",
		bullets: [
			"Menggabungkan riset dan eksekusi visual",
			"Ada proposal PDF dan prototype/mockup",
			"Cocok untuk tim yang kuat di problem framing",
		],
	},
];

const homeStructuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": "https://inacomp.vercel.app/#website",
			url: "https://inacomp.vercel.app/",
			name: "INACOMP 2.0",
			alternateName: "Informatics National Competition",
			inLanguage: "id-ID",
		},
		{
			"@type": "Organization",
			"@id": "https://inacomp.vercel.app/#organization",
			name: "BEM PTIK Universitas Negeri Jakarta",
			url: "https://inacomp.vercel.app/",
			logo: {
				"@type": "ImageObject",
				url: "https://inacomp.vercel.app/assets/logo-inacomp.png",
			},
		},
		{
			"@type": "Event",
			"@id": "https://inacomp.vercel.app/#event",
			name: "INACOMP 2.0",
			description:
				"Kompetisi IT nasional untuk siswa SMA/SMK sederajat dengan cabang Competitive Programming dan UI/UX Design.",
			url: "https://inacomp.vercel.app/",
			image: ["https://inacomp.vercel.app/assets/logo-inacomp.png"],
			startDate: "2026-05-18",
			endDate: "2026-07-04",
			eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
			eventStatus: "https://schema.org/EventScheduled",
			organizer: {
				"@id": "https://inacomp.vercel.app/#organization",
			},
			audience: {
				"@type": "EducationalAudience",
				audienceType: "Siswa/i SMA/SMK/sederajat",
			},
			about: ["Competitive Programming", "UI/UX Design"],
		},
	],
};

export default function Home() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
			/>
			<div className="page-shell">
				<section className="section-space pb-12 pt-10 md:pt-14 lg:pt-16">
					<Container>
						<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
							<Reveal className="space-y-8">
								<div className="space-y-5">
									<span className="eyebrow">
										<Sparkles className="h-3.5 w-3.5" />
										National IT Competition 2026
									</span>
									<div className="space-y-4">
										<h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1] sm:text-5xl lg:text-6xl">
											INACOMP 2.0 - <br /> Empowering Digital Talents
										</h1>
										<p className="max-w-2xl text-lg leading-8 text-muted">
											INACOMP 2.0 hadir sebagai wadah bagi pelajar SMA/SMK
											sederajat untuk berkompetisi, berinovasi, dan menunjukkan
											potensi terbaik dalam bidang Competitive Programming dan
											UI/UX Design.
										</p>
									</div>
								</div>

								<div className="flex flex-wrap gap-3 text-sm text-muted">
									<span className="rounded-full border border-slate-200 bg-white px-4 py-2">
										Nasional
									</span>
									<span className="rounded-full border border-slate-200 bg-white px-4 py-2">
										Dua Kategori Lomba
									</span>
									<span className="rounded-full border border-slate-200 bg-white px-4 py-2">
										18 Mei - 4 Juli 2026
									</span>
								</div>

								<div className="flex flex-col gap-3 sm:flex-row">
									<Link href="#tracks" className="primary-button">
										Lihat Kategori Lomba
										<ArrowRight className="h-4 w-4" />
									</Link>
									<Link href="#timeline" className="secondary-button">
										Lihat Timeline
									</Link>
								</div>
							</Reveal>

							<Reveal delay={0.1}>
								<div className="hero-surface p-5 sm:p-6">
									<div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
										<div className="surface-card p-5">
											<div className="space-y-4">
												<div className="relative h-36 w-full overflow-hidden rounded-[18px] bg-[#F2F6F6]">
													<Image
														src="/assets/logo-inacomp.png"
														alt="Logo INACOMP 2.0"
														fill
														className="object-contain p-4"
													/>
												</div>
												<div>
													<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">
														Organizer
													</p>
													<p className="mt-2 text-xl font-bold">
														BEM PTIK Universitas Negeri Jakarta
													</p>
												</div>
											</div>
										</div>

										<div className="surface-card overflow-hidden p-5">
											<div className="flex items-center justify-between border-b border-slate-200 pb-4">
												<div>
													<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">
														Kategori Lomba
													</p>
													<p className="mt-2 text-xl font-bold">INACOMP 2.0</p>
												</div>
												<Network className="h-9 w-9 text-brand-primary" />
											</div>

											<div className="mt-5 space-y-3">
												{overviewCards.map((item) => {
													const Icon = item.icon;

													return (
														<Link
															key={item.title}
															href={item.href}
															className="block rounded-[18px] border border-slate-200 bg-slate-50 p-4 hover:border-brand-primary/40 hover:bg-white"
														>
															<div className="flex items-start gap-3">
																<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-brand-soft text-brand-dark">
																	<Icon className="h-5 w-5" />
																</div>
																<div>
																	<p className="text-lg font-bold">
																		{item.title}
																	</p>
																</div>
															</div>
														</Link>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</Reveal>
						</div>
					</Container>
				</section>

				<section id="tracks-overview" className="section-space pt-6">
					<Container>
						<Reveal>
							<SectionIntro
								eyebrow="Competition Overview"
								title="Dua cabang dengan karakter yang berbeda, tetapi sama-sama menuntut kualitas."
								description="Home page harus langsung menunjukkan bahwa INACOMP bukan satu kompetisi generik. Competitive Programming dan UI/UX Design punya fokus yang berbeda, dengan atmosfer dan tantangan masing-masing."
							/>
						</Reveal>

						<div className="mt-10 grid gap-5 lg:grid-cols-2">
							{overviewCards.map((item, index) => {
								const Icon = item.icon;

								return (
									<Reveal key={item.title} delay={0.06 * index}>
										<article className="surface-panel h-full p-6">
											<div className="flex items-start justify-between gap-4">
												<div className="space-y-3">
													<div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-soft text-brand-dark">
														<Icon className="h-5 w-5" />
													</div>
													<h2 className="text-2xl font-bold">{item.title}</h2>
												</div>
												<Link
													href={item.href}
													className="text-sm font-semibold text-brand-dark hover:text-brand-primary"
												>
													Detail
												</Link>
											</div>
											<p className="mt-4 text-base leading-8 text-muted">
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
						<div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
							<Reveal>
								<SectionIntro
									eyebrow="Why Join"
									title="Mengikuti INACOMP berarti masuk ke pengalaman kompetisi yang lebih kredibel."
									description="Bukan hanya soal menang. Yang dibangun di sini adalah rasa percaya diri, kualitas portofolio, dan pengalaman tampil di ajang yang memang terasa nasional."
								/>
							</Reveal>

							<div className="grid gap-4 sm:grid-cols-2">
								{whyJoinItems.map((item, index) => {
									const Icon = item.icon;

									return (
										<Reveal key={item.title} delay={0.05 * index}>
											<article className="surface-card h-full p-5">
												<div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-brand-soft text-brand-dark">
													<Icon className="h-5 w-5" />
												</div>
												<h3 className="mt-4 text-xl font-bold">{item.title}</h3>
												<p className="mt-3 text-sm leading-7 text-muted">
													{item.description}
												</p>
											</article>
										</Reveal>
									);
								})}
							</div>
						</div>
					</Container>
				</section>

				<section id="tracks" className="section-space">
					<Container>
						<Reveal>
							<SectionIntro
								eyebrow="Competition Tracks"
								title="Setiap cabang punya tujuan yang jelas, ritme yang berbeda, dan alasan yang kuat untuk diikuti."
								description="Section ini memberi gambaran yang lebih detail agar calon peserta bisa langsung mengenali jalur yang paling sesuai dengan kekuatan mereka."
							/>
						</Reveal>

						<div className="mt-10 grid gap-6 lg:grid-cols-2">
							{trackDetails.map((item, index) => (
								<Reveal key={item.title} delay={0.06 * index}>
									<Link
										href={item.href}
										className="surface-panel group block h-full p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-brand-primary/35"
									>
										<div className="flex items-center justify-between gap-4">
											<h3 className="text-2xl font-bold">{item.title}</h3>
											<ArrowRight className="h-5 w-5 text-brand-dark transition-transform duration-200 group-hover:translate-x-1" />
										</div>
										<p className="mt-4 text-base leading-8 text-muted">
											{item.description}
										</p>
										<div className="mt-5 space-y-3">
											{item.bullets.map((bullet) => (
												<div
													key={bullet}
													className="flex items-start gap-3 rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-muted"
												>
													<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
													<span>{bullet}</span>
												</div>
											))}
										</div>
										<div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark">
											Lihat Detail
											<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
										</div>
									</Link>
								</Reveal>
							))}
						</div>
					</Container>
				</section>

				<section id="timeline" className="section-space soft-section">
					<Container>
						<Reveal>
							<SectionIntro
								eyebrow="Timeline"
								title="Timeline umum INACOMP 2.0 untuk seluruh Kategori Lomba."
								description="Alur ini dipakai bersama oleh Competitive Programming dan UI/UX Design, sehingga mudah dibaca dan langsung menunjukkan progression event dari pendaftaran sampai pengumuman juara."
								align="center"
							/>
						</Reveal>

						<div className="mx-auto mt-10 max-w-4xl">
							<div className="space-y-4">
								{officialTimeline.map((item, index) => (
									<Reveal
										key={`${item.date}-${item.title}`}
										delay={0.04 * index}
									>
										<article className="surface-panel grid gap-4 p-5 md:grid-cols-[220px_1fr] md:items-start">
											<div>
												<p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">
													{item.date}
												</p>
											</div>
											<div className="border-t border-slate-200 pt-4 md:border-t-0 md:border-l md:pl-5 md:pt-0">
												<h3 className="text-xl font-bold">{item.title}</h3>
												<p className="mt-2 text-sm leading-7 text-muted">
													{item.note}
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
						<Reveal>
							<SectionIntro
								eyebrow="Gallery"
								title="Dokumentasi INACOMP 1.0."
								description=""
								align="center"
							/>
						</Reveal>

						<Reveal delay={0.08} className="mt-10">
							<GalleryMosaic items={homeGallery} />
						</Reveal>
					</Container>
				</section>

				<section id="contact" className="section-space">
					<Container>
						<Reveal>
							<div className="hero-panel relative overflow-hidden p-8 sm:p-12 lg:p-16">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.1),transparent_40%)]" />
								<div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
									<div className="max-w-2xl space-y-6">
										<span className="eyebrow">Contact Admin</span>
										<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
											Ada pertanyaan teknis?
										</h2>
										<p className="text-lg leading-relaxed text-muted">
											Tim admin kami siap membantu menjelaskan detail teknis
											kompetisi, regulasi, atau kendala pendaftaran melalui
											WhatsApp.
										</p>
									</div>

									<Link
										href="https://wa.me/6289531030000"
										target="_blank"
										className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 pr-8 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-brand-cyan/30"
									>
										<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/20 text-success shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-transform group-hover:scale-110">
											<svg
												viewBox="0 0 24 24"
												className="h-8 w-8 fill-current"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
											</svg>
										</div>
										<div>
											<p className="text-xs font-bold uppercase tracking-widest text-success">
												WhatsApp Fast Response
											</p>
											<p className="mt-1 text-2xl font-bold text-white">
												0895-3103-0xxx
											</p>
										</div>
										<ArrowRight className="ml-4 h-6 w-6 text-muted transition-transform group-hover:translate-x-1 group-hover:text-white" />
									</Link>
								</div>
							</div>
						</Reveal>
					</Container>
				</section>

				<section id="faq" className="section-space soft-section">
					<Container>
						<Reveal>
							<SectionIntro
								eyebrow="FAQ"
								title="Frequently Asked Question”"
								description="Singkat, jelas, dan langsung ke hal yang paling dibutuhkan calon peserta."
								align="center"
							/>
						</Reveal>

						<Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
							<FaqAccordion items={homeFaqItems} />
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
											Final CTA
										</span>
										<h2 className="max-w-3xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
											Siap memilih cabang yang paling sesuai dengan cara timmu
											berpikir dan berkarya?
										</h2>
										<p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
											Mulai dari halaman Kategori Lomba, pelajari formatnya,
											lalu siapkan tim terbaikmu untuk masuk ke INACOMP 2.0.
										</p>
									</div>

									<div className="flex flex-col gap-3">
										<Link href="#tracks" className="primary-button">
											Jelajahi Kategori Lomba
										</Link>
										<Link href="#timeline" className="secondary-button">
											Cek Jadwal Resmi
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
