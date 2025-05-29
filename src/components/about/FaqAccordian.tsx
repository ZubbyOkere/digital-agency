// components/FAQAccordion.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/utils/Faq";

export default function FAQAccordion() {
  return (
    <section className="bg-white py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
          Find answers to common questions about our services, pricing, and
          process to help you make informed decisions.
        </p>
        <Accordion
          type="single"
          defaultValue="item-0"
          collapsible
          className="w-full"
        >
          {faq.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger
                className={`w-full text-left py-4 flex justify-between items-center text-lg font-semibold text-[#1E3A8A] border-b border-[#E5E7EB] hover:bg-[#60A5FA] hover:text-white transition-colors duration-200`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-4 text-[#1F2937] text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
