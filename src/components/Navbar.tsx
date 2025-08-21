"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNav,
} from "@/components/ui/resizable-navbar";
import { Menu, PhoneCall, X } from "lucide-react";
import { useWindowSize } from "@react-hook/window-size";
import React, { useEffect, useState } from "react";

type NavItem = {
  name: string;
  link: string;
};

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export function Header() {
  const [width] = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (width >= 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [width, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar className="top-0 mx-auto md:w-full relative md:fixed">
      {/* Desktop Navigation */}
      <NavBody className="md:flex items-center hidden justify-between w-full bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 border border-white/10">
        <div className="flex flex-1">
          <NavbarLogo />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <NavItems items={navItems} />
        </div>
        <NavbarButton 
          className="flex gap-3 items-center justify-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
          variant="gradient"
        >
          <PhoneCall size={18} className="text-white" />
          <span>Book A Call</span>
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      {width < 768 && (
        <MobileNav className="md:hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 border border-white/10 backdrop-blur-xl">
          <MobileNavHeader className="flex items-center justify-between w-full px-4 py-3">
            <NavbarLogo />
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="group p-3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {isMenuOpen ? (
                <X 
                  size={24} 
                  className="text-white group-hover:text-blue-100 transition-colors duration-300 group-hover:rotate-90 transition-transform" 
                />
              ) : (
                <Menu 
                  size={24} 
                  className="text-white group-hover:text-blue-100 transition-colors duration-300" 
                />
              )}
            </button>
          </MobileNavHeader>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
              isMenuOpen 
                ? 'max-h-96 opacity-100 translate-y-0' 
                : 'max-h-0 opacity-0 -translate-y-4'
            }`}
          >
            <div className="bg-gradient-to-br from-slate-900/60 via-gray-800/60 to-slate-900/60 backdrop-blur-sm border-t border-white/10 mx-4 mb-4 rounded-2xl overflow-hidden">
              {/* Navigation Items */}
              <div className="flex flex-col w-full p-6 space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    onClick={closeMenu}
                    className="group flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <span className="text-white font-medium text-lg group-hover:text-blue-100 transition-colors duration-300">
                      {item.name}
                    </span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
                
                {/* Mobile Call Button */}
                <div className="pt-4 border-t border-white/10">
                  <button 
                    onClick={closeMenu}
                    className="group w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-xl font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
                  >
                    <PhoneCall 
                      size={20} 
                      className="text-white group-hover:rotate-12 transition-transform duration-300" 
                    />
                    <span className="text-lg">Book A Call</span>
                  </button>
                </div>
              </div>

              {/* Background Effects for Mobile Menu */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-blue-500 rounded-full opacity-10 animate-pulse"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${Math.random() * 2 + 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </MobileNav>
      )}
    </Navbar>
  );
}