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
    <section className="bg-slate-50 border-b border-slate-200/80 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {BUSINESS_DATA.highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            return (
              <div key={item.title} className="space-y-2">
                <div className="w-8 h-8 rounded-md bg-white border border-slate-200 text-slate-700 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
