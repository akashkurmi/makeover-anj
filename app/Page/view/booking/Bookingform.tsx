"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { X, CheckCircle2, AlertCircle, MessageCircle, Instagram, MapPin, Mail, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BForm {
  name: string;
  email: string;
  phn: string;
  eventDate: string;
  service: string;
  message: string;
  state: string;
  city: string;
}

export default function Bookingform() {
  const [formData, setFormData] = useState<BForm>({
    name: "",
    email: "",
    phn: "",
    eventDate: "",
    service: "Bridal Makeup",
    message: "",
    state: "",
    city: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const indianStates = [
    "Karnataka",
    "Madhya Pradesh",
    "Maharashtra",
    "Delhi",
    "Tamil Nadu",
    "Telangana",
    "Rajasthan",
    "Goa",
    "Uttar Pradesh",
    "Gujarat",
    "Kerala",
    "West Bengal",
    "Punjab",
    "Haryana",
    "Andhra Pradesh",
    "Bihar",
    "Chhattisgarh",
    "Himachal Pradesh",
    "Jharkhand",
    "Odisha",
    "Uttarakhand",
    "Other State / Union Territory",
  ];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = "service_4lw6zpo";
    const TEMPLATE_ID = "template_1f2gy3u";
    const PUBLIC_KEY = "GjHgChLx-VpS2dt3e";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, { ...formData }, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setShowModal(true);
      })
      .catch((err) => {
        console.error("Submission Error:", err);
        setStatus("error");
        setShowModal(true);
      });
  };

  const closeModal = () => {
    setShowModal(false);
    if (status === "success") {
      setFormData({
        name: "",
        email: "",
        phn: "",
        eventDate: "",
        service: "Bridal Makeup",
        message: "",
        state: "",
        city: "",
      });
      formRef.current?.reset();
    }
    setStatus("idle");
  };

  return (
    <div className="max-w-7xl mx-auto max-w-full">
      {/* SUCCESS / ERROR LUXURY MODAL (Mobile-Optimized) */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#120F0C]/85 backdrop-blur-md">
          <div className="bg-[#1E1813] border border-[#C4A16A]/50 p-6 sm:p-10 max-w-md w-full relative animate-in fade-in zoom-in duration-200 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors touch-target"
              aria-label="Close dialog"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <div className="text-center space-y-4 pt-2">
              {status === "success" ? (
                <>
                  <div className="flex justify-center text-[#C4A16A]">
                    <CheckCircle2 size={42} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#F2EDE5] text-2xl sm:text-3xl font-serif italic">
                    Thank You, {formData.name || "Client"}
                  </h3>
                  <p className="text-[#A69C91] text-xs font-sans leading-relaxed tracking-wider font-light">
                    Your appointment request has been received. Our studio will review your date availability and contact you shortly with bespoke details.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-center text-[#D4B47F]">
                    <AlertCircle size={42} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#F2EDE5] text-2xl sm:text-3xl font-serif italic">
                    Connection Error
                  </h3>
                  <p className="text-[#A69C91] text-xs font-sans leading-relaxed tracking-wider font-light">
                    Something went wrong sending your request. Please tap WhatsApp below for instant confirmation.
                  </p>
                </>
              )}

              <div className="pt-2">
                <button
                  onClick={closeModal}
                  className="w-full min-h-[48px] bg-[#C4A16A] text-[#120F0C] py-3.5 uppercase font-medium tracking-[0.25em] text-xs hover:bg-[#D4B47F] active:bg-[#D4B47F] transition-colors touch-target"
                >
                  Close Confirmation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE-FIRST STACKED TO TWO-COLUMN LAYOUT */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* TOP ON MOBILE / LEFT ON DESKTOP: STUDIO CONTACT & BADGES */}
        <div className="w-full lg:col-span-5 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
              <p className="text-[9.5px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A] font-sans">
                YOUR BEAUTY APPOINTMENT
              </p>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-6xl font-serif font-light text-[#F2EDE5] leading-[1.08] tracking-tight">
              Let's create <br />
              something <span className="italic font-normal text-[#C4A16A]">beautiful.</span>
            </h2>
          </div>

          <div className="w-12 sm:w-16 h-px bg-[#C4A16A]/60" />

          <p className="text-xs sm:text-sm lg:text-base text-[#A69C91] font-sans font-light leading-relaxed">
            Reserve your wedding date or special occasion look. We recommend booking 2 to 6 months in advance for peak wedding seasons to ensure private scheduling.
          </p>

          {/* CONTACT LIST */}
          <div className="space-y-3 sm:space-y-4 pt-1">
            <div className="flex items-start space-x-3 text-xs text-[#A69C91]">
              <MapPin size={16} className="text-[#C4A16A] shrink-0 mt-0.5" />
              <span>Bangalore, Karnataka • Pan-India Destination Weddings</span>
            </div>

            <div className="flex items-center space-x-3 text-xs text-[#A69C91]">
              <Phone size={16} className="text-[#C4A16A] shrink-0" />
              <Link href="tel:+917879458655" className="hover:text-[#F2EDE5] active:text-[#C4A16A] transition-colors py-1">
                +91 78794 58655
              </Link>
            </div>

            <div className="flex items-center space-x-3 text-xs text-[#A69C91]">
              <Mail size={16} className="text-[#C4A16A] shrink-0" />
              <Link href="mailto:anjaligour761@gmail.com" className="hover:text-[#F2EDE5] active:text-[#C4A16A] transition-colors py-1 truncate">
                anjaligour761@gmail.com
              </Link>
            </div>
          </div>

          {/* MOBILE QUICK ACTION BUTTONS */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <Link
              href="https://wa.me/917879458655"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] flex items-center justify-center space-x-2 px-4 py-3 bg-[#1B1510] border border-[#3D342B] hover:border-[#C4A16A] active:bg-[#C4A16A]/10 text-[#F2EDE5] text-xs uppercase tracking-[0.2em] font-sans transition-all touch-target"
            >
              <MessageCircle size={15} className="text-[#C4A16A]" />
              <span>WhatsApp</span>
            </Link>

            <Link
              href="https://www.instagram.com/anjalimakeover7879/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] flex items-center justify-center space-x-2 px-4 py-3 bg-[#1B1510] border border-[#3D342B] hover:border-[#C4A16A] active:bg-[#C4A16A]/10 text-[#F2EDE5] text-xs uppercase tracking-[0.2em] font-sans transition-all touch-target"
            >
              <Instagram size={15} className="text-[#C4A16A]" />
              <span>Instagram</span>
            </Link>
          </div>

          {/* LAKME BADGE */}
          <div className="pt-2 border-t border-[#3D342B]/60 flex items-center space-x-3.5">
            <div className="relative w-12 h-12 shrink-0 bg-white/5 p-1 rounded-sm border border-[#3D342B]/40">
              <Image
                src="/lakmeAcd.png"
                alt="Lakmé Academy Certified"
                fill
                className="object-contain p-0.5 opacity-80"
              />
            </div>
            <div>
              <p className="text-[9.5px] uppercase tracking-[0.25em] text-[#C4A16A] font-medium">
                Certified Professional
              </p>
              <p className="text-[11px] text-[#A69C91] font-light">
                Lakmé Academy Advanced Pro Bridal Mastery
              </p>
            </div>
          </div>
        </div>

        {/* FORM CONTAINER: Full width on mobile, 48px touch inputs */}
        <div className="w-full lg:col-span-7 bg-[#1E1813] border border-[#3D342B] p-5 sm:p-8 lg:p-12 shadow-2xl relative">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-serif italic text-[#F2EDE5] tracking-wide">
              Request Your Consultation
            </h3>
            <p className="text-[11px] sm:text-xs font-sans text-[#A69C91] tracking-wider mt-1 font-light">
              Please share your event date, location, and preferred service.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Radhika Roy"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full min-h-[48px] bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] placeholder-[#6E6459] focus:outline-none focus:border-[#C4A16A] transition-colors rounded-none"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phn"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phn}
                  onChange={handleChange}
                  className="w-full min-h-[48px] bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] placeholder-[#6E6459] focus:outline-none focus:border-[#C4A16A] transition-colors rounded-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full min-h-[48px] bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] placeholder-[#6E6459] focus:outline-none focus:border-[#C4A16A] transition-colors rounded-none"
                />
              </div>

              {/* Event Date */}
              <div className="space-y-1.5">
                <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full min-h-[48px] bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] focus:outline-none focus:border-[#C4A16A] transition-colors rounded-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* State */}
              <div className="space-y-1.5">
                <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                  State / Region *
                </label>
                <select
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full min-h-[48px] bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] focus:outline-none focus:border-[#C4A16A] transition-colors cursor-pointer rounded-none"
                >
                  <option value="" disabled>Select State</option>
                  {indianStates.map((st) => (
                    <option key={st} value={st} className="bg-[#120F0C] text-[#F2EDE5]">
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                  City / Venue Location *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. Bangalore, Indiranagar"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full min-h-[48px] bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] placeholder-[#6E6459] focus:outline-none focus:border-[#C4A16A] transition-colors rounded-none"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-1.5">
              <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                Desired Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full min-h-[48px] bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] focus:outline-none focus:border-[#C4A16A] transition-colors cursor-pointer rounded-none"
              >
                <option value="Bridal Makeup" className="bg-[#120F0C]">HD & Airbrush Bridal Couture</option>
                <option value="Reception / Sangeet Glamour" className="bg-[#120F0C]">Reception & Sangeet Glamour</option>
                <option value="Pre-Wedding Shoot Makeup" className="bg-[#120F0C]">Pre-Wedding Editorial Shoot</option>
                <option value="Party & Evening Look" className="bg-[#120F0C]">Party & Event Makeover</option>
                <option value="Haute Hair Sculpting" className="bg-[#120F0C]">Haute Bridal Hair Styling Only</option>
                <option value="Destination Bridal Package" className="bg-[#120F0C]">Destination Wedding Full Itinerary</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[#A69C91] text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] block">
                Additional Notes / Occasion Details
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Event timing, attire color, venue details..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#120F0C] border border-[#3D342B] px-4 py-3 text-base text-[#F2EDE5] placeholder-[#6E6459] focus:outline-none focus:border-[#C4A16A] transition-colors resize-none rounded-none"
              />
            </div>

            {/* FULL-WIDTH TOUCH SUBMIT BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full min-h-[50px] py-4 bg-[#C4A16A] hover:bg-[#D4B47F] active:bg-[#D4B47F] text-[#120F0C] font-sans font-medium text-xs uppercase tracking-[0.3em] transition-all duration-300 shadow-xl disabled:bg-[#3D342B] disabled:text-[#A69C91] disabled:cursor-not-allowed active:scale-[0.99] touch-target"
              >
                {status === "sending" ? "TRANSMITTING ENQUIRY..." : "SEND ENQUIRY →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
