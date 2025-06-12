import React from "react";
import { motion } from "framer-motion";
// import PaymentQRForm from "../components/PaymentQRForm";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* <PaymentQRForm /> */}
      {/* Page Header */}
      <section className="bg-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          We are a team of professional Chartered Accountants offering modern,
          efficient, and reliable financial services for businesses and
          individuals.
        </motion.p>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg">
              Founded by experienced Chartered Accountants, our firm brings
              years of financial and legal expertise to help clients achieve
              compliance, optimize taxes, and plan for growth. We combine
              traditional values with tech-enabled solutions for modern
              businesses.
            </p>
          </motion.div>
          <motion.img
            src="https://images.unsplash.com/photo-1603202590485-7f4ac994d5c3"
            alt="CA team"
            className="rounded-lg shadow-md"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-blue-900 mb-8"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 40 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Our Mission
              </h3>
              <p>
                To provide accessible, accurate, and affordable financial and
                compliance services to help our clients thrive in a competitive
                economy.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Our Vision
              </h3>
              <p>
                To be recognized as the most trusted financial advisory firm
                that embraces innovation, integrity, and insight.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center text-blue-900 mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              [
                "Expertise",
                "Qualified CAs with 10+ years of industry experience.",
              ],
              [
                "Client-Centric",
                "We listen, understand, and deliver customized solutions.",
              ],
              [
                "Tech-Driven",
                "We use secure cloud systems & tools for real-time access.",
              ],
            ].map(([title, desc], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-blue-900 mb-10"
          >
            Meet Our Core Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["CA Ravi Shankar", "Founder & Tax Expert"],
              ["CA Neha Kapoor", "Compliance & ROC Specialist"],
              ["CA Ravi Mehta", "Audit & Assurance Head"],
            ].map(([name, title], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-blue-50 p-6 rounded-lg shadow"
              >
                <div className="h-24 w-24 mx-auto bg-blue-200 rounded-full mb-4"></div>
                <h4 className="text-xl font-semibold text-blue-900">{name}</h4>
                <p className="text-sm text-gray-600">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
