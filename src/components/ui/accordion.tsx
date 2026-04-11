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

export function Accordion({ items, variant = "default" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isLanding = variant === "landing";

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`
              cursor-pointer overflow-hidden transition-all duration-300
              ${isLanding
                ? `rounded-[1.75rem] border backdrop-blur-sm
                   ${isOpen
                     ? "border-brand-primary/30 bg-white shadow-[0_8px_32px_rgba(34,70,76,0.1)]"
                     : "border-border bg-white/72 shadow-soft hover:border-brand-primary/20 hover:bg-white/88 hover:shadow-[0_6px_24px_rgba(34,70,76,0.08)]"
                   }`
                : `surface-card
                   ${isOpen ? "ring-1 ring-brand-primary/15" : "hover:shadow-md"}`
              }
            `}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <button
              type="button"
              className={`
                flex w-full items-center gap-4 text-left
                ${isLanding ? "px-5 py-5 sm:px-6 sm:py-5" : "px-5 py-5 sm:px-6"}
              `}
              aria-expanded={isOpen}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`
                flex-1 font-semibold leading-snug transition-colors duration-200
                ${isLanding
                  ? `text-base sm:text-lg ${isOpen ? "text-brand-dark" : "text-brand-dark/85"}`
                  : "text-base text-foreground sm:text-lg"
                }
              `}>
                {item.question}
              </span>

              <span className={`
                inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-300
                ${isLanding
                  ? `h-10 w-10 border
                     ${isOpen
                       ? "border-brand-primary/30 bg-brand-primary text-white shadow-[0_4px_12px_rgba(83,170,161,0.3)]"
                       : "border-brand-primary/15 bg-brand-primary/8 text-brand-dark"
                     }`
                  : `h-9 w-9 border border-border
                     ${isOpen ? "bg-brand-primary/15 text-brand-dark" : "bg-brand-primary/8 text-brand-dark"}`
                }
              `}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-45" : "rotate-0"}`}
                >
                  <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className={`
                  text-sm leading-7 sm:text-base
                  ${isLanding
                    ? "px-5 pb-5 pt-1 text-muted sm:px-6 sm:pb-6"
                    : "border-t border-border px-5 pb-5 pt-4 text-muted sm:px-6"
                  }
                `}>
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
