import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Page Header */}
      <section className="bg-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          We are committed to maintaining the confidentiality, integrity, and
          security of your personal and financial information.
        </motion.p>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-left">
          {[
            {
              title: "1. Information We Collect",
              content:
                "We collect personal details such as your name, PAN, Aadhaar number, financial records, contact information, and business details. This data is obtained when you fill out forms, submit documents, or interact with our team.",
            },
            {
              title: "2. Use of Information",
              content:
                "Your data is used strictly for providing tax filing, compliance, consultancy, and other related services. We do not use your information for marketing without consent.",
            },
            {
              title: "3. Confidentiality & Client Data",
              content:
                "All client data is treated as strictly confidential. We adhere to ICAI (Institute of Chartered Accountants of India) ethical standards and legal obligations under the Indian Income Tax Act and IT Rules.",
            },
            {
              title: "4. Data Storage & Security",
              content:
                "We use encrypted cloud-based systems and maintain strong access control to ensure your data is protected from unauthorized access or misuse.",
            },
            {
              title: "5. Sharing of Information",
              content:
                "We do not share your information with third parties, except government bodies (e.g. Income Tax Department, GSTN) or trusted partners like payment gateways — and only when necessary for compliance or service fulfillment.",
            },
            {
              title: "6. Legal Compliance",
              content:
                "Our firm complies with Indian data protection laws, including the Information Technology Act, 2000, and will cooperate with legal authorities if mandated by law.",
            },
            {
              title: "7. Data Retention",
              content:
                "We retain client records for at least 8 years, or as required by law, for auditing and compliance purposes. You may request a copy or deletion post this period, subject to legal constraints.",
            },
            {
              title: "8. Your Rights",
              content:
                "You have the right to access, review, or request corrections to your personal data. You may also withdraw consent or file a grievance by emailing us.",
            },
            {
              title: "9. Contact Information",
              content:
                "If you have any questions or concerns about this Privacy Policy, please contact us at support@freesomsolution.com or call +91-8287263997.",
            },
            {
              title: "10. Policy Updates",
              content:
                "This policy may be updated from time to time. All changes will be posted here with a revised 'Effective Date'. Last updated: June 12, 2025.",
            },
          ].map(({ title, content }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">
                {title}
              </h2>
              <p className="text-gray-700 text-md">{content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
