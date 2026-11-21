"use client";

import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
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
    <section id="issues" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Problem Diagnostic
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            What Problem Are You Facing?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Select an issue below to prepare an immediate WhatsApp inquiry for our technician.
          </p>
        </div>

        {/* 12 Interactive Issue Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {BUSINESS_DATA.commonProblems.map((problem) => {
            const isSelected = selectedIssueId === problem.id;
            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setSelectedIssueId(problem.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-2 border-blue-600 shadow-sm"
                    : "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[11px] font-semibold ${
                        isSelected ? "text-blue-600" : "text-slate-400"
                      }`}
                    >
                      {isSelected ? "Selected" : "Select Issue"}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {problem.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Issue High-Contrast Action Box with Deep Navy/Blue Background */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span>Selected Problem Diagnosis</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {selectedIssue.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedIssue.shortDesc}
            </p>
            <p className="text-xs text-blue-300/90 pt-1">
              Visiting charge ₹350 · General service ₹600 · Direct doorstep assistance
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={generatedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors shadow-sm"
            >
              <span>WhatsApp This Problem</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-3.5 rounded-lg transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-blue-300" />
              <span>Call Technician</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
