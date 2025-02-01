import React from "react";
import FaqAccordion from "./FaqAccordion";
import { abril_fatface } from "@/lib/font";

const questions = [
  {
    question: "What is LeadMonie?",
    answer:
      "LeadMonie is a platform that helps you manage your finances and investments.",
  },
  {
    question: "What is LeadMonie?",
    answer:
      "LeadMonie is a platform that helps you manage your finances and investments.",
  },
  {
    question: "What is LeadMonie?",
    answer:
      "LeadMonie is a platform that helps you manage your finances and investments.",
  },
  {
    question: "What is LeadMonie?",
    answer:
      "LeadMonie is a platform that helps you manage your finances and investments.",
  },
];

const Faq = () => {
  return (
    <section className="bg-slate-100 py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <h2
          className={`${abril_fatface} mx-auto mb-4 max-w-xl text-center text-2xl font-medium tracking-tight md:text-4xl lg:max-w-2xl lg:text-5xl`}
        >
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={questions} />
      </div>
    </section>
  );
};

export default Faq;
