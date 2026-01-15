import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import { FaRegClock, FaGlobeAfrica } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendInquiry = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setSent(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      (error) => {
        setLoading(false);
        alert("Submission failed. Please check your connection.");
        console.error("EmailJS Error:", error);
      }
    );
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="bg-[#1B4332] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Professional <span className="text-[#FFD600]">Consultation</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#FFD600] mx-auto mb-8"></div>
          <p className="text-green-50 text-lg md:text-xl font-light">
            At Abrada-Biotech, we design lifelong assets for your property.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE: INFO */}
        <div className="space-y-12">
          <h3 className="text-2xl font-black text-[#1B4332] uppercase">
            Contact Information
          </h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-green-50 p-4 rounded-2xl mr-4 text-[#1B4332]">
                <HiOutlineLocationMarker size={24} />
              </div>
              <div>
                <p className="font-black">Headquarters</p>
                <p className="text-gray-600">
                  20, Ogie Street, Benin City, Edo State.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-50 p-4 rounded-2xl mr-4 text-[#1B4332]">
                <HiOutlinePhone size={24} />
              </div>
              <div>
                <p className="font-black">Phone Lines</p>
                <p className="text-gray-600 font-bold">
                  08053311594 • 08135700782
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1B4332] p-8 rounded-3xl text-white relative overflow-hidden">
            <FaRegClock className="text-[#FFD600] mb-2" />
            <p className="text-xl font-bold">Mon — Sat: 8AM - 6PM</p>
            <p className="text-sm text-green-200 mt-2">
              Available for site visits nationwide
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="bg-white shadow-2xl rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
          {sent ? (
            <div className="text-center py-20">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl">
                <IoSendSharp />
              </div>
              <h3 className="text-2xl font-black text-[#1B4332]">
                Inquiry Logged
              </h3>
              <p className="text-gray-500 mt-2">
                Abraham Ada will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form ref={form} onSubmit={sendInquiry} className="space-y-5">
              <h3 className="text-2xl font-black mb-6 underline decoration-[#FFD600] decoration-4 underline-offset-8">
                Request Assessment
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#1B4332]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp Number"
                  required
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#1B4332]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#1B4332]"
              />

              {/* NEW LOCATION FIELD FOR CONTACT FORM */}
              <input
                type="text"
                name="location"
                placeholder="Project City & State (e.g. Lekki, Lagos)"
                required
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#1B4332]"
              />

              <select
                name="service_type"
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#1B4332] font-bold"
              >
                <option>Home Bio-Digester System</option>
                <option>Industrial/Hotel Waste Plant</option>
                <option>Generator Gas Conversion</option>
              </select>

              <textarea
                name="message"
                placeholder="Describe your project needs..."
                rows="4"
                required
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#1B4332]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-2xl font-black text-lg bg-[#1B4332] text-[#FFD600] hover:shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                {loading ? (
                  "PROCESSING..."
                ) : (
                  <>
                    REQUEST ASSESSMENT <IoSendSharp />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
