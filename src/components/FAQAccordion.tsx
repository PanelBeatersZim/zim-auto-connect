
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Plus, Minus } from "lucide-react";
import React from "react";

type Faq = {
  question: string;
  answer: string;
};

type Props = {
  faqs: Faq[];
  singleOpen?: boolean;
  ariaLabel?: string;
};

export default function FAQAccordion({ faqs, singleOpen = true, ariaLabel }: Props) {
  // Only allow one to be open if singleOpen
  const [openIndex, setOpenIndex] = React.useState<null | number>(null);

  return (
    <Accordion type={singleOpen ? "single" : "multiple"} collapsible className="w-full" aria-label={ariaLabel}>
      {faqs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          value={singleOpen ? String(idx) : undefined}
          className="border-b"
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        >
          <AccordionTrigger className="flex items-center justify-between py-4 text-left font-medium transition-all hover:underline gap-2">
            <span>{faq.question}</span>
            <span>
              {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </span>
          </AccordionTrigger>
          <AccordionContent forceMount={openIndex === idx}>
            <div className="py-1 text-[.98rem] text-gray-700">{faq.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
