import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
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
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map(([q, a], i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-100 rounded-lg p-5 shadow hover:shadow-md transition-all duration-300"
              >
                <div
                  className="cursor-pointer font-semibold text-blue-800 flex justify-between items-center"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {q}
                  <span className="text-xl transform transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                  className="mt-2 text-gray-700"
                >
                  <p>{a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
