"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { X, CheckCircle2, AlertCircle } from "lucide-react"; // Optional: for icons

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

const Bookingform = () => {
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

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        setShowModal(true); // Open Popup
        // We don't clear name yet so we can use it in the popup
      })
      .catch((err) => {
        console.error("Submission Error:", err);
        setStatus("error");
        setShowModal(true); // Open Popup
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
    <div className="max-w-3xl mx-auto relative">
      {/* SUCCESS/ERROR MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-zinc-800 p-8 max-w-sm w-full relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="text-center space-y-4">
              {status === "success" ? (
                <>
                  <div className="flex justify-center text-pink-500">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-white text-2xl font-serif italic">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Your request has been submitted. We will reach out to you
                    soon.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-center text-red-500">
                    <AlertCircle size={48} />
                  </div>
                  <h3 className="text-white text-2xl font-serif italic">
                    Oops!
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Something went wrong. Please try again after some time or
                    contact us directly.
                  </p>
                </>
              )}

              <button
                onClick={closeModal}
                className="w-full bg-white text-black py-3 uppercase font-bold tracking-widest text-[10px] hover:bg-pink-500 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-serif italic mb-4">
          Reserve Your Date
        </h2>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
          Book your look
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* ... (Your existing input fields remain exactly the same) ... */}
        <div className="flex flex-col space-y-2">
          <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
            Full Name
          </label>
          <input
            onChange={handleChange}
            value={formData.name}
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
            Email Address
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
            Phone Number
          </label>
          <input
            onChange={handleChange}
            value={formData.phn}
            type="tel"
            name="phn"
            required
            placeholder="+91 00000 00000"
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="eventDate"
            className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1"
          >
            Event Date
          </label>
          <input
            onChange={handleChange}
            value={formData.eventDate}
            type="date"
            name="eventDate"
            required
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors appearance-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="state"
            className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1"
          >
            State
          </label>
          <select
            id="state"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors appearance-none"
          >
            <option value="" disabled>
              Select State
            </option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="city"
            className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1"
          >
            City
          </label>
          <input
            id="city"
            type="text"
            name="city"
            required
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        <div className="flex flex-col space-y-2 md:col-span-2">
          <label
            htmlFor="serviceType"
            className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1"
          >
            Service Required
          </label>
          <select
            id="serviceType"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
          >
            <option>Bridal Makeup</option>
            <option>Party/Event Look</option>
            <option>Editorial/Fashion</option>
            <option>Makeup Masterclass</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2 md:col-span-2">
          <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
            Additional Details
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us more about your event..."
            className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>

        <div className="md:col-span-2 pt-6">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-white text-black py-4 uppercase font-bold tracking-[0.4em] text-xs hover:bg-pink-500 hover:text-white transition-all duration-500 disabled:bg-zinc-800 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Processing..." : "Send Booking Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bookingform;
