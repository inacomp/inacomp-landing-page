import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/marketing/reveal";
import { Container } from "@/components/ui/container";
import { buildWhatsAppUrl, contactAdmins } from "@/lib/site-content";

function WhatsAppMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactAdminSection() {
  return (
    <section id="contact" className="section-space">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-[linear-gradient(135deg,rgba(232,248,246,0.98),rgba(220,243,240,0.94)_45%,rgba(232,247,245,0.98))] px-7 py-10 shadow-[0_28px_80px_rgba(15,23,42,0.12)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.82),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.76),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(135deg,rgba(0,0,0,0.2),transparent_65%)]" />
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(23rem,25.5rem)] lg:items-center">
              <div className="max-w-2xl space-y-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-dark/35 bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-dark shadow-[0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                  CONTACT ADMIN
                </span>
                <h2 className="max-w-3xl text-balance text-2xl font-medium leading-[1.6] text-slate-800 sm:text-[2rem] lg:text-[2.15rem]">
                  Ada yang bingung soal teknis atau aturan pendaftaran? <br />{" "}
                  Langsung tanya ke admin lewat WhatsApp
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactAdmins.map((contact) => (
                  <Link
                    key={contact.phoneHref}
                    href={buildWhatsAppUrl(contact.phoneHref)}
                    target="_blank"
                    className="group relative flex items-center gap-4 overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] px-5 py-5 shadow-[0_16px_32px_rgba(15,23,42,0.14),0_6px_18px_rgba(20,184,166,0.08)] transition-all hover:-translate-y-0.5 hover:border-teal-300/70 hover:shadow-[0_22px_40px_rgba(15,23,42,0.16),0_10px_20px_rgba(20,184,166,0.12)]"
                  >
                    <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.55),transparent_42%)]" />
                    <div className="relative flex h-[4.35rem] w-[4.35rem] shrink-0 items-center justify-center rounded-[22px] border border-teal-100 bg-white text-slate-950 shadow-[0_12px_24px_rgba(45,212,191,0.22)] transition-transform group-hover:scale-105">
                      <WhatsAppMark />
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-dark sm:text-[11px]">
                        {contact.role}
                      </p>
                      <p className="mt-0.5 text-2xl font-bold leading-tight text-slate-900 sm:mt-1 sm:text-[2rem] sm:leading-none">
                        {contact.name}
                      </p>
                      <p className="mt-1.5 text-sm font-medium text-slate-700 sm:mt-2 sm:text-[15px]">
                        {contact.phoneDisplay}
                      </p>
                    </div>
                    <ArrowRight className="relative h-6 w-6 shrink-0 text-brand-dark transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
            <Sparkles className="pointer-events-none absolute bottom-8 right-7 h-9 w-9 text-white/75 drop-shadow-[0_8px_18px_rgba(255,255,255,0.65)] sm:h-10 sm:w-10" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
