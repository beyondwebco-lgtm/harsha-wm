import { Check, ArrowUpRight } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Our Services
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Complete Washing Machine Repair & Maintenance
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Professional diagnostic, repair, and servicing support across Hyderabad for all major domestic washing machine models.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_DATA.services.map((service) => {
            const isFeatured = service.id === "general-service";
            const serviceWhatsAppUrl = buildWhatsAppLink(
              `Service Inquiry for ${service.title}`,
              undefined,
              service.type
            );

            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl p-6 flex flex-col justify-between transition-all duration-200 ${
                  isFeatured
                    ? "border-2 border-blue-600 shadow-md relative"
                    : "border border-slate-200 hover:border-blue-400 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded">
                      {service.type}
                    </span>
                    <span className="text-slate-500 font-medium">{service.badge}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-900 mb-2.5">
                      Common repairs:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Call: {BUSINESS_DATA.phoneDisplay}
                  </a>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
