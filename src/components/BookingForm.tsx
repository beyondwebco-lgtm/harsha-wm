"use client";

import { useState } from "react";
import { Phone, ArrowRight, AlertCircle, Info } from "lucide-react";
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
    let message = `HARSHA WASHING MACHINE SERVICE BOOKING\n`;
    message += `-----------------------------------------\n`;
    message += `Customer Name: ${formData.name.trim()}\n`;
    message += `Phone Number: ${formData.phone.trim()}\n`;
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
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Schedule Appointment
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Book Your Washing Machine Repair
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Enter your details below to generate an instant service inquiry for our technician on WhatsApp.
          </p>
        </div>

        {/* Form Container with Blue Accent Border */}
        <div className="bg-white border-t-4 border-t-blue-600 border-x border-b border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
          <form onSubmit={handleFormSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
                    errors.name ? "border-red-500" : "border-slate-300"
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
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
                    errors.phone ? "border-red-500" : "border-slate-300"
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
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Area / Locality in Hyderabad *
              </label>
              <input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleInputChange}
                placeholder="e.g. Kukatpally, Miyapur, Gachibowli, Secunderabad"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
                  errors.locality ? "border-red-500" : "border-slate-300"
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
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Brand *
                </label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                >
                  {brandsList.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Machine Type *
                </label>
                <select
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
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
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Problem Description *
              </label>
              <textarea
                name="problem"
                rows={3}
                value={formData.problem}
                onChange={handleInputChange}
                placeholder="e.g. Drum not spinning, making loud grinding noise during spin cycle, or water leaking from front."
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
                  errors.problem ? "border-red-500" : "border-slate-300"
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
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Preferred Visit Date (Optional)
              </label>
              <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            {/* Blue Guidance Note */}
            <div className="bg-blue-50 border border-blue-200/90 rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-blue-900">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p>
                Submitting opens WhatsApp with your prefilled details to coordinate directly with our technician at <strong>+91 8465801935</strong>.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>Book via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border border-blue-200 hover:border-blue-400 bg-blue-50/40 text-blue-800 font-semibold py-3.5 px-5 rounded-lg text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {BUSINESS_DATA.phoneDisplay}</span>
              </a>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
