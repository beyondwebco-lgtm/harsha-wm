import { Home, Users, CheckCircle, Zap, Layers } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function TrustHighlights() {
  const highlightIcons = [
    Home,
    Users,
    CheckCircle,
    Zap,
    Layers
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {BUSINESS_DATA.highlights.map((item, index) => {
          const Icon = highlightIcons[index % highlightIcons.length];
          return (
            <div
              key={item.title}
              className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F5F9FD] text-[#082B59] group-hover:bg-[#082B59] group-hover:text-[#FFD600] flex items-center justify-center transition-colors mb-3.5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-[#082B59] tracking-tight group-hover:text-[#1267B2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-50 flex items-center justify-between text-[11px] font-semibold text-[#1267B2]">
                <span>Verified Quality</span>
                <span>✓</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
