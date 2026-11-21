"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Wrench, Clock } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if currently within 8:00 AM - 9:00 PM (IST)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpenNow(hours >= 8 && hours < 21);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for sticky blur header and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-blue-600 z-50 origin-left transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Top Utility Bar with Open Now Status */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-blue-600/30 text-blue-300 border border-blue-500/40 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-slate-400"}`} />
              <span>{isOpenNow ? "Open Now" : "Opens at 8 AM"}</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-slate-300">
              {BUSINESS_DATA.experienceYears} Years Experience · Hyderabad Doorstep Washing Machine Repair
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-blue-400" />
              <span>{BUSINESS_DATA.workingHours}</span>
            </span>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-bold text-blue-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_DATA.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-xs">
                <Wrench className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-slate-900 tracking-tight leading-tight">
                  Harsha <span className="text-blue-600">Service Centre</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
                  Washing Machine Repair · Hyderabad
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Animated Underline */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative py-1 hover:text-blue-600 transition-colors group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="text-sm font-bold text-slate-800 hover:text-blue-600 px-3 py-2 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{BUSINESS_DATA.phoneDisplay}</span>
              </a>
              <a
                href="#booking"
                className="btn-shine-sweep inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-xs hover:-translate-y-0.5"
              >
                Book a Service
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Dropdown with Staggered Links */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-5 py-5 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-shine-sweep w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-sm shadow-xs transition-colors"
              >
                Book a Service
              </a>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full text-center border border-slate-300 text-slate-800 font-semibold py-2.5 rounded-lg text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {BUSINESS_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
