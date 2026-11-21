import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-2.5 shadow-md pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium h-11 rounded-lg text-xs transition-colors"
          aria-label="Call Harsha Washing Machine Service Centre"
        >
          <Phone className="w-3.5 h-3.5 text-slate-700" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium h-11 rounded-lg text-xs transition-colors shadow-xs"
          aria-label="WhatsApp Harsha Washing Machine Service Centre"
        >
          <span>WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

      </div>
    </div>
  );
}
