import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../assets/product-data.json";
import Spinner from "../components/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";

// images
import gstImg from "../images/gst.webp";
import startupImg from "../images/startup.jpg";
import registrationsImg from "../images/registration.webp";
import mcaImg from "../images/mca.jpg";
import incomtaxImg from "../images/income-tax.png";
import complienceImg from "../images/comliance.jpg";

function Product() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [img, setImg] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "62b12f11-1967-403c-a40f-12894f3e0f7f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    setSubmitting(false);
    if (res.success) {
      e.target.reset();
      setShowModal(true);
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  useEffect(() => {
    if (Object.keys(Products).includes(id)) {
      console.log(Products[id].Imgtype);
      setData(Products[id]);

      if (Products[id].Imgtype === "Startup") {
        setImg(startupImg);
      } else if (Products[id].Imgtype === "Registration") {
        setImg(registrationsImg);
      } else if (Products[id].Imgtype === "Compliance") {
        setImg(complienceImg);
      } else if (Products[id].Imgtype === "GST") {
        setImg(gstImg);
      } else if (Products[id].Imgtype === "Income Tax") {
        setImg(incomtaxImg);
      } else if (Products[id].Imgtype === "MCA") {
        setImg(mcaImg);
      }
    }
  }, [id]);

  if (data.length === 0) {
    return <Spinner />;
  }
  return (
    <div className="bg-white text-[#1a1a1a]">
      <div className="bg-gradient-to-r from-white to-gray-100 py-10 px-4 md:px-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
          {data.meta.title}
        </h1>
        <p className="text-sm text-gray-500">
          Home {">"}
          {data.meta.title}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4 md:px-20 py-10">
        <div className="bg-blue-900 rounded-xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-center h-64">
            <div className=" text-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">
                {data.contact.helpText}
              </h2>
              <a
                href={`tel:${data.contact.phone}`}
                className="bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center gap-2 px-4 py-3  rounded-lg font-semibold"
              >
                <Phone className="w-5 h-5" /> {data.contact.phone}
              </a>
            </div>
          </div>
        </div>
        {/* <form onSubmit={onSubmit} className="space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="number"
                name="phone"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number "
              />
            </div>
            <div>
              <label className="block text-sm  font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border px-4 py-2 text-black rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-blue-600 text-white py-2 rounded-md transition ${
                submitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {submitting ? "Sending..." : "Submit Message"}
            </button>
          </form> */}

        <motion.div
          className="bg-blue-800 text-white p-6 rounded-xl col-span-1 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            {data.meta.title.toUpperCase()}
          </h2>
          <p className="text-lg font-medium mb-4">{data.meta.subtitle} </p>
          <img
            src={img}
            alt="Team Meeting"
            className="rounded-xl w-full  object-cover"
          />
        </motion.div>
        <div>
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {data.growthBenefits.title}
            </h2>
            <p className="text-gray-700 mb-6 max-w-3xl">
              {data.growthBenefits.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {data.growthBenefits.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-orange-50 p-5 rounded-lg shadow hover:shadow-md"
                >
                  <h4 className="text-lg font-bold text-blue-900 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4 md:px-20 py-10">
        <div className=" rounded-xl p-6 text-black shadow-xl">
          <section className="py-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Related Services
            </h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
              {data.relatedServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-gray-300 hover:bg-orange-600 hover:cursor-pointer p-4 rounded-lg text-center font-medium shadow"
                >
                  {service}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className=" rounded-xl p-6 text-white col-span-2  shadow-xl">
          <section>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                Required Legal Documents
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {data.growthBenefits.legalDocumentation.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {data.introSection.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.introSection.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {data.faqSection.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.faqSection.description}
            </p>
          </section>

          {data.topics.map((topic, i) => (
            <section key={i}>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-700">{topic.details}</p>
            </section>
          ))}

          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {data.essentialFor.title}
            </h3>
            <p className="text-gray-700">{data.essentialFor.details}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {data.advantages.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {data.advantages.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {data.disadvantages.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {data.disadvantages.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {data.registrationWithUs.title}
            </h3>
            <p className="text-gray-700">{data.registrationWithUs.details}</p>
          </section>
        </div>
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
              {/* Circle with icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="text-green-600" size={36} />
              </div>

              <h4 className="text-xl font-bold text-gray-800">Message Sent!</h4>
              <p className="text-sm text-gray-600 mt-2">
                Thanks for reaching out — we'll get back to you shortly.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
              >
                OK
              </button>

              {/* Decorative glow */}
              <div className="absolute -inset-1 z-[-1] bg-gradient-to-tr from-blue-400 to-purple-500 opacity-10 rounded-2xl blur-2xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Product;
