"use client";

import { ExternalLink, Phone, ArrowUp, MapPin, Clock } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-28 lg:pb-16 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-3.5">
            <span className="text-lg font-black tracking-tight text-white block">
              Harsha <span className="text-blue-500">Service Centre</span>
            </span>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Independent washing machine repair and maintenance service provider serving Hyderabad households with 8+ years of verified technical experience.
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{BUSINESS_DATA.workingHours}</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#issues" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Common Issues
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Pricing & Charges
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Coverage Localities
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Repair Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>Front Load Repair</li>
              <li>Top Load Repair</li>
              <li>Semi-Automatic Repair</li>
              <li>Fully Automatic Repair</li>
              <li>General Service (₹600)</li>
              <li>Visiting Inspection (₹350)</li>
            </ul>
          </div>

          {/* Direct Contact & Google Profile */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white text-white font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 8465801935</span>
              </a>

              <p className="text-slate-400 flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India (All Localities)</span>
              </p>

              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
                >
                  <span>Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back-to-Top Button */}
        <div className="mt-14 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Harsha Washing Machine Service Centre. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Independent multi-brand washing machine service · Hyderabad
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
