import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import db from "../assets/product-categories.json";
// All images
import bannerImg from "../images/banner01.jpg";
import gstImg from "../images/gst.webp";
import startupImg from "../images/startup.jpg";
import registrationsImg from "../images/registration.webp";
import mcaImg from "../images/mca.jpg";
import incomtaxImg from "../images/income-tax.png";
import complienceImg from "../images/comliance.jpg";

const StartupCards = () => {
  const [services, setServices] = useState([]);
  const [img, setImg] = useState(bannerImg);

  const param = useParams();

  useEffect(() => {
    console.log(param);

    if (Object.keys(db).includes(param.id)) {
      console.log(db[param.id]);
      setServices(db[param.id]);
    }
    if (param.id === "Startup") {
      setImg(startupImg);
    } else if (param.id === "Registration") {
      setImg(registrationsImg);
    } else if (param.id === "Compliance") {
      setImg(complienceImg);
    } else if (param.id === "GST") {
      setImg(gstImg);
    } else if (param.id === "Income Tax") {
      setImg(incomtaxImg);
    } else if (param.id === "MCA") {
      setImg(mcaImg);
    }
  }, [param.id]);

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative py-20  px-10 rounded-lg mb-6 text-start text-white"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Optional: overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

          {/* Heading content with relative positioning so it sits above the overlay */}
          <h1 className="relative text-4xl  font-extrabold drop-shadow-lg z-10">
            {param.id}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-4 cursor-pointer"
            >
              <h1 class="text-4xl w-100 p-1  object-cover  md:text-4xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-500 drop-shadow-lg tracking-widest hover:animate-pulse">
                {item.title}
              </h1>

              <div className="mt-4">
                <h3 className="text-md font-bold text-[#1f3c88] truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.content}
                </p>

                <Link
                  to={item.link}
                  className="inline-flex items-center mt-4 text-[#1f3c88] font-semibold text-sm group transition-all duration-300 px-4 py-2 rounded-md border border-[#1f3c88] hover:bg-[#1f3c88] hover:text-white"
                >
                  READ MORE
                  <ArrowRight
                    className="ml-2 transform group-hover:translate-x-1 transition-all duration-300"
                    size={16}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupCards;
