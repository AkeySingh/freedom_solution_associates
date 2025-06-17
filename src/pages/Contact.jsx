import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "de7a0dda-84e5-448a-9090-0180388bc35c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    setSubmitting(false);
    if (res.success) {
      e.target.reset();
      setShowModal(true);
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className=" bg-blue-900 text-white py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-3  font-bold"
        >
          We're here to help and answer any question you might have.
        </motion.p>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">
            Send Us a Message
          </h2>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="number"
                name="phone"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number "
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-blue-600 text-white py-2 rounded-md transition ${
                submitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {submitting ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Get in Touch
            </h3>
            <p className="mb-4 text-gray-600">We’d love to hear from you!</p>
            <div className="space-y-3">
              <p>
                <MapPin className="inline mr-2 text-blue-700" />
                2st Floor, B-7, Sector-2 Noida, Uttar Pradesh, India
              </p>
              <p>
                <Phone className="inline mr-2 text-blue-700" />
                <a href="tel:+8287263997">+9182872 63997</a>
              </p>
              <p>
                <Mail className="inline mr-2 text-blue-700" />
                <a href="mailto:info@freedomsolutions.com">
                  info@freedomsolution.com
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <iframe
            title="Our Office Location on Google Maps"
            src="https://www.google.com/maps?q=28.585260,77.312930&output=embed"
            className="w-full h-64 border-0 rounded-lg shadow-md"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            onload="console.log('Map iframe loaded');"
          ></iframe>
        </motion.div>
      </div>

      {/* FAQ */}

      <div className="max-w-5xl mx-auto mt-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-4">FAQs</h3>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              How soon will I hear back?
            </summary>
            <p className="mt-1 text-gray-600">
              We respond within 24 business hours.
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              Can I schedule a demo?
            </summary>
            <p className="mt-1 text-gray-600">
              Yes! Please mention a date/time in your message.
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              What if I don't receive a response?
            </summary>
            <p className="mt-1 text-gray-600">
              Please check your spam folder. If you don't hear from us within 2
              business days, feel free to follow up.
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              What information should I include in my message?
            </summary>
            <p className="mt-1 text-gray-600">
              Include your name, contact details, and a clear description of
              your question or issue to help us assist you faster.
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              What are your business hours?
            </summary>
            <p className="mt-1 text-gray-600">
              We're available Monday to Friday, 9:00 AM – 6:00 PM (local time).
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              Do you offer support on weekends?
            </summary>
            <p className="mt-1 text-gray-600">
              Our team primarily responds during business hours on weekdays.
              Limited support may be available on weekends.
            </p>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              Can I contact you via phone or live chat?
            </summary>
            <p className="mt-1 text-gray-600">
              Currently, we handle inquiries via email and our contact form to
              ensure proper tracking and faster resolution.
            </p>
          </details>

          <details>
            <summary className="cursor-pointer font-medium">
              Who do I contact for partnerships or collaborations?
            </summary>
            <p className="mt-1 text-gray-600">
              Please select “Partnership Inquiry” in the contact form or mention
              it in your message to route your request correctly.
            </p>
          </details>
        </motion.div>
      </div>

      {/* Social & WhatsApp */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-4 text-blue-600">
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
        </div>
        <a
          href="https://wa.me/8287263997"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600"
        >
          💬 Chat on WhatsApp
        </a>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl text-center relative border border-blue-100"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Circle with icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="text-green-600" size={36} />
              </div>

              <h4 className="text-xl font-bold text-gray-800">Message Sent!</h4>
              <p className="text-sm text-gray-600 mt-2">
                Thanks for reaching out — we'll get back to you shortly.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
              >
                OK
              </button>

              {/* Decorative glow */}
              <div className="absolute -inset-1 z-[-1] bg-gradient-to-tr from-blue-400 to-purple-500 opacity-10 rounded-2xl blur-2xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
