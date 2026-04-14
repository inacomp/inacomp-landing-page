import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function CPHero() {
	return (
		<section id="top" className="section-shell overflow-hidden pt-10 sm:pt-14">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
					<div className="space-y-8">
						<div className="space-y-5">
							<h1 className="text-balance max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
								Competitive Programming INACOMP 2.0
							</h1>
							<p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
								Lomba competitive programming INACOMP 2.0 untuk siswa/i
								SMA/SMK/sederajat yang ingin menguji logika, algoritma, dan
								problem solving dalam kompetisi coding siswa tingkat nasional.
							</p>
						</div>

						<div className="flex flex-col gap-3 sm:flex-row">
							<Link
								href="#daftar"
								className="inline-flex h-12 items-center justify-center rounded-full bg-brand-primary px-6 text-sm font-semibold text-white shadow-soft hover:bg-brand-primary-strong transition-all duration-300 transform hover:scale-105"
							>
								Daftar Sekarang
							</Link>
							<Link
								href="#guidebook"
								className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white/78 px-6 text-sm font-semibold text-foreground hover:border-brand-primary hover:text-brand-dark transition-all duration-300"
							>
								Download Guidebook
							</Link>
						</div>
					</div>

					<div className="surface-card bg-radial-brand relative overflow-hidden p-5 sm:p-6 group">
						<div className="bg-grid-soft absolute inset-0 opacity-45" />
						<div className="pointer-events-none absolute -left-8 top-12 h-32 w-32 rounded-full bg-brand-primary/16 blur-3xl animate-float-slow" />
						<div className="pointer-events-none absolute bottom-8 right-0 h-40 w-40 rounded-full bg-brand-accent/12 blur-3xl animate-glow-drift" />
						<div className="relative space-y-4">
							<div className="surface-panel p-4 overflow-hidden">
								<div className="mb-4 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<span className="h-3 w-3 rounded-full bg-brand-primary/70" />
										<span className="h-3 w-3 rounded-full bg-brand-primary-strong/80" />
										<span className="h-3 w-3 rounded-full bg-brand-accent/75" />
									</div>
									<span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
										contest editor
									</span>
								</div>
								<div className="relative h-56 w-full rounded-2xl overflow-hidden border border-white/60">
									<Image
										src="/assets/dummy/cp-editor.png"
										alt="Code Editor Mockup"
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>

							<div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
								<div className="surface-panel p-4">
									<div className="mb-4 flex items-center justify-between">
										<span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
											live leaderboard
										</span>
										<div className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
											<div className="text-[10px]">
												<Badge tone="neutral">Live</Badge>
											</div>
										</div>
									</div>
									<div className="space-y-2">
										{[
											{ name: "Tim Algobase", score: "8/10", time: "142m" },
											{ name: "ByteMasters", score: "7/10", time: "115m" },
											{ name: "LogicWizards", score: "6/10", time: "98m" },
										].map((item, idx) => (
											<div
												key={idx}
												className="flex items-center justify-between rounded-xl bg-white/60 p-2.5 px-4 border border-white/40"
											>
												<div className="flex items-center gap-3">
													<span className="font-mono text-xs text-muted w-4">
														{idx + 1}
													</span>
													<span className="text-sm font-semibold text-foreground">
														{item.name}
													</span>
												</div>
												<div className="text-right">
													<span className="text-xs font-bold text-brand-primary">
														{item.score}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className="surface-panel p-4">
									<span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
										test results
									</span>
									<div className="mt-4 space-y-2">
										{[
											{
												status: "Accepted",
												color: "text-emerald-600",
												bg: "bg-emerald-50",
											},
											{
												status: "Wrong Ans",
												color: "text-rose-600",
												bg: "bg-rose-50",
											},
											{
												status: "Time Limit",
												color: "text-amber-600",
												bg: "bg-amber-50",
											},
											{
												status: "Accepted",
												color: "text-emerald-600",
												bg: "bg-emerald-50",
											},
										].map((item, idx) => (
											<div
												key={idx}
												className={`flex items-center gap-2 rounded-lg ${item.bg} p-2 px-3 border border-white/40`}
											>
												<div
													className={`h-1.5 w-1.5 rounded-full ${item.status === "Accepted" ? "bg-emerald-500" : "bg-current"}`}
												/>
												<span
													className={`text-[10px] font-bold uppercase ${item.color}`}
												>
													{item.status}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
