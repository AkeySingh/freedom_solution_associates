import { motion } from "framer-motion";
import { Rocket, Briefcase, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Startup India",
    description: "Get Your Startup Recognized By the Government of India.",
    icon: <Rocket className="w-10 h-10 text-orange-600" />,
    link: "/services-categories/Startup",
  },
  {
    title: "Private Limited Company",
    description: "Register your company with ease under MCA norms.",
    icon: <Building2 className="w-10 h-10 text-orange-600" />,
    link: "/services/Private Limited Company",
  },
  {
    title: "LLP Registration",
    description: "Register your LLP quickly and hassle-free.",
    icon: <Users className="w-10 h-10 text-orange-600" />,
    link: "/services/Limited Liability Partnership",
  },
  {
    title: "Proprietorship",
    description: "Launch your sole proprietorship business.",
    icon: <Briefcase className="w-10 h-10 text-orange-600" />,
    link: "/services/Proprietorship",
  },
];

export default function ProductList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link
                to={`${product.link}`}
                className="text-orange-600 font-medium hover:underline"
              >
                Get Started →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
