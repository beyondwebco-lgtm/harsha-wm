import { Phone, MessageCircle, MapPin, Wrench, ExternalLink, Clock } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-[#051B38] text-white pt-14 pb-24 lg:pb-14 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#082B59] text-white flex items-center justify-center shadow-md border border-[#1267B2]">
                <Wrench className="w-5 h-5 text-[#FFD600]" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                HARSHA <span className="text-[#FFD600] font-bold text-sm block">Washing Machine Service</span>
              </span>
            </div>

            <p className="text-xs text-blue-200/80 leading-relaxed font-normal">
              Independent washing machine repair and maintenance service provider serving Hyderabad households with 8+ years of dedicated technical experience.
            </p>

            <div className="pt-2 text-xs text-[#FFD600] font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{BUSINESS_DATA.workingHours}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-200/90 font-medium">
              <li>
                <a href="#" className="hover:text-[#FFD600] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFD600] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#issues" className="hover:text-[#FFD600] transition-colors">
                  Common Issues
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#FFD600] transition-colors">
                  Service Charges
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#FFD600] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FFD600] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-[#FFD600] transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFD600] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Repair Services */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              Repair Services
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-200/90 font-medium">
              <li>Front Load Repair</li>
              <li>Top Load Repair</li>
              <li>Semi-Automatic Repair</li>
              <li>Fully Automatic Repair</li>
              <li>General Service (₹600)</li>
              <li>Motor & Drainage Repair</li>
              <li>Visiting Inspection (₹350)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-blue-200/90 font-medium">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#FFD600] transition-colors text-white font-bold"
              >
                <Phone className="w-4 h-4 text-[#FFD600]" />
                <span>+91 8465801935</span>
              </a>

              <a
                href={BUSINESS_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FFD600] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                <span>WhatsApp: +91 8465801935</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E52332] shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India (All Localities)</span>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FFD600] hover:underline"
                >
                  <span>Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-300/70">
          <p className="text-center md:text-left">
            © 2026 Harsha Washing Machine Service Centre. All Rights Reserved.
          </p>
          <p className="text-center md:text-right text-[11px]">
            Independent multi-brand washing machine repair and maintenance • Hyderabad, Telangana
          </p>
        </div>

      </div>
    </footer>
  );
}
