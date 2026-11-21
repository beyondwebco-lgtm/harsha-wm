import { ExternalLink, MapPin, ShieldCheck, CheckCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Verified Local Presence
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Customer Trust & Google Business Profile
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Serving households across Hyderabad with dedicated doorstep washing machine repair and maintenance for over 8 years.
          </p>
        </div>

        {/* Clean Trust Card with Google Pin & Subtle Shine */}
        <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 sm:p-10 max-w-3xl shadow-md relative overflow-hidden group hover:border-blue-400 transition-all duration-300">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Google Verified Listing
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Harsha Washing Machine Service Centre
              </h3>
            </div>
          </div>
          
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Registered on Google Business Profile serving residential colonies, apartments, gated communities, and commercial areas throughout Hyderabad and Secunderabad.
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              8+ Years Experience
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Verified Local Address
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              Doorstep Service All Areas
            </span>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Click to view verified profile, location updates, and operational hours.
            </span>

            <a
              href={BUSINESS_DATA.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine-sweep inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
            >
              <span>View Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-300" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
