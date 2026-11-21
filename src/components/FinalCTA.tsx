import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function FinalCTA() {
  const whatsappUrl = buildWhatsAppLink("General Washing Machine Repair Inquiry");

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      
      {/* Decorative Water Bubble Texture Layer */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen overflow-hidden">
        <Image
          src="/images/water-bubbles-texture.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Drifting Ambient Water Bubble Elements */}
      <div className="absolute top-10 left-12 w-28 h-28 bubble-ambient opacity-20 animate-float pointer-events-none" />
      <div className="absolute bottom-12 right-16 w-40 h-40 bubble-ambient opacity-25 animate-float-slight pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Ripple Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue-500/10 pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-blue-500/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Doorstep Assistance Across Hyderabad</span>
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Washing Machine Not Working? We&apos;re Here to Help.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
          Get in touch with Harsha Washing Machine Service Centre for fast, reliable doorstep inspection and repair anywhere in Hyderabad.
        </p>

        {/* Pricing Chips */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-200">
          <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">Visiting Charges: ₹350</span>
          <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">General Service: ₹600</span>
          <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">8+ Years Experience</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-xl hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call {BUSINESS_DATA.phoneDisplay}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine-sweep w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-xl hover:-translate-y-0.5"
          >
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
