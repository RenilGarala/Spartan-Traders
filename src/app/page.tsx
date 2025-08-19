"use client";
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
      size: Math.random() * 4 + 1,
      offsetX: (3 - 0.5) * 100,
      offsetY: (3 - 0.5) * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }));
    setDots(newDots);
  }, []);

  const products = [
    {
      title: "Scrap Steel",
      description:
        "Professional scrap steel buying and selling services with competitive pricing and reliable pickup.",
      features: [
        "HMS & Structural Steel",
        "Fair Market Pricing",
        "Pickup Services",
      ],
      gradient: "from-slate-900 via-slate-700 to-slate-500",
    },
    {
      title: "Pipe Products",
      description:
        "Comprehensive range of carbon steel pipes including OCTG, line pipe, and seamless products.",
      features: ["OCTG & Line Pipe", "Various Grades", "MTR Available"],
      gradient: "from-zinc-900 via-zinc-700 to-zinc-500",
    },
    {
      title: "Valve Casting Products",
      description:
        "High-quality valve components and castings for industrial applications with custom manufacturing.",
      features: ["Custom Manufacturing", "Quality Assured", "Multi-Industry"],
      gradient: "from-stone-900 via-stone-700 to-stone-500",
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
    <div className="font-sans text-white bg-black overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 0.1}% ${
            mousePosition.y * 0.1
          }%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
          `,
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute bg-blue-500 rounded-full opacity-20 animate-pulse pointer-events-none"
              style={{
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                left: `${mousePosition.x + dot.offsetX}px`,
                top: `${mousePosition.y + dot.offsetY}px`,
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration}s`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 backdrop-blur-sm" />

        <div
          className={`relative z-10 max-w-6xl text-center px-6 transition-all duration-2000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent animate-pulse">
              SPARTAN
            </h1>
            <div className="text-3xl md:text-5xl font-light tracking-wider text-blue-200 mt-2">
              STEEL SOLUTIONS
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-3xl font-medium text-blue-100 leading-relaxed">
              Powering Progress with Premium Industrial Materials
            </p>
            <p className="text-lg md:text-xl text-blue-200/80 max-w-4xl mx-auto leading-relaxed">
              Leading Canadian distributor of scrap steel, carbon steel pipes,
              and valve casting products. Quality materials for industrial
              applications that build the future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center gap-3">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="group px-8 py-4 border-2 border-blue-400/50 rounded-full font-semibold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-3">
                CONTACT US
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4l8 8-8 8M4 12h16"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              INDUSTRIAL SOLUTIONS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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

                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <div className="w-8 h-8 bg-white/20 rounded-lg" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
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

                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    EXPLORE MORE
                  </button>
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              WHY CHOOSE SPARTAN
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're not just another industrial supplier — we're your trusted
              partner committed to delivering excellence, reliability, and
              innovation.
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
            <button className="group px-10 py-4 bg-gradient-to-r from-white via-blue-50 to-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25">
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
            </button>

            <button className="group px-10 py-4 border-2 border-white/50 rounded-full font-bold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 text-white">
              CALL: 1-800-SPARTAN
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
