"use client";

import { useState } from "react";
import { Phone, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

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
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
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

    // Format WhatsApp message
    let message = `*HARSHA WASHING MACHINE SERVICE BOOKING*\n`;
    message += `-----------------------------------------\n`;
    message += `👤 *Customer Name:* ${formData.name.trim()}\n`;
    message += `📞 *Phone Number:* ${formData.phone.trim()}\n`;
    message += `📍 *Area / Locality:* ${formData.locality.trim()}, Hyderabad\n`;
    message += `🏷️ *Brand:* ${formData.brand}\n`;
    message += `⚙️ *Machine Type:* ${formData.machineType}\n`;
    message += `🔧 *Problem / Service:* ${formData.problem.trim()}\n`;
    if (formData.visitDate) {
      message += `📅 *Preferred Date:* ${formData.visitDate}\n`;
    }
    message += `-----------------------------------------\n`;
    message += `Please confirm technician visit and timing.`;

    const whatsappUrl = `https://wa.me/${BUSINESS_DATA.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#082B59] text-[#FFD600] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Fast Doorstep Booking
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082B59] tracking-tight">
            Book Your Washing Machine Repair
          </h2>
          <p className="mt-3.5 text-base text-gray-600 leading-relaxed font-normal">
            Fill in your details below to instantly generate your service booking on WhatsApp. Our technician will coordinate directly with you.
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="bg-[#F5F9FD] rounded-2xl p-6 sm:p-10 border-2 border-[#082B59]/20 shadow-xl">
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#082B59] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1267B2] ${
                    errors.name ? "border-red-500" : "border-gray-200"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#082B59] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1267B2] ${
                    errors.phone ? "border-red-500" : "border-gray-200"
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

            {/* Row 2: Hyderabad Locality */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#082B59] mb-1.5">
                Area / Locality in Hyderabad *
              </label>
              <input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleInputChange}
                placeholder="e.g. Kukatpally / Miyapur / Gachibowli / Secunderabad"
                className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1267B2] ${
                  errors.locality ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.locality && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.locality}</span>
                </p>
              )}
            </div>

            {/* Row 3: Brand & Machine Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#082B59] mb-1.5">
                  Washing Machine Brand *
                </label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1267B2]"
                >
                  {brandsList.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#082B59] mb-1.5">
                  Machine Type *
                </label>
                <select
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1267B2]"
                >
                  {machineTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Problem Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#082B59] mb-1.5">
                Problem / Service Required *
              </label>
              <textarea
                name="problem"
                rows={3}
                value={formData.problem}
                onChange={handleInputChange}
                placeholder="e.g. Drum not spinning, making loud grinding noise during spin cycle, or water leaking from front."
                className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1267B2] ${
                  errors.problem ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.problem && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.problem}</span>
                </p>
              )}
            </div>

            {/* Row 5: Preferred Visit Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#082B59] mb-1.5">
                Preferred Visit Date (Optional)
              </label>
              <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1267B2]"
              />
            </div>

            {/* Notice Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <p>
                Clicking &quot;Book via WhatsApp&quot; will open WhatsApp with your prefilled details to send directly to Harsha Washing Machine Service Centre at <strong>+91 8465801935</strong>. Our technician will confirm the visit with you.
              </p>
            </div>

            {/* Submit & Call Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white font-extrabold py-4 px-6 rounded-xl text-base shadow-lg hover:shadow-green-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book via WhatsApp (+91 8465801935)</span>
              </button>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#E52332] hover:bg-[#c91826] text-white font-bold py-4 px-6 rounded-xl text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call</span>
              </a>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
