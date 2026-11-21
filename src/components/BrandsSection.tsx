import { BUSINESS_DATA } from "@/data/business";

export default function BrandsSection() {
  const rowOneBrands = BUSINESS_DATA.brands.slice(0, 5);
  const rowTwoBrands = BUSINESS_DATA.brands.slice(5, 10);

  // Duplicate for seamless infinite marquee loop
  const marqueeRowOne = [...rowOneBrands, ...rowOneBrands, ...rowOneBrands, ...rowOneBrands];
  const marqueeRowTwo = [...rowTwoBrands, ...rowTwoBrands, ...rowTwoBrands, ...rowTwoBrands];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5">
          Supported Brands
        </p>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Multi-Brand Washing Machine Repair in Hyderabad
        </h2>
        <p className="mt-1.5 text-xs text-slate-600 max-w-lg mx-auto">
          Independent diagnostic and doorstep service support for all major domestic appliance models.
        </p>
      </div>

      {/* Infinite Slow Marquee: Row 1 (Leftward) */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="animate-marquee gap-3 flex">
          {marqueeRowOne.map((brand, idx) => (
            <div
              key={`row1-${idx}`}
              className="bg-white border border-slate-200 hover:border-blue-500 rounded-xl px-5 py-3 shadow-2xs hover:shadow-sm hover:-translate-y-1 transition-all duration-200 cursor-default shrink-0 flex items-center gap-2.5"
            >
              <span className="font-extrabold text-sm text-slate-900 tracking-wide">
                {brand.name}
              </span>
              <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Repair & Service
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Slow Marquee: Row 2 (Rightward) */}
      <div className="relative w-full overflow-hidden py-2 mt-1">
        <div className="animate-marquee-reverse gap-3 flex">
          {marqueeRowTwo.map((brand, idx) => (
            <div
              key={`row2-${idx}`}
              className="bg-white border border-slate-200 hover:border-blue-500 rounded-xl px-5 py-3 shadow-2xs hover:shadow-sm hover:-translate-y-1 transition-all duration-200 cursor-default shrink-0 flex items-center gap-2.5"
            >
              <span className="font-extrabold text-sm text-slate-900 tracking-wide">
                {brand.name}
              </span>
              <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Repair & Service
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Statutory Disclaimer */}
      <div className="max-w-3xl mx-auto px-4 mt-6 text-center">
        <p className="text-[11px] text-slate-500 italic leading-relaxed">
          * Independent multi-brand appliance repair service. Brand names and trademarks are used solely to identify supported appliances and do not imply direct affiliation or authorization.
        </p>
      </div>
    </section>
  );
}
