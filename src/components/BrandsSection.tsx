import { BUSINESS_DATA } from "@/data/business";

export default function BrandsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#082B59] text-[#FFD600] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Multi-Brand Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            Multi-Brand Washing Machine Repair in Hyderabad
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Skilled doorstep diagnosis and servicing for all major washing machine brands and models across Hyderabad.
          </p>
        </div>

        {/* Brands Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {BUSINESS_DATA.brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-[#F5F9FD] rounded-xl p-5 sm:p-6 border border-gray-200/80 hover:border-[#1267B2] hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-gray-100">
                <span className="font-black text-sm tracking-tighter" style={{ color: brand.color }}>
                  {brand.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-extrabold text-sm sm:text-base text-[#082B59] group-hover:text-[#1267B2] tracking-wide">
                {brand.name}
              </span>
              <span className="text-[11px] text-gray-500 font-medium mt-1">
                Repair & Service
              </span>
            </div>
          ))}
        </div>

        {/* Brand Disclaimer */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 italic">
            * Independent multi-brand appliance repair service. Brand names and trademarks are used solely to identify supported appliances and do not imply direct affiliation or authorization.
          </p>
        </div>

      </div>
    </section>
  );
}
