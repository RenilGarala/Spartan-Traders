"use client";
import React, { useState, useEffect } from "react";

interface ContactInfo {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact(): React.JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => setIsLoaded(true), []);

  const contactInfo: ContactInfo[] = [
    {
      icon: "✉️",
      title: "Email",
      desc: "Info@spartan-traders.com",
      color: "from-purple-600/20 to-purple-400/20 border-purple-500/30",
    },
    {
      icon: "📞",
      title: "Phone",
      desc: "(226) 919-6448",
      color: "from-green-600/20 to-green-400/20 border-green-500/30",
    },
    {
      icon: "📍",
      title: "Address",
      desc: "553 Springbank Avenue, Woodstock, Ontario, Canada",
      color: "from-blue-600/20 to-blue-400/20 border-blue-500/30",
    },
    {
      icon: "⏰",
      title: "Business Hours",
      desc: "Mon - Fri: 8:00 AM - 5:00 PM EST",
      color: "from-orange-600/20 to-orange-400/20 border-orange-500/30",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 space-y-12">
        {/* Hero */}
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-6">
            CONTACT SPARTAN TRADERS
          </h1>
          <div className="text-xl md:text-2xl font-light text-blue-200 mb-6">
            Steel Solutions Team
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your steel requirements? Get in touch with our
            experienced team for quotes, product information, or project
            consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className={`group bg-gradient-to-br ${item.color} backdrop-blur-sm p-5 rounded-xl border transition-all duration-300 hover:scale-105`}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`text-xl transition-all duration-300 ${
                        hoveredCard === i ? "scale-125 rotate-12" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-br from-slate-900/80 via-gray-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-lg group-hover:rotate-12 transition-transform duration-300">
                  ⚡
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors">
                  Quick Response Promise
                </h4>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                We understand that time is critical in industrial operations.
                That&apos;s why we&apos;ve built our service around rapid
                response and reliable delivery.
              </p>
              <div className="space-y-2 text-sm">
                {[
                  "Quote requests responded within 4 hours",
                  "Urgent inquiries handled immediately",
                  "Dedicated account managers available",
                  "Real-time project status updates",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900/60 via-gray-800/60 to-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Send Us a Message
              </h4>
              <p className="text-gray-300 text-sm md:text-base">
                Fill out the form below and we&apos;ll get back to you promptly
                with a detailed response and next steps.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@company.com"
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Brief description"
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please provide details..."
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-sm md:text-base h-28 resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 text-sm md:text-base bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-semibold"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>

        {/* Emergency */}
        <div className="bg-gradient-to-r from-red-950/80 via-red-900/80 to-red-950/80 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-4">
            <span className="text-2xl">🚨</span>
          </div>
          <h4 className="text-2xl font-bold mb-3">Emergency Contact</h4>
          <p className="text-red-100 text-base mb-6">
            For urgent orders or emergency requirements outside business hours,
            our dedicated team is available 24/7.
          </p>
          <a
            href="tel:(226)919-6448"
            className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-bold text-base"
          >
            📞 Emergency: (226) 919-6448
          </a>
        </div>
      </div>
    </div>
  );
}
