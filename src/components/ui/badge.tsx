import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "brand" | "emerald" | "amber" | "neutral";
};

const toneClasses = {
  brand: "border-brand-indigo/15 bg-brand-indigo/10 text-brand-indigo",
  emerald: "border-brand-emerald/15 bg-brand-emerald/10 text-brand-emerald",
  amber: "border-brand-amber/20 bg-brand-amber/10 text-[#9a6500]",
  neutral: "border-border bg-white/80 text-foreground",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
