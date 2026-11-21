import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function FinalCTA() {
  const whatsappUrl = buildWhatsAppLink("General Washing Machine Repair Inquiry");

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Subtle Ambient Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Doorstep Assistance Across Hyderabad</span>
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Washing Machine Not Working? We&apos;re Here to Help.
        </h2>

        <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Contact Harsha Washing Machine Service Centre for fast, reliable doorstep inspection and repair anywhere in Hyderabad.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-blue-200">
          <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10">Visiting Charges: ₹350</span>
          <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10">General Service: ₹600</span>
          <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10">8+ Years Experience</span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3.5 rounded-lg text-sm transition-colors shadow-md"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call {BUSINESS_DATA.phoneDisplay}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-colors shadow-md"
          >
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
