import { ArrowRight, PhoneCall, FileText, Calendar, CheckCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ProcessSection() {
  const stepIcons = [PhoneCall, FileText, Calendar, CheckCircle];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Simple 4-Step Process
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book Your Service in 4 Simple Steps
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A straightforward process to coordinate doorstep inspection and repair with our technician.
          </p>
        </div>

        {/* 4 Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle connecting line across desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-blue-200 -z-0" />

          {BUSINESS_DATA.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.step}
                className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative z-10 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                  <span>Fast Coordination</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="btn-shine-sweep inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
          >
            <span>Book a Technician Visit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
