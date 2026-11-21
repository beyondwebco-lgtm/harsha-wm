"use client";

import { useState } from "react";
import {
  Power,
  RotateCw,
  Droplets,
  ArrowDownCircle,
  Volume2,
  Waves,
  Disc,
  Activity,
  AlertTriangle,
  PauseCircle,
  Lock,
  Cpu,
  ArrowRight,
  Phone
} from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

const issueIconMap: Record<string, React.ElementType> = {
  "not-starting": Power,
  "not-spinning": RotateCw,
  "water-leakage": Droplets,
  "water-not-draining": ArrowDownCircle,
  "making-noise": Volume2,
  "not-filling-water": Waves,
  "drum-not-rotating": Disc,
  "excessive-vibration": Activity,
  "error-codes": AlertTriangle,
  "stopping-mid-cycle": PauseCircle,
  "door-not-locking": Lock,
  "motor-issues": Cpu,
};

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
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Instant Diagnostic
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Problem Are You Facing With Your Washing Machine?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your symptom below to connect directly with our technician on WhatsApp with prefilled fault diagnosis.
          </p>
        </div>

        {/* 12 Interactive Issue Buttons Grid with Unique Line Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {BUSINESS_DATA.commonProblems.map((problem) => {
            const isSelected = selectedIssueId === problem.id;
            const Icon = issueIconMap[problem.id] || RotateCw;

            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => setSelectedIssueId(problem.id)}
                className={`text-left p-4 sm:p-4.5 rounded-xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]"
                    : "bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:shadow-2xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </div>

                    {isSelected ? (
                      <span className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center text-xs font-bold shadow-xs">
                        ✓
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-400 group-hover:text-blue-600">
                        Select
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-bold text-sm leading-snug ${
                      isSelected ? "text-white" : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    {problem.title}
                  </h3>

                  <p
                    className={`text-xs mt-1.5 line-clamp-2 leading-relaxed ${
                      isSelected ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {problem.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Issue High-Contrast Action Box */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-1.5 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Selected Problem Diagnosis</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {selectedIssue.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {selectedIssue.shortDesc}
            </p>
            <p className="text-xs text-blue-300 font-semibold pt-1">
              Visiting charge ₹350 · General service ₹600 · Parts quoted separately
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0 relative z-10">
            <a
              href={generatedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine-sweep inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Inquire on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-3.5 rounded-xl transition-all border border-white/15"
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
