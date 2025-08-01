import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import ProductCategories from "./pages/ProductCategories";
import ContactPopup from "./components/ContactPopup";
import { motion, AnimatePresence } from "framer-motion";
import PaymentFormWithQR from "./pages/PaymentFormWithQR";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./pages/Testimonial";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const BlogPage = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivicyPolicy"));

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isFormOk, setIsFormOk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <a
          href="https://wa.me/8287263997"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          💬 Chat on WhatsApp
        </a>
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:id" element={<Product />} />
              <Route
                path="/services-categories/:id"
                element={<ProductCategories />}
              />
              <Route path="/about us" element={<About />} />
              <Route path="/our blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact us" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/payment" element={<PaymentFormWithQR />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-sm px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-blue-0 max-w-2xl p-0 rounded-2xl shadow-2xl text-center border border-blue-100"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-3xl font-bold z-10"
                aria-label="Close"
              >
                &times;
              </button>
              {/* Contact Form */}
              <ContactPopup
                setShowModal={setShowModal}
                isFormOk={isFormOk}
                setIsFormOk={setIsFormOk}
              />

              {/* Subtle Glow Gradient Background */}
              <div className="absolute -inset-1 z-[-1] bg-gradient-to-tr from-blue-400 to-purple-500 opacity-10 rounded-2xl blur-2xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
