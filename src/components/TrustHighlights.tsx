"use client";

import { Home, Users, CheckCircle, Zap, Layers } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function TrustHighlights() {
  const highlightIcons = [
    Home,
    Users,
    CheckCircle,
    Zap,
    Layers
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200/80 py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {BUSINESS_DATA.highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 hover:border-blue-500 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-3 shadow-2xs group-hover:scale-105">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600 opacity-80 group-hover:opacity-100">
                  <span>Standard Verified</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
