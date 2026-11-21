import { ExternalLink, Phone } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 lg:pb-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <span className="text-base font-bold tracking-tight text-white block">
              Harsha Service Centre
            </span>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Independent washing machine repair and maintenance service provider serving Hyderabad households with 8+ years of technical experience.
            </p>
            <p className="text-xs text-slate-500">
              Hours: {BUSINESS_DATA.workingHours}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#issues" className="hover:text-white transition-colors">
                  Common Issues
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  Coverage
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Front Load Repair</li>
              <li>Top Load Repair</li>
              <li>Semi-Automatic Repair</li>
              <li>Fully Automatic Repair</li>
              <li>General Service (₹600)</li>
              <li>Visiting Inspection (₹350)</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Contact
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-white text-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+91 8465801935</span>
              </a>

              <p className="text-slate-400">
                Hyderabad, Telangana, India
              </p>

              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Harsha Washing Machine Service Centre. All rights reserved.</p>
          <p className="text-[11px]">Independent multi-brand washing machine service · Hyderabad, Telangana</p>
        </div>

      </div>
    </footer>
  );
}
