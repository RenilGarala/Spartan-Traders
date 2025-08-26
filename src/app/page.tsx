"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [dots, setDots] = useState<
    {
      size: number;
      offsetX: number;
      offsetY: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const newDots = [...Array(20)].map(() => ({
      size: 3 * 4 + 1,
      offsetX: (3 - 0.5) * 100,
      offsetY: (3 - 0.5) * 100,
      delay: 2 * 3,
      duration: 4 * 3 + 2,
    }));
    setDots(newDots);
  }, []);

  const products = [
    {
      title: "Scrap Steel",
      img: "/assets/scrap-steel.png",
      description:
        "Professional scrap steel buying and selling services with competitive pricing and reliable pickup.",
      features: [
        "HMS & Structural Steel",
        "Fair Market Pricing",
        "Pickup Services",
      ],
      gradient: "from-slate-800 via-slate-700 to-slate-700",
    },
    {
      title: "Pipe Products",
      img: "/assets/pipe-product.png",
      description:
        "Comprehensive range of carbon steel pipes including OCTG, line pipe, and seamless products.",
      features: ["OCTG & Line Pipe", "Various Grades", "MTR Available"],
      gradient: "from-slate-800 via-slate-700 to-slate-700",
    },
    {
      title: "Valve Casting Products",
      img: "/assets/Valve.png",
      description:
        "High-quality valve components and castings for industrial applications with custom manufacturing.",
      features: ["Custom Manufacturing", "Quality Assured", "Multi-Industry"],
      gradient: "from-slate-800 via-slate-700 to-slate-700",
    },
  ];

  const benefits = [
    {
      title: "Quality Assurance",
      description:
        "Our products meet strict quality standards to ensure long-term performance in industrial applications.",
      icon: "🔧",
    },
    {
      title: "Reliable Delivery",
      description:
        "On-time, every time - we take deadlines seriously so your projects stay on track.",
      icon: "🚚",
    },
    {
      title: "Industry Expertise",
      description:
        "With years of experience, we provide solutions tailored to your specific industrial needs.",
      icon: "⚡",
    },
  ];

  return (
    <main className="font-sans text-white bg-black overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative max-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/assets/Hero_bg.png')", // replace with your steel/industrial image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl my-44 mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            SPARTAN <span className="text-blue-400">TRADERS</span>
          </h1>
          <p className="text-2xl md:text-4xl mt-3 font-light text-blue-200">
            Steel Solutions
          </p>

          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Powering Progress with Premium Industrial Materials
          </p>
          <p className="mt-4 text-sm md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Leading Canadian distributor of scrap steel, carbon steel pipes, and
            valve casting products. Delivering quality materials for industrial
            applications that build the future.
          </p>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <Link href="/products" className="w-full sm:w-auto">
              <button className="w-auto px-5 py-3 md:px-6 md:py-3 text-base md:text-lg bg-blue-600 rounded-full font-semibold tracking-wide overflow-hidden hover:bg-blue-500 transition-all duration-300 shadow-lg hover:scale-105">
                <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  DISCOVER PRODUCTS
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              INDUSTRIAL SOLUTIONS
            </h2>
            <p className="text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Spartan Traders is your trusted Canadian partner for premium steel
              solutions. We serve industrial clients with unmatched quality and
              exceptional service.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${product.gradient} rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20`}
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-full flex flex-col">
                  <div className="mb:p-6 p-3">
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={500}
                      height={100}
                      className="object-fit rounded-lg"
                    />
                  </div>
                  <div className="mb:p-8 p-6">
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {product.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-400"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link href={"/products"}>
                      <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                        EXPLORE MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black md:mb-6 mb-3 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              WHY CHOOSE SPARTAN
            </h2>
            <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;re not just another industrial supplier — we&apos;re your
              trusted partner committed to delivering excellence, reliability,
              and innovation.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-center">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Partner with Spartan Traders today and experience the difference
            that quality, expertise, and reliability can make for your
            industrial projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* <button className="group px-10 py-4 bg-gradient-to-r from-white via-blue-50 to-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25">
              <span className="flex items-center gap-3">
                GET QUOTE NOW
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
            </button> */}

            <button className="group px-10 py-4 border-2 border-white/50 rounded-full font-bold text-lg backdrop-blur-sm bg-white/5 text-white">
              CALL: (226) 919-6448
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
