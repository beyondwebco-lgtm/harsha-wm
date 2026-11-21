"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowUpRight, Phone } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

/**
 * Image Prompt References for Services:
 * 1. front-load-repair.png: "Close-up shot of technician inspecting the rubber door gasket and drum of a modern front-load washing machine, photorealistic, unbranded."
 * 2. top-load-repair.png: "Technician inspecting the pulsator and drum inside a top-load washing machine in a well-lit utility area, photorealistic."
 * 3. semi-automatic-repair.png: "Twin tub semi-automatic washing machine on a bright balcony/utility area, technician checking the spin tub motor with a tool."
 * 4. fully-automatic-repair.png: "Technician inspecting the electronic digital control panel of a modern washing machine, clean modern apartment."
 * 5. general-service.png: "Close-up of technician cleaning the lint filter and descaling the sparkling clean stainless steel drum, with fresh water droplets."
 * 6. motor-drain-parts.png: "Neat flat-lay of clean washing machine spare parts (spin motor, drain pump, belt, capacitor, inlet solenoid valve) arranged on a workbench with professional tools."
 */

const serviceImageMap: Record<string, string> = {
  "front-load": "/images/front-load-repair.png",
  "top-load": "/images/top-load-repair.png",
  "semi-automatic": "/images/semi-automatic-repair.png",
  "fully-automatic": "/images/fully-automatic-repair.png",
  "general-service": "/images/general-service.png",
  "motor-drainage": "/images/motor-drain-parts.png",
};

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "front-load", label: "Front Load" },
    { id: "top-load", label: "Top Load" },
    { id: "semi-automatic", label: "Semi-Automatic" },
    { id: "general-service", label: "General Service (₹600)" },
    { id: "motor-drainage", label: "Motor & Parts" },
  ];

  const filteredServices =
    activeFilter === "all"
      ? BUSINESS_DATA.services
      : BUSINESS_DATA.services.filter((s) => s.id === activeFilter);

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Complete Appliance Care
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Washing Machine Repair & Maintenance Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Professional diagnostic, repair, and servicing support across Hyderabad for all major domestic washing machine models.
          </p>
        </div>

        {/* Desktop Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => {
            const isFeatured = service.id === "general-service";
            const imageUrl = serviceImageMap[service.id] || "/images/harsha-poster.jpg";
            const serviceWhatsAppUrl = buildWhatsAppLink(
              `Service Inquiry for ${service.title}`,
              undefined,
              service.type
            );

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col justify-between ${
                  isFeatured
                    ? "border-2 border-blue-600 ring-2 ring-blue-600/10"
                    : "border-slate-200 hover:border-blue-400"
                }`}
              >
                <div>
                  {/* Card Image Header with Zoom & Gradient Overlay */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={`Technician repairing ${service.title} in Hyderabad`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                      sizes="(max-width: 768px) 100vw, 360px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes("harsha-poster.jpg")) {
                          target.src = "/images/harsha-poster.jpg";
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    
                    {/* Badge Chips sliding up on image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                        {service.type}
                      </span>
                      <span className="bg-blue-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 mb-2.5 uppercase tracking-wide">
                        Common Repairs:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {service.issues.map((issue, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Call: {BUSINESS_DATA.phoneDisplay}</span>
                  </a>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine-sweep inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 transition-colors"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
