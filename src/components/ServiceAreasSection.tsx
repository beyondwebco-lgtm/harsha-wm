"use client";

import { useState } from "react";
import { MapPin, Search, Phone } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ServiceAreasSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocalities = BUSINESS_DATA.localities.filter((loc) =>
    loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="coverage" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Coverage Area
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Washing Machine Repair Services Across Hyderabad
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Reliable doorstep washing machine repair support throughout residential colonies, high-rises, and commercial neighborhoods in Hyderabad.
          </p>
        </div>

        {/* Coverage Container with Search Filter & Abstract Map Graphic */}
        <div className="bg-gradient-to-br from-blue-50/50 via-slate-50/60 to-blue-50/30 border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Top Bar with Search Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-blue-200/60 relative z-10">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Search Your Hyderabad Locality
              </h3>
              <p className="text-xs text-slate-500">
                Showing {filteredLocalities.length} active service areas
              </p>
            </div>

            {/* Quick Filter Search Box */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search area (e.g. Kondapur, Miyapur)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 shadow-2xs"
              />
            </div>
          </div>

          {/* Dotted Abstract Map Pins SVG Graphic Background */}
          <div className="absolute top-12 right-6 opacity-20 pointer-events-none hidden md:block">
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
              <circle cx="50" cy="40" r="4" fill="#2563EB" />
              <circle cx="110" cy="50" r="6" fill="#2563EB" className="animate-pulse" />
              <circle cx="170" cy="40" r="4" fill="#2563EB" />
              <circle cx="70" cy="90" r="5" fill="#2563EB" />
              <circle cx="140" cy="100" r="8" fill="#2563EB" className="animate-pulse" />
              <circle cx="190" cy="110" r="4" fill="#2563EB" />
              <circle cx="90" cy="140" r="5" fill="#2563EB" />
              <circle cx="160" cy="150" r="4" fill="#2563EB" />
              <path d="M50,40 L110,50 L140,100 L90,140" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M110,50 L170,40 L190,110 L160,150" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Locality Chips Grid */}
          <div className="mt-6 flex flex-wrap gap-2.5 relative z-10">
            {filteredLocalities.map((locality) => (
              <span
                key={locality}
                className="bg-white border border-slate-200/90 text-slate-800 hover:border-blue-500 hover:text-blue-600 hover:scale-105 hover:shadow-xs px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-default shadow-2xs"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{locality}</span>
              </span>
            ))}
            {filteredLocalities.length === 0 && (
              <p className="text-xs text-slate-500 py-4">
                No matching locality found. Please call our technician directly to confirm coverage for your address.
              </p>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-blue-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 relative z-10">
            <p>
              * Indicative service localities shown. Availability for your specific apartment, colony, or gated community is confirmed upon booking.
            </p>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:underline shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Confirm Locality: {BUSINESS_DATA.phoneDisplay}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
