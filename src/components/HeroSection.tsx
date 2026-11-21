"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, ArrowRight, Check, MapPin, Shield, Award } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

/**
 * Image Prompt Reference for Hero:
 * "Friendly Indian technician in late 20s or 30s kneeling beside an open front-load washing machine, holding a multimeter or tool, looking warmly toward camera, bright modern apartment laundry nook, soft blue ambient light, photorealistic, unbranded appliance, no text."
 */

export default function HeroSection() {
  const whatsappHeroUrl = buildWhatsAppLink("Doorstep Washing Machine Service Inquiry");
  
  // Count-up state for rates
  const [visitingCount, setVisitingCount] = useState(0);
  const [generalCount, setGeneralCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setVisitingCount(Math.round(easeOut * 350));
      setGeneralCount(Math.round(easeOut * 600));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Ambient Bubble Accents */}
      <div className="absolute top-10 left-10 w-48 h-48 bubble-ambient opacity-60 animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bubble-ambient opacity-40 animate-float-slight pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>8+ YEARS EXPERIENCE · HYDERABAD WIDE</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Expert Washing Machine Repair & Service in{" "}
              <span className="text-blue-600 relative inline-block">
                Hyderabad
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-blue-300 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Professional doorstep washing machine repair and maintenance for front-load, top-load, semi-automatic, and fully automatic washing machines across Hyderabad.
            </p>

            {/* Four Key Checks with SVG Stroke Animation style */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-700 max-w-md">
              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/90 px-3.5 py-2.5 rounded-xl shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Doorstep visit in all areas</span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/90 px-3.5 py-2.5 rounded-xl shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Visiting charge ₹350</span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/90 px-3.5 py-2.5 rounded-xl shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">General service ₹600</span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/90 px-3.5 py-2.5 rounded-xl shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">All major brands supported</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#booking"
                className="btn-shine-sweep inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 bg-white text-slate-900 font-bold px-6 py-4 rounded-xl text-sm transition-all group"
              >
                <Phone className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform" />
                <span>Call {BUSINESS_DATA.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 pt-1 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Available 8:00 AM – 9:00 PM everyday · Multi-brand certified technicians</span>
            </p>

          </div>

          {/* Right Column: Visual Composition with Hero Image + Floating Badges + 3D Snapshot Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Trust Badge 1 */}
            <div className="absolute -top-4 -left-4 z-20 bg-white border border-blue-200 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2 animate-float">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Doorstep Visit</p>
                <p className="text-xs font-bold text-slate-900">Hyderabad Wide</p>
              </div>
            </div>

            {/* Floating Trust Badge 2 */}
            <div className="absolute -bottom-4 -right-2 z-20 bg-white border border-blue-200 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2 animate-float-slight">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Experience</p>
                <p className="text-xs font-bold text-slate-900">8+ Years Record</p>
              </div>
            </div>

            {/* Main Visual Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-100 shadow-xl bg-white transition-transform duration-300 hover:scale-[1.01]">
              
              {/* Optional Hero Image Banner */}
              <div className="relative h-44 sm:h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/hero-technician.png"
                  alt="Friendly technician servicing a washing machine in Hyderabad"
                  fill
                  className="object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                  onError={(e) => {
                    // Fallback to poster preview if image is still generating
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes("harsha-poster.jpg")) {
                      target.src = "/images/harsha-poster.jpg";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      Service Snapshot
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Harsha Service Overview
                    </h3>
                  </div>
                  <span className="bg-blue-600/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-blue-400/40 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    All Areas
                  </span>
                </div>
              </div>

              {/* Snapshot Content with Dynamic Count-Up Animation */}
              <div className="p-5 sm:p-6 space-y-4 bg-white">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50/70 border border-blue-200/90 rounded-xl p-3.5">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide block">
                      Visiting Charge
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block mt-0.5">
                      ₹{visitingCount}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Doorstep diagnosis
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                      General Service
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block mt-0.5">
                      ₹{generalCount}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Deep clean & check
                    </span>
                  </div>
                </div>

                {/* Supported Machine Categories */}
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="font-bold text-slate-900 pb-0.5">
                    Supported Machine Categories:
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Front Load & Top Load</span>
                    <span className="text-blue-600 font-semibold">Fully Automatic</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Semi-Automatic</span>
                    <span className="text-blue-600 font-semibold">Twin Tub</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Motor & Drain Pumps</span>
                    <span className="text-blue-600 font-semibold">Component Repair</span>
                  </div>
                </div>

                {/* Inquire on WhatsApp CTA */}
                <div className="pt-2">
                  <a
                    href={whatsappHeroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine-sweep w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold py-3.5 rounded-xl transition-colors shadow-sm"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
