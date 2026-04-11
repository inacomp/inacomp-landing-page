import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "brand" | "emerald" | "amber" | "neutral";
};

const toneClasses = {
  brand: "border-brand-primary/18 bg-brand-primary/12 text-brand-dark",
  emerald: "border-brand-primary-strong/18 bg-brand-primary-strong/12 text-brand-dark",
  amber: "border-brand-accent/14 bg-brand-accent/10 text-brand-accent",
  neutral: "border-border bg-white/72 text-foreground",
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
