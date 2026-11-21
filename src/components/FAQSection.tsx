"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
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
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Everything you need to know about scheduling doorstep washing machine repairs with Harsha Service Centre.
          </p>
        </div>

        {/* Accordion List with Rotating Plus/Minus Icon & Active Left Border */}
        <div className="space-y-3">
          {BUSINESS_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "bg-blue-50/50 border-blue-400 border-l-4 border-l-blue-600 shadow-2xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                      isOpen ? "text-blue-900" : "text-slate-900"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 pt-3">
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
