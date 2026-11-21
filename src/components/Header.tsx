"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Wrench } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Common Issues", href: "#issues" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Coverage", href: "#coverage" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#082B59] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#1267B2]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#FFD600] text-[#082B59] font-bold px-2 py-0.5 rounded text-[11px] tracking-wide uppercase">
              {BUSINESS_DATA.experienceYears} Years Exp
            </span>
            <span className="hidden sm:inline text-blue-100/90">
              Hyderabad Doorstep Washing Machine Repair & Maintenance
            </span>
            <span className="sm:hidden text-blue-100/90">Hyderabad Doorstep Service</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1 font-semibold text-[#FFD600] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_DATA.phoneDisplay}</span>
            </a>
            <span className="text-blue-300/40 hidden md:inline">|</span>
            <span className="text-blue-200 hidden md:inline">{BUSINESS_DATA.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo / Brand Name */}
            <Link href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#082B59] text-white flex items-center justify-center shadow-md group-hover:bg-[#1267B2] transition-colors">
                <Wrench className="w-6 h-6 text-[#FFD600]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold text-[#082B59] tracking-tight leading-tight">
                  HARSHA
                  <span className="text-[#1267B2] font-semibold text-xs sm:text-sm block sm:inline sm:ml-1.5 uppercase tracking-normal">
                    Washing Machine Service
                  </span>
                </span>
                <span className="text-[11px] text-gray-500 font-medium">
                  Hyderabad • Doorstep Service
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#1267B2] transition-colors py-1 hover:border-b-2 hover:border-[#FFD600]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#E52332] hover:bg-[#c91826] text-white font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#082B59] hover:bg-[#1267B2] text-white font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-sm"
              >
                <span>Book Service</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#082B59] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1267B2] hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-[#E52332] text-white font-bold py-2.5 px-3 rounded-lg text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={BUSINESS_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#16A34A] text-white font-bold py-2.5 px-3 rounded-lg text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
