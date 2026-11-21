import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function FinalCTA() {
  const whatsappUrl = buildWhatsAppLink("Washing Machine Repair Consultation");

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[#082B59] via-[#0B3770] to-[#082B59] text-white relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD600_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="inline-block bg-[#FFD600] text-[#082B59] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-md">
          Direct Technician Support Across Hyderabad
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Washing Machine Not Working? We&apos;re Here to Help!
        </h2>

        <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Get in touch with Harsha Washing Machine Service Centre for professional doorstep repair and maintenance support across Hyderabad.
        </p>

        {/* Rate Banner in CTA */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-xl border border-white/15 text-xs sm:text-sm text-blue-100">
          <span className="flex items-center gap-1.5 font-bold text-white">
            <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
            Visiting Charges: ₹350
          </span>
          <span className="text-blue-300">|</span>
          <span className="flex items-center gap-1.5 font-bold text-white">
            <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
            General Service: ₹600
          </span>
          <span className="text-blue-300">|</span>
          <span className="flex items-center gap-1.5 font-bold text-[#FFD600]">
            8+ Years Experience
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E52332] hover:bg-[#c91826] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call {BUSINESS_DATA.phoneDisplay}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Now</span>
          </a>
        </div>

        {/* Trust Strip */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <span>8+ Years Experience</span>
          <span>•</span>
          <span>All Major Brands</span>
          <span>•</span>
          <span>Doorstep Service Across Hyderabad</span>
        </div>

      </div>
    </section>
  );
}
