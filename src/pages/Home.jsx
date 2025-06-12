import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import StepCardSection from "../components/StepCardSection";
import RegistrationServicesSection from "../components/RegistrationServicesSection";
import Stats from "../components/Stats";
//
import FAQSection from "../components/FAQ";

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero />
      <StepCardSection />
      <RegistrationServicesSection />
      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-center mb-12 text-blue-900"
          >
            Our Core Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                "Tax Filing & Planning",
                "We handle ITRs, GST, TDS, and strategic tax planning.",
              ],
              [
                "Audit & Assurance",
                "Internal, statutory, and forensic audits for compliance and transparency.",
              ],
              [
                "Company Registration",
                "Startup setup, ROC filing, and LLP/Private Ltd. formation.",
              ],
              [
                "Virtual CFO",
                "End-to-end finance outsourcing for SMEs and startups.",
              ],
              [
                "Compliance & Advisory",
                "Stay compliant with MCA, RBI, SEBI, and income tax laws.",
              ],
              [
                "Bookkeeping",
                "Accurate accounting and timely financial reporting.",
              ],
            ].map(([title, desc], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  Stats  */}

      <section className=" py-20 bg-white">
        <div className=" mx-auto px-6 text-center">
          <Stats />
        </div>
      </section>
      {/* Video Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Learn About Our Services
          </h2>
          <div className="relative aspect-w-16 aspect-h-9 shadow-lg rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/DWcJFNfaw9c"
              title="CA Service Video"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                "Devender Thakur",
                "Startup Founder",
                "The CA team helped us register our company and handle our tax filings. Efficient and supportive!",
              ],
              [
                "Priya Singh",
                "Freelancer",
                "Their tax advice saved me a lot last year. Highly recommended.",
              ],
              [
                "Rahul Malhotra",
                "Business Owner",
                "Professional audit and compliance service. Transparent and always on time.",
              ],
            ].map(([name, role, quote], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <p className="italic text-gray-700 mb-4">"{quote}"</p>
                <h4 className="font-semibold text-blue-800">{name}</h4>
                <p className="text-sm text-gray-500">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              [
                "What documents do I need to file my ITR?",
                "You need your PAN card, Aadhaar, bank statements, Form 16, investment proofs, and other income details.",
              ],
              [
                "Can you help with GST registration?",
                "Yes, we assist with GST registration, return filing, and compliance advisory.",
              ],
              [
                "Do you provide services outside India?",
                "Yes, NRIs and international clients can access all our services virtually.",
              ],

              [
                "What is the deadline to file ITR for individuals?",
                "The usual deadline is July 31st of the assessment year, but it may change based on government notifications.",
              ],
              [
                "Do I need to file ITR if my income is below the taxable limit?",
                "You may not be required to, but filing can be beneficial for visa, loan, and credit card applications.",
              ],
              [
                "Can freelancers file ITR?",
                "Yes, freelancers can file ITR under the presumptive income scheme or regular ITR forms depending on their income.",
              ],
              [
                "Do you offer audit and bookkeeping services?",
                "Yes, we provide end-to-end bookkeeping, GST audits, and statutory audit services.",
              ],
              [
                "Can I claim deductions for rent if I live with my parents?",
                "Yes, if you pay rent to your parents and have valid proof like rent receipts, you can claim HRA.",
              ],
              [
                "What is Form 26AS?",
                "Form 26AS is a consolidated tax statement showing TDS, TCS, and other tax-related information against your PAN.",
              ],
              [
                "Is digital signature mandatory for filing returns?",
                "For individuals, it's optional unless you're required to audit your accounts. For companies, it's mandatory.",
              ],
              [
                "Can I revise my ITR after filing?",
                "Yes, if you've made a mistake, you can revise your ITR before the end of the assessment year.",
              ],
              [
                "Do you help with company registration?",
                "Yes, we assist with company incorporation, ROC compliance, and startup advisory.",
              ],
              [
                "How long does GST registration take?",
                "GST registration typically takes 3–7 working days if all documents are in order.",
              ],
            ].map(([q, a], i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-100 rounded-lg p-4"
              >
                <summary className="cursor-pointer font-semibold text-blue-800">
                  {q}
                </summary>
                <p className="text-gray-700 mt-2">{a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section> */}
      <FAQSection />

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your Finances?
          </h2>
          <p className="mb-6">
            Contact our CA experts today and let’s discuss your tax or finance
            needs!
          </p>
          <a href="tel:8287263997">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Call Now
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
