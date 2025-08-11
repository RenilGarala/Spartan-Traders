import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          About Spartan Traders
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in industrial steel solutions across Canada.
          Building strong foundations through quality materials and exceptional
          service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="flex items-center gap-2 font-semibold text-lg">
            <span className="bg-blue-600 text-white p-2 rounded-md">🏢</span>
            Company Overview
          </h3>
          <p className="mt-3 text-gray-600">
            Spartan Traders has established itself as a leading distributor of
            industrial steel products in Canada. We specialize in three core
            areas: scrap steel trading, carbon steel pipe distribution, and
            valve casting products.
          </p>
          <p className="mt-3 text-gray-600">
            Our commitment to quality, competitive pricing, and reliable service
            has made us the preferred partner for industrial companies,
            contractors, and manufacturers across the country.
          </p>
          <p className="mt-3 text-gray-600">
            With strategic partnerships and an extensive network, we ensure our
            customers have access to the materials they need, when they need
            them.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <span className="bg-blue-600 text-white p-2 rounded-md">🎯</span>
              Our Vision
            </h3>
            <p className="mt-3 text-gray-600">
              To be Canada’s most trusted and innovative steel trading company,
              setting industry standards for quality, service, and
              sustainability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <span className="bg-blue-600 text-white p-2 rounded-md">🚀</span>
              Our Mission
            </h3>
            <p className="mt-3 text-gray-600">
              To provide superior steel products and services that enable our
              customers’ success while contributing to Canada’s industrial
              growth and infrastructure development.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-2xl font-bold mb-10">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Quality Assurance",
              desc: "We maintain the highest standards in all our products and services.",
              icon: "✅",
            },
            {
              title: "Customer Focus",
              desc: "Building long-term relationships through exceptional service.",
              icon: "🤝",
            },
            {
              title: "Reliable Delivery",
              desc: "On-time delivery across Canada with trusted logistics partners.",
              icon: "🚚",
            },
            {
              title: "Safety First",
              desc: "Committed to safe operations in all aspects of our business.",
              icon: "🛡️",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm border text-center"
            >
              <div className="text-3xl mb-3">{val.icon}</div>
              <h4 className="font-semibold mb-2">{val.title}</h4>
              <p className="text-gray-600 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-center text-2xl font-bold mb-10">
          Why Choose Spartan Traders?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Extensive industry experience and expertise",
            "Comprehensive inventory of steel products",
            "Competitive pricing and flexible terms",
            "Quality certifications and MTR documentation",
            "Nationwide delivery capabilities",
            "Dedicated customer support team",
            "Custom sourcing and specification matching",
            "Environmentally responsible operations",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border p-4 rounded-lg shadow-sm flex items-start gap-3"
            >
              <span className="text-blue-600 mt-1">•</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg border">
        <h2 className="text-center text-2xl font-bold mb-10">
          Facility Information
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { title: "Location", desc: "Strategically located in Canada" },
            { title: "Capacity", desc: "Large-scale storage and processing" },
            {
              title: "Equipment",
              desc: "Modern handling and testing facilities",
            },
          ].map((fac, i) => (
            <div key={i} className="bg-white border p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">{fac.title}</h4>
              <p className="text-gray-600 text-sm">{fac.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6">
          Our state-of-the-art facility is equipped to handle large-scale
          operations while maintaining the flexibility to serve projects of all
          sizes.
        </p>
      </div>
    </div>
  );
};

export default About;