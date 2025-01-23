import React from "react";
import FaqAccordion from "./FaqAccordion";

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
    <section className="bg-slate-100 py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto mb-4 max-w-[600px] text-center text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={questions} />
      </div>
    </section>
  );
};

export default Faq;
