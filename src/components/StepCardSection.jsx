import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClipboardList, CreditCard, Cog, MailCheck } from "lucide-react"; // Ensure lucide-react is installed

const StepCardSection = () => {
  const steps = [
    {
      title: "Application",
      link: "contact us",
      desc: "Fill the application form.",
      icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Payment",
      link: "payment",
      desc: "Make the online payment.",
      icon: <CreditCard className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Process",
      link: "process",
      desc: "We will process your application.",
      icon: <Cog className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Confirmation",
      link: "confirmation",
      desc: "A mail will be sent on completion.",
      icon: <MailCheck className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-0 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              {/* <Link to={step.link}> */}
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
              {/* </Link> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepCardSection;
