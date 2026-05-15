"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

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
    img,
    title,
    desc,
    features,
    gradient = "from-slate-900 via-slate-700 to-slate-500",
  }) => (
    <div
      className={`group relative bg-gradient-to-br ${gradient} rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/10 hover:border-blue-500/50`}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 h-full flex flex-col">
        <div>
          <div className="relative w-full h-[250px] overflow-hidden rounded-md">
            <Image src={img} alt={title} fill className="object-cover" />
          </div>
          <h3 className="text-xl md:text-2xl mt-4 mb-4 font-bold w-full text-white group-hover:text-blue-100 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{desc}</p>

        {features && features.length > 0 && (
          <div className="space-y-2 mb-8">
            {features.map((feature: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                {feature}
              </div>
            ))}
          </div>
        )}

        <button className="w-full py-3 text-sm md:text-md bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 text-white">
          LEARN MORE
        </button>
      </div>
    </div>
  );

  const valveProducts: ValveProduct[] = [
    {
      img: "/assets/gate-valves.jpeg",
      title: "Gate Valves",
      desc: "Durable gate valves designed for optimal flow control in high-pressure environments.",
    },
    {
      img: "/assets/globe-valves.jpeg",
      title: "Globe Valves",
      desc: "Precision-engineered globe valves for throttling and regulating fluid flow.",
    },
    {
      img: "/assets/check-valve.jpg",
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
      icon: "⚡",
    },
    {
      title: "Long Service Life",
      desc: "Engineered for years of reliable operation.",
      icon: "🔧",
    },
    {
      title: "Corrosion Resistance",
      desc: "Protective coatings guard against rust and wear.",
      icon: "🛡️",
    },
    {
      title: "Efficiency",
      desc: "Designed for smooth, low-energy operation.",
      icon: "⚙️",
    },
    {
      title: "Weatherproof",
      desc: "Performs in extreme environmental conditions.",
      icon: "🌧️",
    },
    {
      title: "Reasonably Priced",
      desc: "Cost-effective without quality compromise.",
      icon: "💰",
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
      className={`group w-full text-left p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
        openSection === section
          ? "bg-gradient-to-r from-blue-600/20 to-blue-400/20 border-blue-500/50 shadow-lg shadow-blue-500/20"
          : "bg-gradient-to-br from-slate-900/60 via-gray-800/60 to-slate-900/60 border-white/10 hover:border-blue-500/30"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
              openSection === section
                ? "bg-blue-500/20 rotate-3"
                : "bg-white/5 group-hover:rotate-3"
            }`}
          >
            {icon}
          </div>
          <h2
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              openSection === section
                ? "text-blue-100"
                : "text-white group-hover:text-blue-100"
            }`}
          >
            {title}
          </h2>
        </div>
        <div
          className={`text-2xl transition-all duration-500 ${
            openSection === section
              ? "rotate-180 text-blue-400"
              : "text-gray-400 group-hover:text-blue-400"
          }`}
        >
          ▼
        </div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-8">
            INDUSTRIAL SOLUTIONS
          </h1>
          <div className="text-xl md:text-2xl font-light text-blue-200 mb-8">
            Products & Services Excellence
          </div>
          <p className="text-md md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore Spartan Traders comprehensive offering: carbon steel pipe
            products, precision valve casting components, and professional scrap
            steel trading services across Canada.
          </p>
        </div>

        {/* Custom Casting & Forging Products Section */}
        <div className="space-y-6">
          <SectionButton
            section="pipe"
            title="Custom Casting & Forging Products"
            icon="🔧"
          />

          <AnimatePresence mode="wait">
            {openSection === "pipe" && (
              <motion.div
                key="pipe"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-slate-900/40 via-gray-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 space-y-8"
              >
                <p className="text-sm md:text-xl text-gray-300 leading-relaxed max-w-4xl">
                  We manufacture high-quality custom casting and forging
                  components for industrial, automotive, construction, and
                  engineering applications. All products are produced with
                  precision machining, strict quality control, and reliable
                  material standards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <ProductCard
                    img="/assets/investment-casting.png"
                    title="Investment Casting Components"
                    desc="Precision investment casting solutions for industrial and engineering applications."
                    features={[
                      "High dimensional accuracy",
                      "Smooth surface finishing",
                      "Complex shape manufacturing",
                      "Custom alloy options",
                    ]}
                    gradient="from-blue-900/60 via-blue-700/60 to-blue-500/60"
                  />

                  <ProductCard
                    img="/assets/forged-components.png"
                    title="Forged Industrial Components"
                    desc="Durable forged metal parts designed for high-strength industrial applications."
                    features={[
                      "Hot and cold forging",
                      "Superior mechanical strength",
                      "Custom forged shapes",
                      "Strict quality inspection",
                    ]}
                    gradient="from-purple-900/60 via-purple-700/60 to-purple-500/60"
                  />

                  <ProductCard
                    img="/assets/sand-casting.png"
                    title="Sand Casting Products"
                    desc="Custom sand casting products for automotive, machinery, and construction industries."
                    features={[
                      "Large and complex parts",
                      "Cost-effective production",
                      "Various metal grades",
                      "Reliable structural integrity",
                    ]}
                    gradient="from-green-900/60 via-green-700/60 to-green-500/60"
                  />

                  <ProductCard
                    img="/assets/cnc-machined-parts.png"
                    title="CNC Machined & Finished Parts"
                    desc="Precision-machined casting and forging components with premium finishing quality."
                    features={[
                      "High precision machining",
                      "Custom surface treatments",
                      "Tight tolerance control",
                      "Ready-to-assemble parts",
                    ]}
                    gradient="from-orange-900/60 via-orange-700/60 to-orange-500/60"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Micro Precision Machined Components Section */}
        <div className="space-y-6">
          <SectionButton
            section="micro"
            title="Micro Precision Machined Components"
            icon="⚙️"
          />

          <AnimatePresence mode="wait">
            {openSection === "micro" && (
              <motion.div
                key="micro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-br from-slate-900/40 via-gray-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-12"
              >
                {/* Product Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      img: "/assets/cnc-turning-components.png",
                      title: "CNC Turning Components",
                      desc: "High-precision CNC turned components manufactured with tight tolerances and excellent surface finishing.",
                    },
                    {
                      img: "/assets/micro-machined-parts.png",
                      title: "Micro Machined Parts",
                      desc: "Compact and intricate micro machined components designed for industrial and engineering applications.",
                    },
                    {
                      img: "/assets/precision-shafts.png",
                      title: "Precision Shafts & Pins",
                      desc: "Durable precision shafts, pins, and miniature components engineered for long-term reliability.",
                    },
                    {
                      img: "/assets/custom-machined-components.png",
                      title: "Custom Machined Components",
                      desc: "Custom-built machined components developed according to client drawings and specifications.",
                    },
                  ].map((product, i) => (
                    <motion.div
                      key={i}
                      className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -4 }}
                      onMouseEnter={() => setHoveredCard(i)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="relative h-46 bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center">
                        <Image
                          src={product.img}
                          alt={product.title}
                          width={600}
                          height={600}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                          {product.title}
                        </h3>

                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                          {product.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Key Features & Capabilities
                  </h4>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "High Precision",
                        desc: "Manufactured with advanced CNC machining and micron-level accuracy.",
                        icon: "🎯",
                      },
                      {
                        title: "Tight Tolerances",
                        desc: "Engineered to maintain consistent dimensions and superior quality.",
                        icon: "📏",
                      },
                      {
                        title: "Premium Materials",
                        desc: "Available in stainless steel, brass, aluminum, titanium, and alloys.",
                        icon: "🛠️",
                      },
                      {
                        title: "Surface Finishing",
                        desc: "Smooth finishing with coating, polishing, and custom treatments.",
                        icon: "✨",
                      },
                      {
                        title: "Custom Manufacturing",
                        desc: "Components manufactured according to drawings and OEM requirements.",
                        icon: "⚙️",
                      },
                      {
                        title: "Industrial Applications",
                        desc: "Suitable for automotive, aerospace, medical, and engineering industries.",
                        icon: "🏭",
                      },
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl transition-all duration-300 text-center"
                        whileHover={{ scale: 1.05, y: -4 }}
                      >
                        <motion.div
                          className="text-3xl mb-4"
                          whileHover={{ scale: 1.2, rotate: 3 }}
                        >
                          {feature.icon}
                        </motion.div>

                        <h5 className="font-bold text-lg mb-2 text-white group-hover:text-blue-100 transition-colors">
                          {feature.title}
                        </h5>

                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                          {feature.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gradient-to-r from-blue-900/20 to-slate-900/20 border border-blue-500/20 rounded-3xl p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    Precision Engineering Solutions
                  </h3>

                  <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                    We specialize in manufacturing high-quality micro precision
                    machined components for industries requiring exceptional
                    accuracy, durability, and consistency. Our advanced CNC
                    machining processes ensure superior dimensional control,
                    excellent surface finishing, and reliable performance across
                    every component.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scrap Steel Trading Section */}
        <div className="space-y-6">
          <SectionButton
            section="scrap"
            title="Scrap Steel Trading"
            icon="♻️"
          />

          {openSection === "scrap" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-slate-900/40 via-gray-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-12">
                {/* Main Content */}
                <div className="lg:flex gap-12 items-center">
                  <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-2xl md:text-xl font-bold text-white mb-4">
                      Our Scrap Steel Operations
                    </h3>
                    <p className="text-md text-gray-300 leading-relaxed">
                      Spartan Traders is a trusted name in the Canadian scrap
                      steel industry. We purchase various grades of ferrous
                      scrap from industrial sources, demolition projects, and
                      manufacturing facilities.
                    </p>
                    <div className="flex gap-4">
                      <Link href="/contact">
                        <button className="px-8 py-4 bg-gradient-to-r from-green-600 via-green-500 to-green-400 rounded-xl font-semibold text-white text-sm md:text-normal hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                          INQUIRE - BUYING
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="bg-gradient-to-br from-green-900/60 via-green-700/60 to-green-500/60 rounded-3xl p-8 border border-green-500/30 hover:shadow-2xl hover:shadow-green-500/20"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 hover:rotate-3 transition-transform duration-300">
                        <span className="text-2xl">♻️</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">
                        Scrap Steel Handling
                      </h4>
                      <p className="text-green-100 text-sm md:text-md leading-relaxed">
                        Professional collection, processing, and trading of
                        various scrap steel types with environmental
                        responsibility and competitive pricing.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Scrap Types */}
                <div>
                  <h4 className="text-2xl font-bold mb-8 text-center text-white">
                    Types of Scrap Steel We Handle
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 ">
                    {scrapTypes.map((type: string, i: number) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-2 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 text-center relative flex items-center justify-center "
                      >
                        <Image
                          src={`/assets/scrap-steel.png`}
                          alt={type}
                          width={400}
                          height={400}
                          className="w-full h-full rounded-md"
                        />
                        <p className="absolute text-gray-300  w-full h-full group-hover:text-orange-200 transition-colors font-medium flex items-center justify-center bg-black/50 rounded-2xl">
                          {type}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-8 text-center text-white">
                    Our Services
                  </h4>
                  <div className="grid md:grid-cols-4 gap-6">
                    {scrapServices.map((service: string, i: number) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="group bg-gradient-to-br from-blue-600/20 to-blue-400/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 text-center"
                      >
                        <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          ⚡
                        </div>
                        <p className="text-blue-100 group-hover:text-white transition-colors font-medium">
                          {service}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-950/80 via-blue-900/80 to-blue-950/80 backdrop-blur-sm p-10 rounded-3xl border border-blue-500/20">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white">
            Ready to Source Premium Steel Products?
          </h2>
          <p className="text-sm md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our expert team today for quotes, specifications, and custom
            solutions tailored to your industrial requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className=" flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="group px-7 py-3 bg-gradient-to-r from-white via-blue-50 to-white text-blue-900 rounded-full font-bold text-normal md:text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25">
                <span className="flex items-center justify-center gap-3">
                  REQUEST QUOTE
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <button className="group px-7 py-3 border-2 border-white/50 rounded-full font-bold backdrop-blur-sm bg-white/5 text-normal md:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 text-white">
              CALL: (226) 919-6448
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
