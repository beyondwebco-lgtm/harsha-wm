"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, ArrowRight, AlertCircle, Info, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

/**
 * Image Prompt Reference for Booking Form:
 * "Polite Indian technician in navy uniform with a professional toolbox standing at an apartment doorway, greeted by a welcoming homeowner, bright daylight, photorealistic."
 */

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    locality: "",
    brand: "Samsung",
    machineType: "Front Load",
    problem: "",
    visitDate: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const brandsList = [
    ...BUSINESS_DATA.brands.map((b) => b.name),
    "Other Brand"
  ];

  const machineTypes = [
    "Front Load",
    "Top Load",
    "Semi-Automatic",
    "Fully Automatic",
    "Not Sure"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    const cleanPhone = formData.phone.trim().replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.locality.trim()) {
      newErrors.locality = "Please enter your Hyderabad area / locality";
    }
    if (!formData.problem.trim()) {
      newErrors.problem = "Please describe the problem or service needed";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message
    let message = `*HARSHA WASHING MACHINE SERVICE BOOKING*\n`;
    message += `-----------------------------------------\n`;
    message += `Customer Name: ${formData.name.trim()}\n`;
    message += `Phone Number: ${cleanPhone}\n`;
    message += `Area / Locality: ${formData.locality.trim()}, Hyderabad\n`;
    message += `Brand: ${formData.brand}\n`;
    message += `Machine Type: ${formData.machineType}\n`;
    message += `Problem / Service: ${formData.problem.trim()}\n`;
    if (formData.visitDate) {
      message += `Preferred Date: ${formData.visitDate}\n`;
    }
    message += `-----------------------------------------\n`;
    message += `Please confirm technician visit and timing.`;

    const whatsappUrl = `https://wa.me/${BUSINESS_DATA.phoneRaw}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <section id="booking" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Schedule Appointment
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book Your Washing Machine Repair
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Enter your details below to generate an instant service inquiry for our technician on WhatsApp.
          </p>
        </div>

        {/* 2-Column Booking Layout: Form on Left + Side Image Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border-t-4 border-t-blue-600 border-x border-b border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  WhatsApp Inquiry Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  If WhatsApp did not open automatically, click the button below to send your details directly to Harsha Service Centre.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
                  >
                    <span>Open WhatsApp (+91 8465801935)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.name ? "border-red-500 animate-shake" : "border-slate-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210 (10 digits)"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.phone ? "border-red-500 animate-shake" : "border-slate-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Area / Locality in Hyderabad *
                  </label>
                  <input
                    type="text"
                    name="locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                    placeholder="e.g. Kukatpally, Miyapur, Gachibowli, Secunderabad"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.locality ? "border-red-500 animate-shake" : "border-slate-300"
                    }`}
                  />
                  {errors.locality && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.locality}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Brand *
                    </label>
                    <select
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {brandsList.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Machine Type *
                    </label>
                    <select
                      name="machineType"
                      value={formData.machineType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {machineTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Problem Description *
                  </label>
                  <textarea
                    name="problem"
                    rows={3}
                    value={formData.problem}
                    onChange={handleInputChange}
                    placeholder="e.g. Drum not spinning, making loud noise, or water leaking."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.problem ? "border-red-500 animate-shake" : "border-slate-300"
                    }`}
                  />
                  {errors.problem && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.problem}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Preferred Visit Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Info Note */}
                <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-blue-900">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    Submitting prepares a prefilled WhatsApp request to connect with Harsha Service Centre directly at <strong>+91 8465801935</strong>.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shine-sweep flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md cursor-pointer disabled:opacity-75"
                  >
                    <span>{isSubmitting ? "Connecting to WhatsApp..." : "Book via WhatsApp"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-blue-200 hover:border-blue-400 bg-blue-50/40 text-blue-800 font-bold py-3.5 px-5 rounded-xl text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Call {BUSINESS_DATA.phoneDisplay}</span>
                  </a>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: AI-Generated Arrival Side Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-100 shadow-xl bg-slate-100 aspect-[3/4] w-full">
              <Image
                src="/images/booking-arrival.png"
                alt="Harsha technician arriving with toolkit at an apartment in Hyderabad"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes("harsha-poster.jpg")) {
                    target.src = "/images/harsha-poster.jpg";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md inline-block shadow-xs">
                  Doorstep Assurance
                </span>
                <h4 className="text-base font-bold text-white">
                  Punctual Technician Arrival
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Equipped with diagnostic tools and common replacement parts for quick on-site resolution.
                </p>
              </div>
            </div>

            {/* Quick Trust Highlights under image */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4.5 space-y-2 text-xs text-slate-700 shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-slate-900">Visiting charge: ₹350</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-slate-900">General service: ₹600</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Available 8:00 AM – 9:00 PM throughout Hyderabad</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
