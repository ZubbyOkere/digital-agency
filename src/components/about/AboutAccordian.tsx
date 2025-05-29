// components/about/AboutAccordion.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aboutSections } from "@/utils/AboutUs";
import Image from "next/image";

export default function AboutAccordion() {
  return (
    <section className="bg-white py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion
          type="single"
          defaultValue="item-0"
          collapsible
          className="w-full"
        >
          {aboutSections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`}>
              <AccordionTrigger
                className={`w-full py-4 flex justify-center items-center text-xl font-semibold border-b border-[#E5E7EB] data-[state=open]:bg-[#1E3A8A] data-[state=open]:text-white data-[state=closed]:bg-[#E5E7EB] data-[state=closed]:text-[#1F2937] hover:bg-[#60A5FA] hover:text-white transition-colors duration-200`}
              >
                <span>{section.title}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-4 text-[#1F2937] text-base bg-white">
                <p className="mb-4">{section.content}</p>
                {section.title === "Our Team" && section.teamMembers && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    {section.teamMembers.map((member) => (
                      <div
                        key={member.name}
                        className="flex flex-col items-center"
                      >
                        <Image
                          src={member.image}
                          alt={`${member.name} photo`}
                          width={120}
                          height={120}
                          className="rounded-full object-cover mb-2"
                          priority={false}
                        />
                        <p className="text-[#1F2937] text-sm font-semibold text-center">
                          {member.name}
                        </p>
                        <p className="text-[#1F2937] text-sm text-center">
                          {member.position}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
