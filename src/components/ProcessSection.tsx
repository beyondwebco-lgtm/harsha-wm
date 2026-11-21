import { ArrowRight } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Service Process
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Book Your Service in 4 Simple Steps
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A straightforward process to coordinate doorstep inspection and repair with our technician.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_DATA.steps.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-xs transition-all"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-4 shadow-xs">
                  {step.step}
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="mt-10 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors shadow-xs"
          >
            <span>Book a Technician Visit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
