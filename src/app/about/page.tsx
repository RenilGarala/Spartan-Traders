"use client";
import React, { useState, useEffect } from "react";

interface CoreValue {
  title: string;
  desc: string;
  icon: string;
}

interface FacilityInfo {
  title: string;
  desc: string;
  icon: string;
}

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const coreValues: CoreValue[] = [
    {
      title: "Quality Assurance",
      desc: "We maintain the highest standards in all our products and services, ensuring excellence in every delivery.",
      icon: "🔧",
    },
    {
      title: "Customer Focus",
      desc: "Building long-term relationships through exceptional service and personalized solutions.",
      icon: "🤝",
    },
    {
      title: "Reliable Delivery",
      desc: "On-time delivery across Canada with trusted logistics partners and advanced tracking.",
      icon: "🚚",
    },
    {
      title: "Safety First",
      desc: "Committed to safe operations in all aspects of our business with zero-compromise standards.",
      icon: "🛡️",
    },
  ];

  const facilityInfo: FacilityInfo[] = [
    { 
      title: "Strategic Location", 
      desc: "Prime positioning across Canada for optimal distribution", 
      icon: "📍" 
    },
    { 
      title: "Advanced Capacity", 
      desc: "Large-scale storage and processing capabilities", 
      icon: "🏭" 
    },
    {
      title: "Modern Equipment",
      desc: "State-of-the-art handling and testing facilities",
      icon: "⚙️"
    },
  ];

  const whyChooseUs: string[] = [
    "Extensive industry experience and expertise spanning decades",
    "Comprehensive inventory of premium steel products",
    "Competitive pricing and flexible payment terms",
    "Quality certifications and complete MTR documentation",
    "Nationwide delivery capabilities with real-time tracking",
    "Dedicated customer support team available 24/7",
    "Custom sourcing and precise specification matching",
    "Environmentally responsible and sustainable operations",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-10 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-24">
        
        {/* Hero Section */}
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-6">
              ABOUT SPARTAN
            </h1>
            <div className="text-2xl md:text-3xl font-light text-blue-200 mb-8">
              Steel Solutions Excellence
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in industrial steel solutions across Canada. 
            Building strong foundations through quality materials and exceptional service.
          </p>
        </div>

        {/* Company Overview & Vision/Mission */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Company Overview */}
          <div className="group">
            <div className="bg-gradient-to-br from-slate-900/80 via-gray-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300">
                  🏢
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                  Company Overview
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Spartan Traders has established itself as a leading distributor of industrial steel products in Canada. 
                  We specialize in three core areas: scrap steel trading, carbon steel pipe distribution, and valve casting products.
                </p>
                <p>
                  Our commitment to quality, competitive pricing, and reliable service has made us the preferred partner 
                  for industrial companies, contractors, and manufacturers across the country.
                </p>
                <p>
                  With strategic partnerships and an extensive network, we ensure our customers have access to the materials 
                  they need, when they need them, backed by unmatched expertise and service.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-8">
            
            {/* Vision */}
            <div className="group bg-gradient-to-br from-blue-900/40 via-blue-800/40 to-blue-900/40 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-xl group-hover:rotate-12 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
                  Our Vision
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To be Canada&apos;s most trusted and innovative steel trading company, setting industry standards 
                for quality, service, and sustainability while pioneering the future of industrial materials.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-gradient-to-br from-purple-900/40 via-purple-800/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-xl group-hover:rotate-12 transition-transform duration-300">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors">
                  Our Mission
                </h3>
              </div>
              <p className="text-purple-100 leading-relaxed">
                To provide superior steel products and services that enable our customers&apos;s success while 
                contributing to Canada&apos;s industrial growth and infrastructure development through innovation and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-center text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            OUR CORE VALUES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value: CoreValue, i: number) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-center cursor-pointer"
                onMouseEnter={() => setHoveredValue(i)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`text-4xl mb-6 transition-all duration-300 ${hoveredValue === i ? 'scale-125 rotate-12' : ''}`}>
                  {value.icon}
                </div>
                <h4 className="font-bold text-xl mb-4 text-white group-hover:text-blue-100 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {value.desc}
                </p>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-center text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            WHY CHOOSE SPARTAN?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item: string, i: number) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-900/60 via-gray-800/60 to-slate-900/60 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Information */}
        <div className="bg-gradient-to-br from-gray-900/80 via-slate-800/80 to-gray-900/80 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500">
          <h2 className="text-center text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            FACILITY EXCELLENCE
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {facilityInfo.map((facility: FacilityInfo, i: number) => (
              <div 
                key={i} 
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {facility.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-white group-hover:text-blue-100 transition-colors">
                  {facility.title}
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Our state-of-the-art facility is equipped to handle large-scale operations while maintaining 
              the flexibility to serve projects of all sizes. Every aspect is designed for efficiency, 
              safety, and environmental responsibility.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-950/80 via-blue-900/80 to-blue-950/80 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Partner with Excellence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the Spartan Traders difference. Let&apos;s build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-4 bg-gradient-to-r from-white via-blue-50 to-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25">
              <span className="flex items-center justify-center gap-3">
                CONTACT US TODAY
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <button className="group px-10 py-4 border-2 border-white/50 rounded-full font-bold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 text-white">
              VIEW OUR PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;