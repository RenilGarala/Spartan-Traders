"use client";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import React from "react";

interface FootLink {
  title: string;
  href: string;
}

const footLinks: FootLink[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-10 animate-ping"
            style={{
              width: `${3 * 12 + 8}px`,
              height: `${3 * 12 + 8}px`,
              left: `${3 * 100}%`,
              top: `${3 * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + 3 * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info */}
          <div className="w-full lg:w-2/5">
            <Image
              src="/assets/spartan-logo.png"
              alt="logo"
              width={240}
              height={40}
              className="object-contain mb-6 ml-4"
            />
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-base">
                Trusted supplier of scrap steel, industrial pipes, and valve
                casting products across Canada. We provide high-quality,
                cost-effective, and reliable industrial solutions that power
                progress.
              </p>

              {/* Socials */}
              <div className="flex gap-4 mt-6">
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-600/20 to-blue-400/20 hover:scale-110 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-blue-300/30 transition-all"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-600/20 to-blue-400/20 hover:scale-110 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-blue-300/30 transition-all"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-600/20 to-blue-400/20 hover:scale-110 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-blue-300/30 transition-all"
                >
                  <Facebook size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Links + Contact */}
          <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-3/5">
            {/* Quick Links */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between group text-gray-300 hover:text-blue-300 transition-colors"
                    >
                      <span>{link.title}</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all"
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
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>📍 553 Springbank Avenue, Woodstock, N4T1H3, Ontario</p>
                <p>📞 (226) 919-6448</p>
                <p>✉️ Info@spartan-traders.com</p>
              </div>
              <Link href="/contact">
                <button className="relative mt-8 w-full px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  <span className="flex items-center justify-center gap-2">
                    Get In Touch
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
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-16 pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Spartan Traders. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-blue-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Site Map
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span>in Canada</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
