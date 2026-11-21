import { Phone, MessageCircle, MapPin, CheckCircle2, Wrench, Award } from "lucide-react";
import { BUSINESS_DATA, buildWhatsAppLink } from "@/data/business";

export default function HeroSection() {
  const whatsappHeroUrl = buildWhatsAppLink("General Doorstep Washing Machine Repair Inquiry");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#082B59] via-[#0B3770] to-[#082B59] text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD600_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#1267B2]/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#FFD600] text-[#082B59] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold shadow-md uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#082B59]" />
              <span>{BUSINESS_DATA.experienceYears} Years of Washing Machine Repair Experience</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-extrabold leading-[1.15] tracking-tight">
              Expert Washing Machine Repair & Service in{" "}
              <span className="text-[#FFD600] underline decoration-[#FFD600]/40 decoration-wavy underline-offset-8">
                Hyderabad
              </span>
            </h1>

            {/* Tagline & Supporting Paragraph */}
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Professional doorstep washing machine repair and maintenance for front-load, top-load, semi-automatic, and fully automatic washing machines. Get reliable service from experienced technicians across Hyderabad.
            </p>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 max-w-lg mx-auto lg:mx-0 text-left text-xs sm:text-sm text-blue-100">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#FFD600] shrink-0" />
                <span>Doorstep Service in All Areas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#FFD600] shrink-0" />
                <span>Visiting Charge Just ₹350</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#FFD600] shrink-0" />
                <span>General Service Just ₹600</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#FFD600] shrink-0" />
                <span>All Major Brands Supported</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-[#E52332] hover:bg-[#c91826] text-white font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Now — {BUSINESS_DATA.phoneDisplay}</span>
              </a>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FFD600]">8+ Years</p>
                <p className="text-xs text-blue-200 uppercase tracking-wide mt-0.5">Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">All Major</p>
                <p className="text-xs text-blue-200 uppercase tracking-wide mt-0.5">Brands Serviced</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FFD600]">Doorstep</p>
                <p className="text-xs text-blue-200 uppercase tracking-wide mt-0.5">Quick Service</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">Hyderabad</p>
                <p className="text-xs text-blue-200 uppercase tracking-wide mt-0.5">Wide Coverage</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card */}
              <div className="bg-white text-[#172B4D] rounded-2xl p-6 sm:p-7 shadow-2xl border-4 border-white/20 relative">
                
                {/* Header of Card */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#082B59] flex items-center justify-center text-[#FFD600]">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#082B59] text-base leading-tight">
                        Harsha Service Support
                      </h3>
                      <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#E52332]" />
                        Hyderabad All Areas Covered
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Technicians Active
                  </span>
                </div>

                {/* Rates Highlight Box from Poster */}
                <div className="my-5 grid grid-cols-2 gap-3">
                  <div className="bg-[#F5F9FD] border-2 border-[#1267B2]/30 rounded-xl p-3.5 text-center relative overflow-hidden group hover:border-[#1267B2] transition-colors">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                      General Service
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#082B59] block mt-1">
                      ₹600<span className="text-sm font-semibold text-gray-500">/-</span>
                    </span>
                    <span className="text-[10px] text-gray-600 font-medium block mt-1">
                      Complete Inspection & Clean
                    </span>
                  </div>

                  <div className="bg-[#FFFDF0] border-2 border-[#FFD600] rounded-xl p-3.5 text-center relative overflow-hidden">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 block">
                      Visiting Charges
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#082B59] block mt-1">
                      ₹350<span className="text-sm font-semibold text-gray-500">/-</span>
                    </span>
                    <span className="text-[10px] text-gray-600 font-medium block mt-1">
                      Doorstep Diagnosis
                    </span>
                  </div>
                </div>

                {/* Services Scope List */}
                <div className="space-y-2.5 bg-gray-50 rounded-xl p-4 border border-gray-100 text-xs sm:text-sm">
                  <p className="font-bold text-[#082B59] text-xs uppercase tracking-wider mb-2">
                    Appliance Coverage:
                  </p>
                  <div className="flex items-center justify-between text-gray-700 py-1 border-b border-gray-200/60">
                    <span className="font-medium">Front Load & Top Load</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">Available</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700 py-1 border-b border-gray-200/60">
                    <span className="font-medium">Semi-Automatic & Fully Automatic</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">Available</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700 py-1">
                    <span className="font-medium">Spin Motor & Drain Motor Repair</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">Available</span>
                  </div>
                </div>

                {/* Quick Call Out Button in Card */}
                <div className="mt-5">
                  <a
                    href="#booking"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#082B59] hover:bg-[#1267B2] text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md"
                  >
                    <span>Instant Doorstep Booking Form</span>
                    <span className="text-xs text-[#FFD600]">→</span>
                  </a>
                </div>

                {/* Subtext */}
                <p className="text-[11px] text-center text-gray-500 mt-3 font-medium">
                  Direct technician contact • Genuine parts • Transparent pricing
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
