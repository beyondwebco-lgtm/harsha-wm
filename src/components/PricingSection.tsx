import { Check, ArrowRight } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function PricingSection() {
  const whatsappGeneralUrl = buildWhatsAppLink("Book General Service (₹600)");
  const whatsappVisitingUrl = buildWhatsAppLink("Book Doorstep Visit & Inspection (₹350)");

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Transparent Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Washing Machine Service Charges
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Straightforward pricing with no hidden charges. Confirm applicable charges when booking your appointment.
          </p>
        </div>

        {/* 2 Clean Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Visiting Charge */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-sm transition-all">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Doorstep Diagnostic Visit
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Visiting Charges
              </h3>

              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                  ₹350
                </span>
                <span className="text-xs text-slate-500 font-medium">/ doorstep visit</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                On-site inspection by an experienced technician to diagnose faults, test internal components, and provide an accurate repair estimate.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Doorstep visit anywhere across Hyderabad</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Mechanical and electronic fault diagnostics</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Inspection of motor, PCB, drain pump, and drum</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Clear explanation of needed repairs and parts</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={whatsappVisitingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-blue-600 hover:text-blue-600 bg-white text-slate-800 font-semibold py-3.5 rounded-lg text-sm transition-colors"
              >
                <span>Book Visiting Inspection</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Card 2: General Service with Blue Accent Theme */}
          <div className="bg-blue-50/40 border-2 border-blue-600 rounded-2xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Recommended
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Full Maintenance Service
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                General Service
              </h3>

              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-blue-700">
                  ₹600
                </span>
                <span className="text-xs text-slate-600 font-medium">/ machine</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Complete maintenance check, deep cleaning, and performance calibration to keep your washing machine operating smoothly.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-blue-200/80 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Tub descaling and lint filter thorough clean</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Inlet water valve & drain hose blockage check</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Drum rotation balance & belt tension test</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Operational wash & spin cycle test run</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200/80">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg text-sm transition-colors shadow-sm"
              >
                <span>Book General Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Pricing Clarification Note */}
        <div className="mt-8 max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-800">Note:</strong> {BUSINESS_DATA.pricing.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
