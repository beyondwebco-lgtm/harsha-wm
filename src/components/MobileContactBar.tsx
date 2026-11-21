import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-2xl pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-[#E52332] hover:bg-[#c91826] text-white font-extrabold h-12 rounded-xl text-sm shadow-md transition-colors"
          aria-label="Call Harsha Washing Machine Service Centre"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white font-extrabold h-12 rounded-xl text-sm shadow-md transition-colors"
          aria-label="WhatsApp Harsha Washing Machine Service Centre"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
