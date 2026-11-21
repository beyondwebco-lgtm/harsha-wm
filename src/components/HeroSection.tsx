import { Phone, ArrowRight, Check, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function HeroSection() {
  const whatsappHeroUrl = buildWhatsAppLink("Doorstep Washing Machine Service Inquiry");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-slate-50/30 to-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle Blue Tint Gradient Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Blue Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 border border-blue-200/90 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>8+ Years Experience · Hyderabad Doorstep Service</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Expert Washing Machine Repair & Service in{" "}
              <span className="text-blue-600">Hyderabad</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Professional doorstep repair and maintenance for front-load, top-load, semi-automatic, and fully automatic washing machines across Hyderabad.
            </p>

            {/* Key Service Highlights List */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-700 max-w-md">
              <div className="flex items-center gap-2 bg-white/80 border border-slate-200/90 px-3 py-2 rounded-lg">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Doorstep in all areas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-slate-200/90 px-3 py-2 rounded-lg">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Visiting charge: ₹350</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-slate-200/90 px-3 py-2 rounded-lg">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">General service: ₹600</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-slate-200/90 px-3 py-2 rounded-lg">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">All major brands</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-colors shadow-sm"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-blue-600 hover:text-blue-600 bg-white text-slate-800 font-semibold px-6 py-3.5 rounded-lg text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {BUSINESS_DATA.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 pt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Available 8:00 AM – 9:00 PM everyday · Multi-brand specialists</span>
            </p>

          </div>

          {/* Right Column: Clean Visual Showcase with Navy/Blue Frame */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-blue-100 rounded-2xl shadow-lg overflow-hidden">
              
              {/* Header Banner */}
              <div className="bg-slate-900 text-white p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Service Overview
                  </span>
                  <span className="inline-flex items-center gap-1 bg-blue-600/40 text-blue-200 text-[11px] font-medium px-2 py-0.5 rounded border border-blue-500/40">
                    <MapPin className="w-3 h-3 text-blue-300" />
                    Hyderabad Wide
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  Harsha Washing Machine Care
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Doorstep technicians diagnosing electronic & mechanical faults.
                </p>
              </div>

              {/* Pricing Overview Cards */}
              <div className="p-6 space-y-5 bg-white">
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl p-3.5">
                    <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wide block">
                      Visiting Charge
                    </span>
                    <span className="text-2xl font-extrabold text-slate-900 block mt-0.5">
                      ₹350
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Doorstep inspection
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                    <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide block">
                      General Service
                    </span>
                    <span className="text-2xl font-extrabold text-slate-900 block mt-0.5">
                      ₹600
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Deep clean & check
                    </span>
                  </div>
                </div>

                {/* Supported Appliance Types */}
                <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="font-semibold text-slate-900 pb-0.5">
                    Appliance Coverage:
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Front Load & Top Load</span>
                    <span className="text-blue-600 font-medium">Fully Automatic</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Semi-Automatic</span>
                    <span className="text-blue-600 font-medium">Twin Tub</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Motor & Drain Pumps</span>
                    <span className="text-blue-600 font-medium">Component Repair</span>
                  </div>
                </div>

                {/* WhatsApp Action inside showcase */}
                <div className="pt-2">
                  <a
                    href={whatsappHeroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 rounded-lg transition-colors shadow-xs"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
