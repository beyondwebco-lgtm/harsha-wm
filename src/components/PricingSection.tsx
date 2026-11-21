"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, Tag, ShieldCheck } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function PricingSection() {
  const whatsappGeneralUrl = buildWhatsAppLink("Book General Service (₹600)");
  const whatsappVisitingUrl = buildWhatsAppLink("Book Doorstep Visit & Inspection (₹350)");

  // Count up state
  const [visitingPrice, setVisitingPrice] = useState(0);
  const [generalPrice, setGeneralPrice] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setVisitingPrice(Math.round(easeOut * 350));
      setGeneralPrice(Math.round(easeOut * 600));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Clear & Honest Rates
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Washing Machine Service Charges
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Straightforward pricing with no hidden charges. Confirm applicable charges when booking your appointment.
          </p>
        </div>

        {/* 2 Clean Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Visiting Charge */}
          <div className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                <span>Doorstep Diagnostic Visit</span>
                <Tag className="w-3.5 h-3.5 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Visiting Charges
              </h3>

              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">
                  ₹{visitingPrice}
                </span>
                <span className="text-xs text-slate-500 font-semibold">/ doorstep visit</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                On-site inspection by an experienced technician to diagnose faults, test internal components, and provide an accurate repair estimate.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Doorstep visit anywhere across Hyderabad</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Mechanical and electronic fault diagnostics</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Inspection of motor, PCB, drain pump, and drum</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Clear explanation of needed repairs and parts</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={whatsappVisitingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine-sweep w-full inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 bg-white text-slate-800 font-bold py-3.5 rounded-xl text-sm transition-all shadow-xs"
              >
                <span>Book Visiting Inspection</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Card 2: General Service (Highlighted Popular Navy Gradient Card) */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white border-2 border-blue-500 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-bl-xl uppercase tracking-wider shadow-xs">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                <span>Full Maintenance Service</span>
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              </div>

              <h3 className="text-xl font-bold text-white mt-1">
                General Service
              </h3>

              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  ₹{generalPrice}
                </span>
                <span className="text-xs text-blue-300 font-semibold">/ machine</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                Complete maintenance check, deep cleaning, and performance calibration to keep your washing machine operating smoothly.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Tub descaling and lint filter thorough clean</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Inlet water valve & drain hose blockage check</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Drum rotation balance & belt tension test</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Operational wash & spin cycle test run</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine-sweep w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md"
              >
                <span>Book General Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Pricing Clarification Note */}
        <div className="mt-8 max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-xs text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900 font-bold">Important Note:</strong> {BUSINESS_DATA.pricing.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
