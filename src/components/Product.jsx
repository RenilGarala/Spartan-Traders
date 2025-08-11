import React, { useState } from "react";

const Product = () => {
  const [openSection, setOpenSection] = useState("pipe");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const Card = ({ img, title, desc, features, button }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img src={img} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
        {features && features.length > 0 && (
          <ul className="space-y-1 mb-6 text-gray-600">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span> {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        Industrial Products and Services
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Explore Spartan Traders' comprehensive offering: carbon steel pipe
        products, precision valve casting components, and professional scrap
        steel trading services across Canada.
      </p>

      <div>
        <button
          onClick={() => toggleSection("pipe")}
          className="w-full text-left text-lg font-semibold py-3 border-b border-gray-200 flex justify-between items-center"
        >
          Pipe Products
          <span>{openSection === "pipe" ? "▲" : "▼"}</span>
        </button>
        {openSection === "pipe" && (
          <div className="py-6">
            <p className="mb-6 text-gray-700">
              We distribute a complete range of carbon steel pipe products for
              energy, infrastructure, and industrial applications. All items are
              supported by proper MTRs and industry certifications.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card
                img="../src/assets/Pipe_product.png"
                title="OCTG (Oil Country Tubular Goods)"
                desc="High-quality oil country tubular goods for drilling and production operations."
                features={[
                  "Casing and tubing",
                  "API 5CT specifications",
                  "Various grades and sizes",
                  "MTR availability",
                ]}
                button="Learn More"
              />
              <Card
                img="../src/assets/Pipe_product.png"
                title="Line Pipe"
                desc="Carbon steel line pipe for oil and gas transmission systems."
                features={[
                  "API 5L specifications",
                  "ERW and seamless options",
                  "Various wall thickness",
                  "Certified quality",
                ]}
                button="Learn More"
              />
              <Card
                img="../src/assets/Pipe_product.png"
                title="Piling / Hollow Section / Surplus"
                desc="Structural steel piling and hollow sections for construction projects."
                button="Learn More"
              />
              <Card
                img="../src/assets/Pipe_product.png"
                title="Seamless Line Pipe"
                desc="Premium seamless steel pipe for high-pressure applications."
                button="Learn More"
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleSection("valve")}
          className="w-full text-left text-lg font-semibold py-4 border-b border-gray-200 flex justify-between items-center hover:bg-gray-50 transition"
        >
          Valve Casting Products
          <span>{openSection === "valve" ? "▲" : "▼"}</span>
        </button>

        {openSection === "valve" && (
          <div className="py-10 space-y-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  img: "../src/assets/products/valve.png",
                  title: "Gate Valves",
                  desc: "Durable gate valves designed for optimal flow control in high-pressure environments.",
                },
                {
                  img: "../src/assets/products/valve.png",
                  title: "Globe Valves",
                  desc: "Precision-engineered globe valves for throttling and regulating fluid flow.",
                },
                {
                  img: "../src/assets/products/valve.png",
                  title: "Check Valves",
                  desc: "Reliable check valves to prevent backflow and ensure system safety.",
                },
                {
                  img: "../src/assets/products/valve.png",
                  title: "Ball Valves",
                  desc: "High-performance ball valves for quick shut-off and minimal leakage.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:flex gap-10">
              <div className=" w-full">
                <h4 className="text-xl font-bold mb-6">
                  Key Features & Benefits
                </h4>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    {
                      title: "High Quality",
                      desc: "Manufactured with premium-grade alloys for durability.",
                    },
                    {
                      title: "Long Service Life",
                      desc: "Engineered for years of reliable operation.",
                    },
                    {
                      title: "Corrosion Resistance",
                      desc: "Protective coatings guard against rust and wear.",
                    },
                    {
                      title: "Efficiency",
                      desc: "Designed for smooth, low-energy operation.",
                    },
                    {
                      title: "Weatherproof",
                      desc: "Performs in extreme environmental conditions.",
                    },
                    {
                      title: "Reasonably Priced",
                      desc: "Cost-effective without quality compromise.",
                    },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="bg-white border p-5 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                      <h5 className="font-semibold mb-1">{feature.title}</h5>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleSection("scrap")}
          className="w-full text-left text-lg font-semibold py-3 border-b border-gray-200 flex justify-between items-center"
        >
          Scrap Steel Trading
          <span>{openSection === "scrap" ? "▲" : "▼"}</span>
        </button>
        {openSection === "scrap" && (
          <div className="py-6">
            <div className="md:flex gap-8 mb-8">
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-2">
                  Our Scrap Steel Operations
                </h3>
                <p className="text-gray-600 mb-4">
                  Spartan Traders is a trusted name in the Canadian scrap steel
                  industry. We purchase various grades of ferrous scrap from
                  industrial sources, demolition projects, and manufacturing
                  facilities.
                </p>
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Inquire - Buying
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Card
                  img="../src/assets/Scrap_steel.png"
                  title="Scrap Steel Handling"
                  desc="Professional collection, processing, and trading of various scrap steel types."
                />
              </div>
            </div>

            <h4 className="text-lg font-bold mb-4">
              Types of Scrap Steel We Handle
            </h4>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                "Heavy Melting Steel (HMS)",
                "Structural Steel Scrap",
                "Pipe and Tubular Scrap",
                "Plate and Sheet Scrap",
                "Machinery Scrap",
                "Railroad Scrap",
              ].map((type, i) => (
                <div
                  key={i}
                  className="bg-white border p-4 rounded-lg shadow-sm text-center"
                >
                  {type}
                </div>
              ))}
            </div>

            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Pickup & Transportation",
                "Accurate Weighing",
                "Processing & Sorting",
                "Competitive Pricing",
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white border p-4 rounded-lg shadow-sm text-center"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
