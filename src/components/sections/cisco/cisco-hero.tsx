import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function CiscoHero() {
  return (
    <section id="top" className="section-shell overflow-hidden pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-8">

            <div className="space-y-5">
              <h1 className="text-balance max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Cisco Networking Competition INACOMP 2.0
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Lomba Cisco Networking untuk siswa/i SMA/SMK/sederajat yang ingin mengasah kemampuan jaringan komputer melalui konfigurasi, troubleshooting, dan final presentation di tingkat nasional.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#daftar"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-dark px-6 text-sm font-semibold text-white shadow-soft hover:bg-brand-accent transition-all duration-300 transform hover:scale-105"
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

          <div className="surface-card bg-tech-panel relative overflow-hidden p-5 sm:p-6 group">
            <div className="bg-grid-soft absolute inset-0 opacity-30" />
            <div className="pointer-events-none absolute inset-0 bg-network-mesh opacity-30" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(83,170,161,0.12),_transparent_18%),radial-gradient(circle_at_78%_26%,_rgba(45,73,93,0.16),_transparent_16%),radial-gradient(circle_at_72%_78%,_rgba(34,70,76,0.12),_transparent_18%)]" />

            <div className="relative space-y-4">
              <div className="surface-panel p-4 overflow-hidden">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                    topology map
                  </span>
                  <span className="rounded-full bg-brand-primary/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-dark animate-pulse">
                    active links
                  </span>
                </div>
                <div className="relative h-56 rounded-[26px] border border-white/70 bg-white/72 overflow-hidden sm:h-64">
                  <Image
                    src="/assets/dummy/cisco-topology.png"
                    alt="Network Topology"
                    fill
                    className="object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 p-4">
                    <div className="animate-node-pulse absolute left-[14%] top-[18%] h-3 w-3 rounded-full bg-brand-primary shadow-[0_0_0_8px_rgba(83,170,161,0.12)]" />
                    <div className="animate-node-pulse absolute left-[46%] top-[26%] h-4 w-4 rounded-full bg-brand-accent shadow-[0_0_0_10px_rgba(45,73,93,0.10)]" />
                    <div className="animate-node-pulse absolute right-[16%] top-[16%] h-3.5 w-3.5 rounded-full bg-brand-primary-strong shadow-[0_0_0_9px_rgba(81,158,151,0.12)]" />
                    <div className="animate-node-pulse absolute bottom-[20%] left-[24%] h-3.5 w-3.5 rounded-full bg-brand-primary shadow-[0_0_0_9px_rgba(83,170,161,0.12)]" />
                    <div className="animate-node-pulse absolute bottom-[18%] right-[22%] h-4 w-4 rounded-full bg-brand-dark shadow-[0_0_0_10px_rgba(34,70,76,0.1)]" />

                    <div className="absolute left-[8%] top-[48%] w-24 rounded-2xl border border-white/80 bg-white/82 p-3 shadow-sm backdrop-blur-sm">
                      <p className="font-mono text-[10px] uppercase text-brand-primary font-bold">Node A</p>
                      <p className="text-[12px] font-semibold text-foreground">Core Switch</p>
                    </div>
                    <div className="absolute right-[8%] top-[42%] w-28 rounded-2xl border border-white/80 bg-white/82 p-3 shadow-sm backdrop-blur-sm">
                      <p className="font-mono text-[10px] uppercase text-brand-accent font-bold">Node B</p>
                      <p className="text-[12px] font-semibold text-foreground">Edge Router</p>
                    </div>
                    <div className="absolute bottom-[8%] left-[34%] w-32 rounded-2xl border border-white/80 bg-white/82 p-3 shadow-sm backdrop-blur-sm">
                      <p className="font-mono text-[10px] uppercase text-brand-dark font-bold">Node C</p>
                      <p className="text-[12px] font-semibold text-foreground">Gateway 192.168</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="surface-panel p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                      infra status
                    </span>
                    <Badge tone="neutral">Enterprise</Badge>
                  </div>
                  <div className="grid gap-3 grid-cols-2">
                    {[
                      { label: "OOB", val: "Online", clr: "text-emerald-600" },
                      { label: "BGP", val: "Stable", clr: "text-brand-primary" },
                      { label: "OSPF", val: "Converged", clr: "text-brand-accent" },
                      { label: "VPN", val: "Secure", clr: "text-brand-dark" }
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-[18px] border border-white/80 bg-white/80 p-3 backdrop-blur-sm text-center">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-muted">{item.label}</p>
                        <p className={`mt-1 text-[11px] font-bold ${item.clr}`}>{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-panel p-4">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                    resource monitor
                  </span>
                  <div className="mt-4 space-y-3">
                    {[
                      { n: "CPU Load", p: "42%" },
                      { n: "Memory", p: "68%" },
                      { n: "Bandwidth", p: "24%" }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-[18px] border border-white/80 bg-white/80 p-2.5 backdrop-blur-sm"
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <p className="text-[10px] font-semibold text-muted">{item.n}</p>
                          <p className="text-[10px] font-bold text-foreground">{item.p}</p>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-primary rounded-full transition-all duration-1000"
                            style={{ width: item.p }}
                          />
                        </div>
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

