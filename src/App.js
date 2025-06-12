import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import ProductCategories from "./pages/ProductCategories";
import ContactPopup from "./components/ContactPopup";
import { motion, AnimatePresence } from "framer-motion";
import PaymentFormWithQR from "./pages/PaymentFormWithQR";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const BlogPage = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

function App() {
  const [showModal, setShowModal] = useState(false);

  const [isFormOk, setIsFormOk] = useState(false);

  useEffect(() => {
    // console.log(isFormOk);
    // const timer = setTimeout(() => {
    //   setShowModal(!showModal);
    // }, 4000);
    // return () => clearTimeout(timer);
  }, [isFormOk]);

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
              {/* <Route path="/contact us" element={<ContactForm />} /> */}
              <Route path="/contact us" element={<Contact />} />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl text-center relative border border-blue-100"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className=" text-3xl font-bold"> Contact Us</h1>
              {/*  This is form tempoalte */}
              <ContactPopup
                setShowModal={setShowModal}
                isFormOk={isFormOk}
                setIsFormOk={setIsFormOk}
              />

              <div className="absolute -inset-1 z-[-1] bg-gradient-to-tr from-blue-400 to-purple-500 opacity-10 rounded-2xl blur-2xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
