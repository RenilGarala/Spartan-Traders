import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('../src/assets/Hero_bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Powering Progress with Premium Industrial Materials
          </h1>
          <p className="mt-4 text-lg md:text-2xl pb-4 text-gray-200">Industrial Steel Solution Since Day One </p>
          <p className="mt-4 text-sm md:text-lg text-gray-200">
            Leading Canadian distributor of scrap steel, carbon steel pipes, and valve casting products. Quality materials for industrial applications.
          </p>

          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition duration-300">
              DISCOVER OUR PRODUCTS
              <svg
                className="w-4 h-4"
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
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Industrial Steel Solutions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Spartan Traders is your trusted Canadian partner for scrap steel
            trading, carbon steel pipe distribution, and valve casting products.
            We serve industrial clients across the country with quality
            materials and exceptional service.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
          <div className="bg-white rounded shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587202372775-98973c2c7ef6?auto=format&fit=crop&w=800&q=60"
              alt="Scrap Steel"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Scrap Steel</h3>
              <p className="text-sm text-gray-600 mb-4">
                Professional scrap steel buying and selling services with
                competitive pricing and reliable pickup.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>HMS & Structural Steel</li>
                <li>Fair Market Pricing</li>
                <li>Pickup Services</li>
              </ul>
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603397825267-9a84c64f29f0?auto=format&fit=crop&w=800&q=60"
              alt="Pipe Products"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Pipe Products</h3>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive range of carbon steel pipes including OCTG, line
                pipe, and seamless products.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>OCTG & Line Pipe</li>
                <li>Various Grades</li>
                <li>MTR Available</li>
              </ul>
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578679247826-c3e0e1cfb708?auto=format&fit=crop&w=800&q=60"
              alt="Valve Casting"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Valve Casting Products</h3>
              <p className="text-sm text-gray-600 mb-4">
                High-quality valve components and castings for industrial
                applications with custom manufacturing.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Custom Manufacturing</li>
                <li>Quality Assured</li>
                <li>Multi-Industry</li>
              </ul>
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
