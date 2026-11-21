import Image from "next/image";
import { Check } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

/**
 * Image Prompt Reference for Why Us:
 * "Professional technician politely explaining a repair to an Indian homeowner while gesturing toward the washing machine in a bright home, photorealistic, blue and white grading."
 */

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Why Harsha Service
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Harsha Washing Machine Service Centre?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Service principles built through 8+ years of dedicated washing machine repair and maintenance across Hyderabad.
          </p>
        </div>

        {/* 2-Column Grid: 6 Editorial Feature Items + Side Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 6 Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BUSINESS_DATA.whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="border border-slate-200 hover:border-blue-500 rounded-2xl p-5 hover:shadow-md transition-all duration-300 group bg-slate-50/50 hover:bg-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-blue-600 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: AI-Generated Side Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-100 shadow-xl bg-slate-100 aspect-[4/5] w-full">
              <Image
                src="/images/why-us-consultation.png"
                alt="Harsha technician explaining washing machine repair to homeowner in Hyderabad"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md mb-2 inline-block shadow-xs">
                  8+ Years Technical Mastery
                </span>
                <p className="text-sm font-bold text-white">
                  Transparent Diagnostics & Honest Repair Advice
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Every machine inspected on-site before any part replacement.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
