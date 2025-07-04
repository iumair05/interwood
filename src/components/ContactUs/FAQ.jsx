"use client";
import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";

const faqItems = [
  {
    question: "What is your delivery timeframe?",
    answer:
      "Our standard delivery time is 2–4 weeks for in-stock items. Custom orders typically take 6–8 weeks.",
  },
  {
    question: "Do you offer customization options?",
    answer:
      "Yes, we offer extensive customization options for most of our furniture pieces. You can choose fabrics, finishes, and configurations to suit your needs.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for standard items in original condition. Custom and special orders are non-returnable.",
  },
  {
    question: "Do you offer assembly services?",
    answer:
      "Yes, we offer professional assembly services for an additional fee. Our trained technicians will ensure your furniture is set up correctly.",
  },
  {
    question: "What warranty do you offer on your furniture?",
    answer:
      "All our furniture comes with a 5-year limited warranty against manufacturing defects. This warranty does not cover normal wear and tear.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center px-4">
      <h2 className="text-3xl font-semibold mb-2 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-2xl">
        Find answers to our most commonly asked questions. If you can’t find
        what you’re looking for, please contact us.
      </p>
      <div className="w-full max-w-2xl space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded shadow border">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <span className="font-medium">{item.question}</span>
              <ExpandMore
                className={`text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 px-4 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
