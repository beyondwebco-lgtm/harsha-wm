import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function FinalCTA() {
  const whatsappUrl = buildWhatsAppLink("General Washing Machine Repair Inquiry");

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
          Doorstep Assistance Across Hyderabad
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
          Washing Machine Not Working? We&apos;re Here to Help.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Contact Harsha Washing Machine Service Centre for fast, reliable doorstep inspection and repair anywhere in Hyderabad.
        </p>

        <div className="mt-6 text-xs text-slate-400">
          Visiting Charges ₹350 · General Service ₹600 · 8+ Years Experience
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-medium px-6 py-3.5 rounded-lg text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-700" />
            <span>Call {BUSINESS_DATA.phoneDisplay}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-colors shadow-xs"
          >
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
