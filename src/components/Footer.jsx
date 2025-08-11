import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full sm:w-3/4 lg:w-2/3">
            <img
              className="h-10 mb-6"
              src="/assets/spartan-logo.png"
              alt="Spartan Traders"
            />
            <p className="text-sm leading-relaxed max-w-96">
              Trusted supplier of scrap steel, industrial pipes, and valve
              casting products across Canada. We provide high-quality,
              cost-effective, and reliable industrial solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 w-full sm:w-full lg:w-2/3">
            <div className="w-full sm:w-1/2">
              <h3 className="text-blue-500 text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2">
              <h3 className="text-blue-500 text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <p className="text-sm">
                📍 553 Springbank Avenue, Woodstock, N4T1H3, Ontario, Canada
              </p>
              <p className="text-sm">📞 (226) 919-6448</p>
              <p className="text-sm">✉️ Info@spartan-traders.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Spartan Traders. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
