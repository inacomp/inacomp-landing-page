"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionVariant = "default" | "landing";

type AccordionProps = {
  items: AccordionItem[];
  variant?: AccordionVariant;
};

const accordionStyles: Record<AccordionVariant, {
  item: string;
  button: string;
  question: string;
  iconWrapper: string;
  answer: string;
}> = {
  default: {
    item: "surface-card overflow-hidden",
    button: "flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6",
    question: "text-base font-semibold text-foreground sm:text-lg",
    iconWrapper:
      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-slate-50 text-brand-indigo",
    answer: "border-t border-border px-5 pb-5 pt-4 text-sm leading-7 text-muted sm:px-6 sm:text-base",
  },
  landing: {
    item: "rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur-sm sm:p-6",
    button: "flex w-full items-start justify-between gap-4 text-left",
    question: "text-base font-semibold text-brand-navy sm:text-lg",
    iconWrapper: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-indigo",
    answer: "pt-4 text-sm leading-7 text-slate-600 sm:text-base",
  },
};

export function Accordion({ items, variant = "default" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const styles = accordionStyles[variant];

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.button}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.iconWrapper}>
                {variant === "landing" ? (
                  <span className={`text-xl leading-none transition ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                ) : isOpen ? (
                  "−"
                ) : (
                  "+"
                )}
              </span>
            </button>
            {isOpen ? <div className={styles.answer}>{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
