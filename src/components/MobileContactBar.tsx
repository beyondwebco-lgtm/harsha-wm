import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function MobileContactBar() {
  return (
    <>
      {/* Floating WhatsApp Action for Desktop with Gentle Pulse */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <a
          href={BUSINESS_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine-sweep flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border-2 border-white/20 animate-pulse-glow"
          aria-label="Chat with Harsha Service Centre on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-bold tracking-wide">WhatsApp Booking</span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
          
          {/* Call Button */}
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="flex items-center justify-center gap-2 border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold h-12 rounded-xl text-xs transition-colors shadow-2xs"
            aria-label="Call Harsha Washing Machine Service Centre"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={BUSINESS_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine-sweep flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl text-xs transition-colors shadow-md"
            aria-label="WhatsApp Harsha Washing Machine Service Centre"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

        </div>
      </div>
    </>
  );
}
