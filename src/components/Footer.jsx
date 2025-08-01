import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import LogoImg from "../images/logo02.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10"
      >
        <div>
          <Link to="/" className="flex items-center">
            <img
              src={LogoImg}
              alt="Freedom Filling Logo"
              className="h-40 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-400">
            A trusted name in accounting and financial services. Our expert CA
            team helps startups, businesses, and individuals simplify compliance
            and maximize growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact us" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="services/Income Tax E-Filing">
                Tax Filing & Returns
              </Link>
            </li>
            <li>
              <Link to="services/Company Registration">
                Company Registration
              </Link>
            </li>
            <li>
              <Link to="services-categories/Compliance"> Compliance</Link>
            </li>
            <li>
              <Link to="services-categories/Income Tax">Audit & Assurance</Link>
            </li>
            <li>
              <Link to="services/Bookkeeping"> Bookkeeping & Accounting</Link>
            </li>
            <li>
              <Link to="services/Income Tax E-Filing">
                Tax Filing & Returns
              </Link>
              Startup Advisory
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-white mt-1" />
              <span>2st Floor, B-7, Sector-2 Noida, Uttar Pradesh, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <Link to="tel:+9182872 63997" className="hover:text-white">
                +91 8287263997
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-white" />
              <a
                href="mailto:info@freedomsolution.in"
                className="hover:text-white"
              >
                info@freedomsolution.in
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Freedom Solutions. All Rights
          Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/Tax.fsa.preparation"
            className="hover:text-white"
          >
            <Facebook size={18} />
          </a>
          <a to="#" className="hover:text-white">
            <Twitter size={18} />
          </a>
          <a to="#" className="hover:text-white">
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/freedom_solution/"
            className="hover:text-white"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
