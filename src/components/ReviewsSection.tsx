import { ExternalLink } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Verified Business
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Customer Experiences & Google Profile
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Serving households across Hyderabad with dedicated doorstep washing machine repair and maintenance for over 8 years.
          </p>
        </div>

        {/* Clean Showcase Box */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-3xl">
          <h3 className="text-lg font-bold text-slate-900">
            Harsha Washing Machine Service Centre
          </h3>
          
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Registered on Google Business Profile serving residential colonies, apartments, and commercial areas throughout Hyderabad and Secunderabad.
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              8+ Years Experience · Doorstep Service All Areas
            </div>

            <a
              href={BUSINESS_DATA.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              <span>View Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
