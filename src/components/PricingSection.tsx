import { CheckCircle2, AlertCircle, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function PricingSection() {
  const whatsappGeneralUrl = buildWhatsAppLink("Book General Service (₹600)");
  const whatsappVisitingUrl = buildWhatsAppLink("Book Doorstep Visit & Inspection (₹350)");

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F5F9FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-[#082B59] text-[#FFD600] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Clear & Honest Rates
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            Washing Machine Service Charges
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Straightforward pricing with no hidden charges. Confirm applicable charges when booking your technician.
          </p>
        </div>

        {/* 2 Prominent Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: General Service */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-lg border-2 border-[#082B59] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[#FFD600] text-[#082B59] text-xs font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-extrabold text-[#1267B2] uppercase tracking-wider">
                Full Maintenance Check
              </span>
              <h3 className="text-2xl font-black text-[#082B59] mt-1">
                General Service
              </h3>
              
              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-[#082B59]">
                  ₹600
                </span>
                <span className="text-gray-500 font-semibold text-sm">/- per machine</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Comprehensive maintenance check and thorough cleaning to keep your washing machine functioning smoothly and prevent major breakdowns.
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Tub descaling and lint filter thorough clean</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Inlet water valve & drain hose blockage check</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Drum rotation balance & belt tension test</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Electrical wiring and safety earth ground test</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Operational wash & spin cycle test run</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#082B59] hover:bg-[#1267B2] text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#FFD600]" />
                <span>Book General Service</span>
              </a>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#082B59] font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 8465801935 to Schedule</span>
              </a>
            </div>
          </div>

          {/* Card 2: Visiting Charges */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-lg border border-gray-200 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Doorstep Diagnostic Visit
              </span>
              <h3 className="text-2xl font-black text-[#082B59] mt-1">
                Visiting Charges
              </h3>
              
              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-[#082B59]">
                  ₹350
                </span>
                <span className="text-gray-500 font-semibold text-sm">/- per visit</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Doorstep inspection by an experienced technician to diagnose the fault, test internal components, and give you an honest repair estimate.
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Doorstep technician visit to your home in Hyderabad</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>On-site mechanical and electronic fault diagnosis</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Inspection of motor, PCB, drain pump, drum & sensors</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Clear explanation of needed repairs and spare parts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>No obligation to proceed if you choose not to repair</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={whatsappVisitingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E52332] hover:bg-[#c91826] text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Doorstep Inspection</span>
              </a>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#082B59] font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 8465801935 for Slot</span>
              </a>
            </div>
          </div>

        </div>

        {/* Transparent Pricing Disclaimer Note */}
        <div className="mt-10 max-w-3xl mx-auto bg-amber-50 border border-amber-200/90 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Pricing Clarification:</p>
            <p className="text-amber-800 leading-relaxed font-normal">
              {BUSINESS_DATA.pricing.disclaimer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
