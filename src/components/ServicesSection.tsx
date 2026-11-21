import { Phone, MessageCircle, Check, Sparkles } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F5F9FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-[#082B59] text-[#FFD600] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Multi-Brand Doorstep Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            Complete Washing Machine Repair & Maintenance Services
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Professional repair, diagnostic, and servicing support for front-load, top-load, and semi-automatic washing machines across all of Hyderabad.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BUSINESS_DATA.services.map((service) => {
            const serviceWhatsAppUrl = buildWhatsAppLink(
              `Inquiry for ${service.title}`,
              undefined,
              service.type
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200/80 hover:shadow-xl hover:border-[#1267B2]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Badge & Type Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wide bg-blue-50 text-[#082B59] px-2.5 py-1 rounded-md border border-blue-100">
                      {service.type}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#082B59] group-hover:text-[#1267B2] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Common Repairs List */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#082B59] mb-3">
                      Common Repairs Handled:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-[13px] text-gray-700">
                      {service.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 bg-[#E52332] hover:bg-[#c91826] text-white text-xs font-bold py-2.5 px-3 rounded-lg shadow-sm transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold py-2.5 px-3 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help Banner under Services */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#082B59] text-[#FFD600] flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#082B59]">
                Need immediate inspection for your washing machine?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Visiting charges ₹350 • General servicing ₹600 • Direct coordination across Hyderabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#E52332] hover:bg-[#c91826] text-white font-bold px-5 py-3 rounded-xl text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call 8465801935</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
