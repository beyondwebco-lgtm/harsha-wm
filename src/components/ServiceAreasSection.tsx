import { MapPin, Phone, Navigation } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ServiceAreasSection() {
  return (
    <section id="coverage" className="py-16 sm:py-24 bg-[#F5F9FD] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#082B59] text-[#FFD600] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Hyderabad City-Wide Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            Washing Machine Repair Services Across Hyderabad
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Reliable doorstep washing machine repair support throughout Hyderabad. Whether you reside in high-rise gated communities, residential colonies, or independent houses, we are just a call away.
          </p>
        </div>

        {/* Coverage Cards & Locality Chips */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#082B59] text-[#FFD600] flex items-center justify-center shrink-0">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#082B59]">
                  Hyderabad & Secunderabad Localities
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Doorstep technician visit available across all major zones
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#082B59] text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100">
                <MapPin className="w-3.5 h-3.5 text-[#E52332]" />
                All Areas Covered
              </span>
            </div>
          </div>

          {/* Chips Grid */}
          <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
            {BUSINESS_DATA.localities.map((locality) => (
              <span
                key={locality}
                className="inline-flex items-center gap-1.5 bg-[#F5F9FD] text-[#082B59] hover:bg-[#082B59] hover:text-[#FFD600] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border border-gray-200/80 transition-colors cursor-default"
              >
                <MapPin className="w-3 h-3 text-[#1267B2]" />
                <span>{locality}</span>
              </span>
            ))}
          </div>

          {/* Locality Note */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              * Indicative service localities shown. Technician appointment availability for your specific colony or gated community is confirmed upon booking.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="font-bold text-[#E52332] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Check Availability: 8465801935</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
