import { BUSINESS_DATA } from "@/data/business";

export default function BrandsSection() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Supported Appliances
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Multi-Brand Washing Machine Repair in Hyderabad
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Independent repair and maintenance support for popular domestic washing machine brands.
          </p>
        </div>

        {/* Minimal Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {BUSINESS_DATA.brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-slate-300 transition-colors"
            >
              <span className="font-semibold text-sm text-slate-800 tracking-wide block">
                {brand.name}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Repair & Service
              </span>
            </div>
          ))}
        </div>

        {/* Subtle Disclaimer */}
        <p className="text-[11px] text-slate-500 text-center mt-6 italic max-w-xl mx-auto">
          * Independent multi-brand appliance repair service. Brand names and trademarks are used solely to identify supported appliances and do not imply direct affiliation or authorization.
        </p>

      </div>
    </section>
  );
}
