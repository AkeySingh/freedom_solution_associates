import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PaymentFormWithQR = () => {
  const [showQR, setShowQR] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowQR(true);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/paytm/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const { paytmData, url } = await response.json();

      const form = document.createElement("form");
      form.setAttribute("method", "post");
      form.setAttribute("action", url);

      for (const key in paytmData) {
        if (paytmData.hasOwnProperty(key)) {
          const input = document.createElement("input");
          input.setAttribute("type", "hidden");
          input.setAttribute("name", key);
          input.setAttribute("value", paytmData[key]);
          form.appendChild(input);
        }
      }

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error("Paytm Payment Error:", err);
    }
  };

  const qrImageURL = `https://upiqr.in/api/qr?name=${encodeURIComponent(
    formData.name || "Freedom Solution"
  )}&vpa=freedom@upi&amount=${
    formData.amount || 0
  }&note=Payment%20for%20${encodeURIComponent(formData.service)}`;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-between px-4 py-6">
      {/* Header */}
      <header className="w-full max-w-5xl flex flex-col items-center mb-6">
        {/* <img
          src="/logo.png"
          alt="Freedom Solution Logo"
          className="h-16 mb-3"
        /> */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Freedom Solution
        </h1>
        <p className="text-gray-500 text-center text-sm">
          Hassle-free Taxation & Filing Services
        </p>
      </header>

      {/* Main Form or QR */}
      <main className="w-full max-w-2xl">
        <AnimatePresence>
          {!showQR && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-2xl rounded-2xl p-8 space-y-6"
            >
              <h2 className="text-2xl font-semibold text-center text-gray-700">
                Make a Secure Payment
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Service</option>
                  <option value="ITR Filing">ITR Filing</option>
                  <option value="GST Filing">GST Filing</option>
                  <option value="Company Registration">
                    Company Registration
                  </option>
                  <option value="Tax Consultation">Tax Consultation</option>
                </select>
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount (₹)"
                  required
                  value={formData.amount}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md"
              >
                Generate QR & Pay
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* QR Section */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white mt-6 rounded-2xl shadow-2xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Scan to Complete Payment
              </h2>
              <p className="text-gray-500 mb-2">Use any UPI app</p>

              <img
                src={qrImageURL}
                alt="UPI QR Code"
                className="w-60 h-60 mx-auto border rounded-xl shadow-lg"
              />

              <div className="mt-6 space-y-1 text-gray-700 text-sm">
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Mobile:</strong> {formData.mobile}
                </p>
                <p>
                  <strong>Service:</strong> {formData.service}
                </p>
                <p>
                  <strong>Amount:</strong> ₹{formData.amount}
                </p>
                <p>
                  <strong>UPI ID:</strong>{" "}
                  <span className="text-blue-700">freedom@upi</span>
                </p>
              </div>

              <motion.button
                onClick={() => {
                  setShowQR(false);
                  setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    service: "",
                    amount: "",
                  });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Back to Form
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500 w-full">
        <div className="border-t pt-4">
          © {new Date().getFullYear()} Freedom Solution. All rights reserved.
        </div>
        <p>Taxation | GST | ITR Filing | Company Registration</p>
      </footer>
    </div>
  );
};

export default PaymentFormWithQR;
