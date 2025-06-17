import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Compliances from "../images/comliance.jpg";
import Gst from "../images/gst.webp";
import TaxPlaning from "../images/tax-planning.png";
import { Link } from "react-router-dom";
const carouselItems = [
  {
    image: Gst,
    heading: "GST Advisory",
    subHeading: "Simplify GST Filing",
    details: "Get expert help with GST registration, returns, and audits.",
  },
  {
    image: TaxPlaning,
    heading: "Tax Planning",
    subHeading: "Smart Strategies for Growth",
    details:
      "We help individuals and businesses reduce tax liabilities through expert planning.",
  },
  {
    image: Compliances,
    heading: "Compliance Services",
    subHeading: "Stay Ahead of Regulations",
    details:
      "Ensure your business stays compliant with our timely tax and regulatory services.",
  },
  {
    image: Gst,
    heading: "GST Advisory",
    subHeading: "Simplify GST Filing",
    details: "Get expert help with GST registration, returns, and audits.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );

  // ⏱ Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    // <div className="bg-gray-100 p-20  ">
    //   {/* Navigation */}
    //   <nav className="flex justify-between items-center pt-5">
    //     <div className="text-sm text-gray-700 space-x-2  font-bold">
    //       <span className="text-[#1f3c88]">ITR</span>
    //       <span className="text-gray-400">|</span>
    //       <span className="text-[#1f3c88]">GST</span>
    //       <span className="text-gray-400">|</span>
    //       <span className="text-[#1f3c88]">Accounting</span>
    //       <span className="text-gray-400">|</span>
    //       <span className="text-[#1f3c88]">Taxation Services</span>
    //     </div>
    //   </nav>
    //   {/* Hero Section */}
    //   <motion.div
    //     initial={{ opacity: 0, y: -30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-5"
    //   >
    //     {/* Left Column */}
    //     <div>
    //       {/* Heading with highlight */}
    //       <h1 className="text-4xl font-bold text-[#1f3c88] leading-snug">
    //         Business <span className="text-[#ff6b00]">Consulting</span> <br />
    //         All <span className="text-[#ff6b00]">Solutions</span> in One Place
    //       </h1>

    //       {/* Subheading */}
    //       <p className="mt-4 text-lg text-gray-800 font-medium">
    //         <span className="text-[#1f3c88]  font-semibold">Apana Filing </span>{" "}
    //         helps you turn your data into a{" "}
    //         <span className="text-[#ff6b00] font-semibold">
    //           strategic asset
    //         </span>{" "}
    //         and gain powerful business insights.
    //       </p>

    //       {/* Services List */}
    //       <div className="mt-8 grid grid-cols-2 gap-6 text-base font-medium text-gray-900">
    //         {/* Left Column */}
    //         <div className="space-y-4">
    //           {["Startup", "Trademark", "Income Tax"].map((item, index) => (
    //             <div
    //               key={index}
    //               className="flex items-center hover:translate-x-1 transition-transform duration-200"
    //             >
    //               <span className="w-7 h-7 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow-md mr-3">
    //                 <svg
    //                   className="w-4 h-4"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth="3"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M5 13l4 4L19 7"
    //                   />
    //                 </svg>
    //               </span>
    //               {item}
    //             </div>
    //           ))}
    //         </div>

    //         {/* Right Column */}
    //         <div className="space-y-4">
    //           {["Registrations", "GST", "MCA"].map((item, index) => (
    //             <div
    //               key={index}
    //               className="flex items-center hover:translate-x-1 transition-transform duration-200"
    //             >
    //               <span className="w-7 h-7 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow-md mr-3">
    //                 <svg
    //                   className="w-4 h-4"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth="3"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M5 13l4 4L19 7"
    //                   />
    //                 </svg>
    //               </span>
    //               {item}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Column */}

    //     <motion.div
    //       initial={{ scale: 0.8 }}
    //       animate={{ scale: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className="text-center"
    //     >
    //       {/* Carousel */}
    //       <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden ">
    //         <img
    //           src={carouselItems[currentIndex].image}
    //           alt={carouselItems[currentIndex].heading}
    //           className="w-full h-60 object-cover rounded-lg transition-all duration-500"
    //         />
    //         <div className="p-4 bg-blue-950">
    //           <h3 className="text-lg font-bold text-[#ff6b00] ">
    //             {carouselItems[currentIndex].heading}
    //           </h3>
    //           <p className="text-sm text-white">
    //             {carouselItems[currentIndex].subHeading}
    //           </p>
    //           <p className="mt-2 text-sm text-white">
    //             {carouselItems[currentIndex].details}
    //           </p>
    //           <button
    //             type="button"
    //             className="text-white mt-4 bg-orange-500 hover:bg-orange-400 active:bg-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
    //           >
    //             Know More ➡
    //           </button>
    //         </div>

    //         {/* Navigation Arrows */}
    //         <div className="absolute inset-y-0 left-0 flex  items-center">
    //           <button
    //             onClick={prevSlide}
    //             className="p-2 text-gray-600 hover:text-[#1f3c88]"
    //           >
    //             <ChevronLeft size={24} />
    //           </button>
    //         </div>
    //         <div className="absolute inset-y-0 right-0 flex items-center">
    //           <button
    //             onClick={nextSlide}
    //             className="p-2 text-gray-600 hover:text-[#1f3c88]"
    //           >
    //             <ChevronRight size={24} />
    //           </button>
    //         </div>
    //       </div>
    //     </motion.div>
    //   </motion.div>
    // </div>
    <div className="bg-gray-100 px-4 py-10 md:px-10 lg:px-20">
      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center pt-5 text-center">
        <div className="text-sm text-gray-700 space-x-2 font-bold">
          <span className="text-[#1f3c88]">ITR</span>
          <span className="text-gray-400">|</span>
          <span className="text-[#1f3c88]">GST</span>
          <span className="text-gray-400">|</span>
          <span className="text-[#1f3c88]">Accounting</span>
          <span className="text-gray-400">|</span>
          <span className="text-[#1f3c88]">Taxation Services</span>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-5"
      >
        {/* Left Column */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#1f3c88] leading-snug">
            Business <span className="text-[#ff6b00]">Consulting</span> <br />
            All <span className="text-[#ff6b00]">Solutions</span> in One Place
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-800 font-medium">
            <span className="text-[#1f3c88] font-semibold">Apana Filing </span>
            helps you turn your data into a{" "}
            <span className="text-[#ff6b00] font-semibold">
              strategic asset
            </span>{" "}
            and gain powerful business insights.
          </p>

          {/* Services List */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-base font-medium text-gray-900">
            {/* Left Column */}
            <div className="space-y-4">
              {["Startup", "Trademark", "Income Tax"].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-7 h-7 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow-md mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>

                  <Link to={`/services-categories/${item}`}>{item}</Link>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {["Registration", "GST", "MCA"].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-7 h-7 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow-md mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>

                  <Link to={`/services-categories/${item}`}>{item}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={carouselItems[currentIndex].image}
              alt={carouselItems[currentIndex].heading}
              className="w-full h-60 object-cover rounded-lg transition-all duration-500"
            />
            <div className="p-4 bg-blue-950">
              <h3 className="text-lg font-bold text-[#ff6b00]">
                {carouselItems[currentIndex].heading}
              </h3>
              <p className="text-sm text-white">
                {carouselItems[currentIndex].subHeading}
              </p>
              <p className="mt-2 text-sm text-white">
                {carouselItems[currentIndex].details}
              </p>
              <button
                type="button"
                className="text-white mt-4 bg-orange-500 hover:bg-orange-400 active:bg-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
              >
                Know More ➡
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevSlide}
                className="p-2 text-gray-600 hover:text-[#1f3c88]"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextSlide}
                className="p-2 text-gray-600 hover:text-[#1f3c88]"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
