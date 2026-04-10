import { Accordion } from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return <Accordion items={items} variant="landing" />;
}
