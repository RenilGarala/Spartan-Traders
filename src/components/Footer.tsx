"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";

interface FootLink {
  title: string;
  href: string;
}

interface SocialMedia {
  name: string;
  icon: string;
}

const footLinks: FootLink[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const socialMediaLinks: SocialMedia[] = [
  { name: "LinkedIn", icon: "💼" },
  { name: "Twitter", icon: "🐦" },
  { name: "Facebook", icon: "📘" },
];

const Footer: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-10 animate-pulse"
            style={{
              width: `${3 * 3 + 1}px`,
              height: `${3 * 3 + 1}px`,
              left: `${4 * 100}%`,
              top: `${4 * 100}%`,
              animationDelay: `${4 * 4}s`,
              animationDuration: `${4 * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info Section */}
          <div className="w-full lg:w-2/5">
            <div className="mb-8">
              {/* Modern Logo */}
              <Image
                src="/assets/spartan-logo.png"
                alt="logo"
                width={240}
                height={40}
                
                className="object-cover ml-2"
              />
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-base">
                Trusted supplier of scrap steel, industrial pipes, and valve
                casting products across Canada. We provide high-quality,
                cost-effective, and reliable industrial solutions that power
                progress.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4 mt-6">
                {socialMediaLinks.map((social) => (
                  <button
                    key={social.name}
                    className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-full flex items-center justify-center hover:from-blue-500/30 hover:to-blue-300/30 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-blue-400/50"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Links and Contact Section */}
          <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-3/5">
            {/* Quick Links */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="space-y-3">
                {footLinks.map((link: FootLink, index: number) => (
                  <div key={link.href} className="relative">
                    <a
                      href={link.href}
                      className="group relative flex items-center gap-3 py-2 px-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:translate-x-2"
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          hoveredLink === index
                            ? "bg-blue-400 scale-125"
                            : "bg-gray-500"
                        }`}
                      />
                      <span
                        className={`font-medium transition-all duration-300 ${
                          hoveredLink === index
                            ? "text-blue-100"
                            : "text-gray-300"
                        }`}
                      >
                        {link.title}
                      </span>
                      <svg
                        className={`w-4 h-4 ml-auto transition-all duration-300 ${
                          hoveredLink === index
                            ? "text-blue-400 translate-x-1 opacity-100"
                            : "text-gray-500 opacity-0"
                        }`}
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
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400 text-lg">📍</div>
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      553 Springbank Avenue
                      <br />
                      Woodstock, N4T1H3
                      <br />
                      Ontario, Canada
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600/20 to-green-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-green-400 text-lg">📞</div>
                  </div>
                  <p className="text-gray-300 group-hover:text-green-300 transition-colors">
                    (226) 919-6448
                  </p>
                </div>

                {/* Email */}
                <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400 text-lg">✉️</div>
                  </div>
                  <p className="text-gray-300 group-hover:text-purple-300 transition-colors">
                    Info@spartan-traders.com
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="group w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    REQUEST QUOTE
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-16 pt-8">
          {/* Gradient Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Spartan Traders. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Site Map"].map(
                (link: string) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    {link}
                  </a>
                )
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
              <span>in Canada</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
