import { ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#082B59] text-[#FFD600] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Verified Reputation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            Customer Experiences & Local Presence
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Committed to honest service and technical excellence across Hyderabad households for over 8 years.
          </p>
        </div>

        {/* Authentic Google Profile Showcase Card */}
        <div className="max-w-3xl mx-auto bg-[#F5F9FD] rounded-2xl p-6 sm:p-10 border border-blue-200/90 shadow-md text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-[#082B59] text-[#FFD600] mx-auto flex items-center justify-center shadow-md mb-5">
            <Award className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#082B59]">
            Harsha Washing Machine Service Centre
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2 leading-relaxed">
            Registered on Google Business Profile serving Hyderabad and Secunderabad localities with professional doorstep washing machine repair and maintenance.
          </p>

          <div className="my-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#082B59]">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              8+ Years Serving Hyderabad
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              Doorstep Service All Areas
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              Multi-Brand Diagnostic Support
            </span>
          </div>

          {/* Direct CTA to Google Business Profile */}
          <div className="pt-2">
            <a
              href={BUSINESS_DATA.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#082B59] hover:bg-[#1267B2] text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all hover:shadow-lg"
            >
              <span>View Our Google Business Profile</span>
              <ExternalLink className="w-4 h-4 text-[#FFD600]" />
            </a>
          </div>

          <p className="text-[11px] text-gray-500 mt-4">
            Click above to view our verified Google profile, location updates, and service details.
          </p>

        </div>

      </div>
    </section>
  );
}
