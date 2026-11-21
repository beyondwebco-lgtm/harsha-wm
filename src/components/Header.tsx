"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
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
      {/* Top Utility Bar with Deep Navy Frame */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
              {BUSINESS_DATA.experienceYears} Years Exp
            </span>
            <span className="text-slate-400">·</span>
            <span className="hidden sm:inline text-slate-300">
              Doorstep Washing Machine Repair Across Hyderabad
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-400">{BUSINESS_DATA.workingHours}</span>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-blue-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_DATA.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 tracking-tight leading-none">
                  Harsha <span className="text-blue-600">Service Centre</span>
                </span>
                <span className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                  Washing Machine Repair · Hyderabad
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 px-3 py-2 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{BUSINESS_DATA.phoneDisplay}</span>
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-xs"
              >
                Book a Service
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors"
              >
                Book a Service
              </a>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full text-center border border-slate-300 text-slate-700 font-medium py-2 rounded-lg text-sm hover:bg-slate-50 transition-colors"
              >
                Call {BUSINESS_DATA.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
