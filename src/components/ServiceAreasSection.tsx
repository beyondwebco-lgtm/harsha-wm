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

        {/* Locality Chips Grid */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {BUSINESS_DATA.localities.map((locality) => (
              <span
                key={locality}
                className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-xs font-medium cursor-default"
              >
                {locality}
              </span>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              * Indicative service localities shown. Availability for your specific apartment, colony, or gated community is confirmed upon booking.
            </p>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="font-medium text-slate-900 hover:text-blue-600 shrink-0"
            >
              Confirm Locality: {BUSINESS_DATA.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
