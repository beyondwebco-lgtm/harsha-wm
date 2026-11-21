"use client";

import { useState } from "react";
import { AlertCircle, MessageCircle, Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function IssueSelector() {
  const [selectedIssueId, setSelectedIssueId] = useState<string>("not-spinning");

  const selectedIssue =
    BUSINESS_DATA.commonProblems.find((p) => p.id === selectedIssueId) ||
    BUSINESS_DATA.commonProblems[0];

  const generatedWhatsAppUrl = buildWhatsAppLink(
    `Issue: ${selectedIssue.title} - ${selectedIssue.shortDesc}`
  );

  return (
    <section id="issues" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#FFD600] text-[#082B59] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-sm">
            Fast Problem Diagnosis
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            What Problem Are You Facing With Your Washing Machine?
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Click on any issue card below to generate an instant service inquiry for our Hyderabad technician team.
          </p>
        </div>

        {/* 12 Interactive Issue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BUSINESS_DATA.commonProblems.map((problem) => {
            const isSelected = selectedIssueId === problem.id;
            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setSelectedIssueId(problem.id)}
                className={`text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#082B59] text-white border-[#082B59] shadow-lg scale-[1.02]"
                    : "bg-[#F5F9FD] text-[#172B4D] border-gray-200/90 hover:border-[#1267B2] hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected ? "bg-[#FFD600] text-[#082B59]" : "bg-blue-100 text-[#082B59]"
                      }`}
                    >
                      {isSelected ? "Selected" : "Select Issue"}
                    </span>
                    <AlertCircle
                      className={`w-4 h-4 ${isSelected ? "text-[#FFD600]" : "text-gray-400"}`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-sm sm:text-base leading-snug ${
                      isSelected ? "text-white" : "text-[#082B59]"
                    }`}
                  >
                    {problem.title}
                  </h3>
                  <p
                    className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                      isSelected ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {problem.shortDesc}
                  </p>
                </div>

                <div className="mt-3 pt-2 flex items-center justify-between text-[11px] font-semibold">
                  <span className={isSelected ? "text-[#FFD600]" : "text-[#1267B2]"}>
                    {isSelected ? "Diagnosis Ready" : "Click to Select"}
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 ${isSelected ? "text-[#FFD600]" : "text-gray-400"}`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Issue Action Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#082B59] via-[#0B3770] to-[#082B59] rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-blue-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-[#FFD600] text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Selected: Washing Machine Diagnostic Ready</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {selectedIssue.title}
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {selectedIssue.shortDesc}
              </p>
              <div className="pt-1 text-xs text-blue-200">
                <span className="font-semibold text-[#FFD600]">Doorstep Visit:</span> Visiting Charge ₹350 | General Service ₹600 (Parts quoted after on-site diagnosis)
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={generatedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white font-extrabold px-5 py-3.5 rounded-xl shadow-md transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp This Problem</span>
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#E52332] hover:bg-[#c91826] text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_DATA.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
