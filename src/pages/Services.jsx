import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  Percent,
  TrendingUp,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Tax Planning & Filing",
      description:
        "Expert guidance and accurate filing for Individual, Corporate, GST, and TDS returns with maximum savings.",
      icon: <Percent size={36} className="text-blue-600" />,
    },
    {
      title: "Company Incorporation",
      description:
        "Private Limited, LLP, OPC, or Partnership – we handle registrations and post-incorporation compliance.",
      icon: <Briefcase size={36} className="text-blue-600" />,
    },
    {
      title: "Accounting & Bookkeeping",
      description:
        "Day-to-day bookkeeping, virtual CFO services, MIS reports, and cloud-based accounting solutions.",
      icon: <FileText size={36} className="text-blue-600" />,
    },
    {
      title: "GST Compliance",
      description:
        "From registration to monthly filings, audits, and legal representation – we’ve got your GST needs covered.",
      icon: <ShieldCheck size={36} className="text-blue-600" />,
    },
    {
      title: "Audit & Assurance",
      description:
        "Statutory, internal, and tax audits by certified professionals to ensure regulatory compliance and financial integrity.",
      icon: <TrendingUp size={36} className="text-blue-600" />,
    },
    {
      title: "Startup & Funding Advisory",
      description:
        "End-to-end support for startups including pitch decks, valuation, business models, and investor connections.",
      icon: <Users size={36} className="text-blue-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <section className="text-center py-20 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900"
        >
          Our Financial Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Empowering businesses and individuals with end-to-end accounting, tax,
          compliance, and advisory services.
        </motion.p>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-4"
        >
          Need Personalized Advice?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg mb-6"
        >
          Get in touch with our expert Chartered Accountants for a free
          consultation.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow hover:bg-gray-200 transition"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
}
