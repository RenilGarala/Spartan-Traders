import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Contact Spartan Traders
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to discuss your steel requirements? Get in touch with our
          experienced team for quotes, product information, or project
          consultation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "📧", title: "Email", desc: "Info@spartan-traders.com" },
              { icon: "📞", title: "Phone", desc: "(226) 919-6448" },
              {
                icon: "📍",
                title: "Address",
                desc: "553 Springbank Avenue, Woodstock, N4T1H3, Ontario, Canada",
              },
              {
                icon: "⏰",
                title: "Business Hours",
                desc: "Monday - Friday: 8:00 AM - 5:00 PM",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg border shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h4 className="font-semibold mb-2">Quick Response Promise</h4>
            <p className="text-gray-600 text-sm mb-3">
              We understand that time is critical in industrial operations
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                • Quote requests responded within 4 hours
              </li>
              <li className="flex items-center gap-2">
                • Urgent inquiries handled immediately
              </li>
              <li className="flex items-center gap-2">
                • Dedicated account managers available
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h4 className="font-semibold mb-4">Send Us a Message</h4>
          <p className="text-gray-600 text-sm mb-6">
            Fill out the form below and we'll get back to you promptly
          </p>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border rounded-lg p-3 text-sm"
                required
              />
              <input
                type="email"
                placeholder="your.email@company.com"
                className="w-full border rounded-lg p-3 text-sm"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Brief description of your inquiry"
              className="w-full border rounded-lg p-3 text-sm"
            />
            <textarea
              placeholder="Please provide details about your requirements, including quantities, specifications, and timeline..."
              className="w-full border rounded-lg p-3 text-sm h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg border text-center">
        <h4 className="text-xl font-semibold mb-2">Emergency Contact</h4>
        <p className="text-gray-600 mb-4">
          For urgent orders or emergency requirements outside business hours
        </p>
        <div className="bg-blue-600 text-white inline-block px-6 py-3 rounded-lg font-semibold mb-4">
          Emergency Hotline: (226) 919-6448
        </div>
        <div className="flex justify-center gap-6 text-gray-700 text-sm">
          <span>24/7 Available</span>
          <span>⚡ Fast Response</span>
          <span>🚚 Rush Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
