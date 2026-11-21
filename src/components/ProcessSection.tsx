import { CalendarCheck, CheckCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-[#082B59] text-[#FFD600] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            Book Your Washing Machine Service in 4 Easy Steps
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Quick, reliable doorstep repair coordination designed to respect your busy home schedule.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BUSINESS_DATA.steps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#F5F9FD] rounded-2xl p-6 sm:p-7 border border-gray-200/90 hover:border-[#1267B2] hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-11 h-11 rounded-xl bg-[#082B59] text-[#FFD600] font-black text-sm flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold uppercase text-gray-400">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#082B59] group-hover:text-[#1267B2] transition-colors leading-snug">
                  {step.title}
                </h3>
                
                <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#1267B2]">
                <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Fast Resolution</span>
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-[#E52332] hover:bg-[#c91826] text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-md hover:shadow-lg transition-all"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Book Washing Machine Service Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
