"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

type FaqProps = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FaqProps[];
};

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  const [activeItem, setActiveItem] = useState("");

  const handleAccordionClick = (itemValue: string) => {
    setActiveItem((prevItem) => (prevItem === itemValue ? "" : itemValue));
  };

  return (
    <Accordion type="single" collapsible>
      {faqs.map((item, index: number) => (
        <AccordionItem
          value={`item-${index}`}
          key={index + 1}
          // open={activeItem === `item-${index + 1}`}
        >
          <AccordionTrigger
            onClick={() => handleAccordionClick(`item-${index + 1}`)}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
