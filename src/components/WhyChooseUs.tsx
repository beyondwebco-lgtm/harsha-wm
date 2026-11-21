import { BUSINESS_DATA } from "@/data/business";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Why Harsha Service
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Why Choose Harsha Washing Machine Service Centre?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Service principles built through 8+ years of dedicated washing machine repair and maintenance across Hyderabad.
          </p>
        </div>

        {/* 6 Editorial Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_DATA.whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="border-t border-slate-200 pt-5 space-y-2"
            >
              <div className="text-xs font-mono font-semibold text-blue-600">
                {item.number}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
