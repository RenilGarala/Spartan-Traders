import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Company Info */}
          <div className="w-full sm:w-3/4 lg:w-2/3">
            <h2 className="text-blue-500 text-xl font-semibold mb-4">Spartan Traders</h2>
            <p className="text-sm leading-relaxed max-w-96">
              Trusted supplier of scrap steel, industrial pipes, and valve casting products across Canada. We provide high-quality, cost-effective, and reliable industrial solutions.
            </p>
          </div>

          {/* Links & Contact Container */}
          <div className="flex flex-col sm:flex-row gap-10 w-full sm:w-full lg:w-2/3">
            
            {/* Quick Links */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-blue-500 text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/pipe-products" className="hover:text-white">Pipe Products</a></li>
                <li><a href="/valve-castings" className="hover:text-white">Valve Castings</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-blue-500 text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">📍 123 Industrial Park, Edmonton, Canada</p>
              <p className="text-sm">📞 +1 (123) 456-7890</p>
              <p className="text-sm">✉️ info@spartantraders.ca</p>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Spartan Traders. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
