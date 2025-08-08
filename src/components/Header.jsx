import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-neutral-800">
            <img
              className="h-10"
              src="../src/assets/Header_Logo.png"
              alt="Spartan Traders"
            />
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-neutral-800 border-b-2 border-transparent hover:border-blue-500 transform transition duration-200 hover:-translate-y-0.5"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="text-neutral-800 border-b-2 border-transparent hover:border-blue-500 transform transition duration-200 hover:-translate-y-0.5"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="text-neutral-800 border-b-2 border-transparent hover:border-blue-500 transform transition duration-200 hover:-translate-y-0.5"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-neutral-800 border-b-2 border-transparent hover:border-blue-500 transform transition duration-200 hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:border-b-blue-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden my-4 px-4 pb-4 space-y-2 text-center">
          <Link
            to="/"
            className="block text-gray-700 hover:text-orange-500 transform transition duration-200 hover:-translate-y-0.5"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="block text-gray-700 hover:text-orange-500 transform transition duration-200 hover:-translate-y-0.5"
          >
            Product
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-orange-500 transform transition duration-200 hover:-translate-y-0.5"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-orange-500 transform transition duration-200 hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
