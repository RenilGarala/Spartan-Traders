"use client";
import { useState, useEffect } from "react";

interface ProductCardProps {
  img: string;
  title: string;
  desc: string;
  features?: string[];
  gradient?: string;
}

interface ValveProduct {
  img: string;
  title: string;
  desc: string;
}

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

export default function Products(): React.JSX.Element {
  const [openSection, setOpenSection] = useState<string>("pipe");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleSection = (section: string): void => {
    setOpenSection(openSection === section ? "" : section);
  };

  const ProductCard: React.FC<ProductCardProps> = ({
    title,
    desc,
    features,
    gradient = "from-slate-900 via-slate-700 to-slate-500"
  }) => (
    <div className={`group relative bg-gradient-to-br ${gradient} rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/10 hover:border-blue-500/50`}>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8 h-full flex flex-col">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
            <div className="w-8 h-8 bg-white/20 rounded-lg" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
          {desc}
        </p>
        
        {features && features.length > 0 && (
          <div className="space-y-2 mb-8">
            {features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                {feature}
              </div>
            ))}
          </div>
        )}
        
        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 text-white">
          LEARN MORE
        </button>
      </div>
    </div>
  );

  const valveProducts: ValveProduct[] = [
    {
      img: "/assets/products/valve.png",
      title: "Gate Valves",
      desc: "Durable gate valves designed for optimal flow control in high-pressure environments.",
    },
    {
      img: "/assets/products/valve.png",
      title: "Globe Valves",
      desc: "Precision-engineered globe valves for throttling and regulating fluid flow.",
    },
    {
      img: "/assets/products/valve.png",
      title: "Check Valves",
      desc: "Reliable check valves to prevent backflow and ensure system safety.",
    },
    {
      img: "/assets/products/valve.png",
      title: "Ball Valves",
      desc: "High-performance ball valves for quick shut-off and minimal leakage.",
    },
  ];

  const valveFeatures: Feature[] = [
    {
      title: "High Quality",
      desc: "Manufactured with premium-grade alloys for durability.",
      icon: "⚡"
    },
    {
      title: "Long Service Life",
      desc: "Engineered for years of reliable operation.",
      icon: "🔧"
    },
    {
      title: "Corrosion Resistance",
      desc: "Protective coatings guard against rust and wear.",
      icon: "🛡️"
    },
    {
      title: "Efficiency",
      desc: "Designed for smooth, low-energy operation.",
      icon: "⚙️"
    },
    {
      title: "Weatherproof",
      desc: "Performs in extreme environmental conditions.",
      icon: "🌧️"
    },
    {
      title: "Reasonably Priced",
      desc: "Cost-effective without quality compromise.",
      icon: "💰"
    },
  ];

  const scrapTypes: string[] = [
    "Heavy Melting Steel (HMS)",
    "Structural Steel Scrap",
    "Pipe and Tubular Scrap",
    "Plate and Sheet Scrap",
    "Machinery Scrap",
    "Railroad Scrap",
  ];

  const scrapServices: string[] = [
    "Pickup & Transportation",
    "Accurate Weighing", 
    "Processing & Sorting",
    "Competitive Pricing",
  ];

  const SectionButton: React.FC<{ 
    section: string; 
    title: string; 
    icon: string;
  }> = ({ section, title, icon }) => (
    <button
      onClick={() => toggleSection(section)}
      className={`group w-full text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
        openSection === section
          ? 'bg-gradient-to-r from-blue-600/20 to-blue-400/20 border-blue-500/50 shadow-lg shadow-blue-500/20'
          : 'bg-gradient-to-br from-slate-900/60 via-gray-800/60 to-slate-900/60 border-white/10 hover:border-blue-500/30'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
            openSection === section
              ? 'bg-blue-500/20 rotate-3'
              : 'bg-white/5 group-hover:rotate-3'
          }`}>
            {icon}
          </div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            openSection === section ? 'text-blue-100' : 'text-white group-hover:text-blue-100'
          }`}>
            {title}
          </h2>
        </div>
        <div className={`text-2xl transition-all duration-500 ${
          openSection === section ? 'rotate-180 text-blue-400' : 'text-gray-400 group-hover:text-blue-400'
        }`}>
          ▼
        </div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-10 animate-pulse"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-16">
        
        {/* Hero Section */}
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-8">
            INDUSTRIAL SOLUTIONS
          </h1>
          <div className="text-2xl md:text-3xl font-light text-blue-200 mb-8">
            Products & Services Excellence
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore Spartan Traders comprehensive offering: carbon steel pipe products, 
            precision valve casting components, and professional scrap steel trading services across Canada.
          </p>
        </div>

        {/* Pipe Products Section */}
        <div className="space-y-6">
          <SectionButton section="pipe" title="Pipe Products" icon="🔧" />
          
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
            openSection === "pipe" ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-slate-900/40 via-gray-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                We distribute a complete range of carbon steel pipe products for energy, infrastructure, 
                and industrial applications. All items are supported by proper MTRs and industry certifications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <ProductCard
                  img="/assets/Pipe_product.png"
                  title="OCTG (Oil Country Tubular Goods)"
                  desc="High-quality oil country tubular goods for drilling and production operations."
                  features={[
                    "Casing and tubing solutions",
                    "API 5CT specifications compliance",
                    "Various grades and sizes available",
                    "Complete MTR documentation",
                  ]}
                  gradient="from-blue-900/60 via-blue-700/60 to-blue-500/60"
                />
                <ProductCard
                  img="/assets/Pipe_product.png"
                  title="Line Pipe"
                  desc="Carbon steel line pipe for oil and gas transmission systems."
                  features={[
                    "API 5L specifications",
                    "ERW and seamless options",
                    "Various wall thickness",
                    "Certified quality assurance",
                  ]}
                  gradient="from-purple-900/60 via-purple-700/60 to-purple-500/60"
                />
                <ProductCard
                  img="/assets/Pipe_product.png"
                  title="Piling / Hollow Section / Surplus"
                  desc="Structural steel piling and hollow sections for construction projects."
                  gradient="from-green-900/60 via-green-700/60 to-green-500/60"
                />
                <ProductCard
                  img="/assets/Pipe_product.png"
                  title="Seamless Line Pipe"
                  desc="Premium seamless steel pipe for high-pressure applications."
                  gradient="from-orange-900/60 via-orange-700/60 to-orange-500/60"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Valve Casting Products Section */}
        <div className="space-y-6">
          <SectionButton section="valve" title="Valve Casting Products" icon="⚙️" />

          <div className={`overflow-hidden transition-all duration-800 ease-in-out ${
            openSection === "valve" ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-slate-900/40 via-gray-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-12">
              
              {/* Valve Types Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {valveProducts.map((product: ValveProduct, i: number) => (
                  <div
                    key={i}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center">
                      <div className={`w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${hoveredCard === i ? 'scale-125 rotate-12' : ''}`}>
                        🔧
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Key Features & Benefits
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {valveFeatures.map((feature: Feature, i: number) => (
                    <div
                      key={i}
                      className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 text-center"
                    >
                      <div className="text-3xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h5 className="font-bold text-lg mb-2 text-white group-hover:text-blue-100 transition-colors">
                        {feature.title}
                      </h5>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrap Steel Trading Section */}
        <div className="space-y-6">
          <SectionButton section="scrap" title="Scrap Steel Trading" icon="♻️" />

          <div className={`overflow-hidden transition-all duration-800 ease-in-out ${
            openSection === "scrap" ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-slate-900/40 via-gray-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-12">
              
              {/* Main Content */}
              <div className="lg:flex gap-12 items-center">
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Our Scrap Steel Operations
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Spartan Traders is a trusted name in the Canadian scrap steel industry. 
                    We purchase various grades of ferrous scrap from industrial sources, 
                    demolition projects, and manufacturing facilities.
                  </p>
                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-green-600 via-green-500 to-green-400 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                      INQUIRE - BUYING
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <div className="bg-gradient-to-br from-green-900/60 via-green-700/60 to-green-500/60 rounded-3xl p-8 border border-green-500/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 hover:rotate-3 transition-transform duration-300">
                      <span className="text-2xl">♻️</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">
                      Scrap Steel Handling
                    </h4>
                    <p className="text-green-100 leading-relaxed">
                      Professional collection, processing, and trading of various scrap steel types 
                      with environmental responsibility and competitive pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrap Types */}
              <div>
                <h4 className="text-2xl font-bold mb-8 text-center text-white">
                  Types of Scrap Steel We Handle
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {scrapTypes.map((type: string, i: number) => (
                    <div
                      key={i}
                      className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 text-center"
                    >
                      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        🔩
                      </div>
                      <p className="text-gray-300 group-hover:text-orange-200 transition-colors font-medium">
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-2xl font-bold mb-8 text-center text-white">
                  Our Services
                </h4>
                <div className="grid md:grid-cols-4 gap-6">
                  {scrapServices.map((service: string, i: number) => (
                    <div
                      key={i}
                      className="group bg-gradient-to-br from-blue-600/20 to-blue-400/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 text-center"
                    >
                      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        ⚡
                      </div>
                      <p className="text-blue-100 group-hover:text-white transition-colors font-medium">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-950/80 via-blue-900/80 to-blue-950/80 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Source Premium Steel Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our expert team today for quotes, specifications, and custom solutions 
            tailored to your industrial requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-4 bg-gradient-to-r from-white via-blue-50 to-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25">
              <span className="flex items-center justify-center gap-3">
                REQUEST QUOTE
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <button className="group px-10 py-4 border-2 border-white/50 rounded-full font-bold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 text-white">
              CALL: (226) 919-6448
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}