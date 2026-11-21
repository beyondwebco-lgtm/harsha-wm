import { MapPin } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ServiceAreasSection() {
  return (
    <section id="coverage" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Coverage Area
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Washing Machine Repair Services Across Hyderabad
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Reliable doorstep washing machine repair support throughout residential and commercial localities across Hyderabad.
          </p>
        </div>

        {/* Locality Chips Grid with subtle Blue Tint */}
        <div className="bg-blue-50/40 border border-blue-100 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap gap-2.5">
            {BUSINESS_DATA.localities.map((locality) => (
              <span
                key={locality}
                className="bg-white border border-slate-200/90 text-slate-800 hover:border-blue-400 hover:text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-default shadow-2xs"
              >
                <MapPin className="w-3 h-3 text-blue-600" />
                <span>{locality}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-blue-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
            <p>
              * Indicative service localities shown. Availability for your specific apartment, colony, or gated community is confirmed upon booking.
            </p>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="font-bold text-blue-600 hover:underline shrink-0"
            >
              Confirm Locality: {BUSINESS_DATA.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
