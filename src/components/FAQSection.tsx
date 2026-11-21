"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Everything you need to know about scheduling doorstep washing machine repairs with Harsha Service Centre.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {BUSINESS_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
