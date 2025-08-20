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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contactInfo: ContactInfo[] = [
    { 
      icon: "✉️", 
      title: "Email", 
      desc: "Info@spartan-traders.com",
      color: "from-purple-600/20 to-purple-400/20 border-purple-500/30"
    },
    { 
      icon: "📞", 
      title: "Phone", 
      desc: "(226) 919-6448",
      color: "from-green-600/20 to-green-400/20 border-green-500/30"
    },
    {
      icon: "📍",
      title: "Address",
      desc: "553 Springbank Avenue, Woodstock, N4T1H3, Ontario, Canada",
      color: "from-blue-600/20 to-blue-400/20 border-blue-500/30"
    },
    {
      icon: "⏰",
      title: "Business Hours",
      desc: "Monday - Friday: 8:00 AM - 5:00 PM EST",
      color: "from-orange-600/20 to-orange-400/20 border-orange-500/30"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-8 animate-pulse"
            style={{
              width: `${3 * 4 + 1}px`,
              height: `${3 * 4 + 1}px`,
              left: `${3 * 100}%`,
              top: `${3 * 100}%`,
              animationDelay: `${3 * 5}s`,
              animationDuration: `${3 * 4 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">
        
        {/* Hero Section */}
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-8">
            CONTACT SPARTAN TRADERS
          </h1>
          <div className="text-2xl md:text-3xl font-light text-blue-200 mb-8">
            Steel Solutions Team
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your steel requirements? Get in touch with our experienced team 
            for quotes, product information, or project consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information Side */}
          <div className="space-y-8">
            
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item: ContactInfo, i: number) => (
                <div
                  key={i}
                  className={`group bg-gradient-to-br ${item.color} backdrop-blur-sm p-6 rounded-2xl border hover:border-opacity-80 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-2xl transition-all duration-300 ${hoveredCard === i ? 'scale-125 rotate-12' : ''}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-white group-hover:text-blue-100 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-slate-900/80 via-gray-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-xl group-hover:rotate-12 transition-transform duration-300">
                  ⚡
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors">
                  Quick Response Promise
                </h4>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We understand that time is critical in industrial operations. 
                That's why we've built our service around rapid response and reliable delivery.
              </p>
              
              <div className="space-y-3">
                {[
                  "Quote requests responded within 4 hours",
                  "Urgent inquiries handled immediately", 
                  "Dedicated account managers available",
                  "Real-time project status updates"
                ].map((item: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 group/item">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover/item:scale-150 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-gradient-to-br from-slate-900/60 via-gray-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500">
            <div className="mb-8">
              <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Send Us a Message
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Fill out the form below and we'll get back to you promptly with a detailed response 
                and next steps for your steel requirements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:bg-white/10"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:bg-white/10"
                  />
                </div>
              </div>

              <div className="group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your inquiry"
                  className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:bg-white/10"
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please provide details about your requirements, including quantities, specifications, timeline, and any special considerations..."
                  className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 h-32 resize-none group-hover:bg-white/10"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 relative"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  SEND MESSAGE
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-gradient-to-r from-red-950/80 via-red-900/80 to-red-950/80 backdrop-blur-sm p-12 rounded-3xl border border-red-500/20 text-center group hover:border-red-400/40 transition-all duration-500 hover:scale-105">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-6 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-3xl">🚨</span>
            </div>
            <h4 className="text-3xl font-bold mb-4 text-white group-hover:text-red-100 transition-colors">
              Emergency Contact
            </h4>
            <p className="text-red-100 mb-8 text-xl leading-relaxed max-w-2xl mx-auto">
              For urgent orders or emergency requirements outside business hours, 
              our dedicated emergency team is standing by 24/7.
            </p>
          </div>

          <div className="mb-8">
            <a 
              href="tel:(226)919-6448"
              className="group/button inline-block bg-gradient-to-r from-white via-red-50 to-white text-red-900 px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25"
            >
              <span className="flex items-center justify-center gap-3">
                📞 Emergency Hotline: (226) 919-6448
                <svg className="w-5 h-5 group-hover/button:rotate-12 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-red-200">
            <div className="flex items-center gap-2">
              <span className="text-xl">🕒</span>
              <span className="font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="font-medium">Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🚚</span>
              <span className="font-medium">Rush Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🛠️</span>
              <span className="font-medium">Priority Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}