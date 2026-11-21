import { Award, Home, CheckCircle2, Users, Wrench, Headphones } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function WhyChooseUs() {
  const iconList = [
    Award,
    Home,
    CheckCircle2,
    Users,
    Wrench,
    Headphones,
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#082B59] text-white relative overflow-hidden">
      {/* Subtle Glow & Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1267B2]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-[#FFD600] text-[#082B59] text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-md">
            Dependable Service
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Harsha Washing Machine Service Centre?
          </h2>
          <p className="mt-3.5 text-base text-blue-100 leading-relaxed font-normal">
            Dependable service principles developed through 8+ years of dedicated washing machine repair across Hyderabad.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_DATA.whyChooseUs.map((item, idx) => {
            const IconComponent = iconList[idx % iconList.length];
            return (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 hover:bg-white/15 hover:border-[#FFD600]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFD600] text-[#082B59] flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-white/30 tracking-tight">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFD600] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2.5 text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center text-xs text-[#FFD600] font-semibold">
                  <span>Hyderabad Verified Service</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
