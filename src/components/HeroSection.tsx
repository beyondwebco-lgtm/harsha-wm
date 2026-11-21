import { Phone, ArrowRight, Check } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function HeroSection() {
  const whatsappHeroUrl = buildWhatsAppLink("Doorstep Washing Machine Service Inquiry");

  return (
    <section className="bg-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Subtle Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>8+ Years Experience · Hyderabad Wide</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Expert Washing Machine Repair & Service in Hyderabad
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Professional doorstep repair and maintenance for front-load, top-load, semi-automatic, and fully automatic washing machines across Hyderabad.
            </p>

            {/* Key Service Highlights List */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-700 max-w-md">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Doorstep visit in all areas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Visiting charge: ₹350</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>General service: ₹600</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>All major brands supported</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-colors shadow-xs"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 bg-white text-slate-900 font-medium px-6 py-3.5 rounded-lg text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>Call {BUSINESS_DATA.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 pt-1">
              Available 8:00 AM – 9:00 PM every day for doorstep appointments.
            </p>

          </div>

          {/* Right Column: Clean Editorial Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-slate-200 pb-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Service Snapshot
                </div>
                <div className="text-xl font-bold text-slate-900 mt-1">
                  Harsha Service Overview
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Direct technician diagnosis and maintenance at your home in Hyderabad.
                </p>
              </div>

              {/* Pricing Overview Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Visiting Charge
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">
                    ₹350
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Doorstep diagnosis
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    General Service
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">
                    ₹600
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Cleaning & inspection
                  </div>
                </div>
              </div>

              {/* Supported Appliance Types */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="font-medium text-slate-900 pb-1">
                  Supported Machine Categories:
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span>Front Load & Top Load</span>
                  <span className="text-slate-500">Fully Automatic</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span>Semi-Automatic</span>
                  <span className="text-slate-500">Twin Tub</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Component Repairs</span>
                  <span className="text-slate-500">Motor & Drain Pump</span>
                </div>
              </div>

              {/* Quick WhatsApp Action inside showcase */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-3 rounded-lg transition-colors"
              >
                Inquire on WhatsApp
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
