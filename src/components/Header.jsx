import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import LogoImg from "../images/logo02.png";

const menuItems = {
  Startup: [
    "Proprietorship",
    "Partnership",
    "One Person Company",
    "Limited Liability Partnership",
    "Private Limited Company",
    "Section 8 Company",

    "Public Limited Company",
  ],
  Registration: [
    "Company Registration",
    "Startup India",
    "Trade License",
    "FSSAI Registration",
    "FSSAI License",
    "TN RERA Registration for Agents",
    "12A and 80G Registration",
    "12A Registration",
    "80G Registration",
    "Barcode Registration",
    "Digital Signature",
  ],

  GST: [
    "GST Registration",
    "GST Return Filing by Accountant",
    "GST Annual Return Filing (GSTR-9)",
    "GST E-Invoicing Software",
    "GST LUT Form",
    "GST Notice",
    "GST Registration for Foreigners",
    "GST Invoicing & Filing Software",
    "GST Amendment",
    "GST Revocation",
    "GSTR-10",
    "GST Software for Accountants",
  ],

  IncomeTax: [
    "Income Tax E-Filing",
    "ITR-1 Return Filing",
    "ITR-2 Return Filing",
    "ITR-3 Return Filing",
    "ITR-4 Return Filing",
    "ITR-5 Return Filing",
    "ITR-6 Return Filing",
    "ITR-7 Return Filing",
    "15CA - 15CB Filing",
    "TAN Registration",
    "TDS Return Filing",
    "Income Tax Notice",
  ],

  MCA: ["Winding Up - Company"],
  Compliance: [
    "Bookkeeping",
    "Proprietorship Compliance",
    "Partnership Compliance",
    "Professional Tax Return Filing",
    "ESI Return Filing",
    "PF Return Filing",
    "HR & Payroll",
    "Business Plan",
    "FSSAI Return Filing",
    "FSSAI Renewal",
  ],
  More: [
    "Contact Us",
    "About Us",
    "Services",
    "Testimonials",
    "Careers",
    "Our Blog",
  ],
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (key) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === key ? null : key);
    }
  };

  let timeout;
  const handleMouseEnter = (key) => {
    clearTimeout(timeout);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => setActiveDropdown(null), 100);
  };

  const handleDropdownItemClick = () => {
    // setActiveDropdown(null); // close dropdown
    if (isMobile) {
      // setMobileMenuOpen(false); // optionally close mobile menu too if you want
    }
  };

  const renderDropdown = (title, items, key) => (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && handleMouseEnter(key)}
      onMouseLeave={() => !isMobile && handleMouseLeave()}
    >
      {}
      <Link to={title !== "More" ? `/services-categories/${title}` : "/"}>
        <button
          onClick={() => toggleDropdown(key)}
          className="flex items-center gap-1 text-white hover:text-[#FF8C00] font-medium transition duration-200"
        >
          {title}
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </Link>

      {activeDropdown === key && (
        <div className="absolute left-0 mt-2 w-[28rem] bg-white rounded-md shadow-xl z-50 p-4 grid grid-cols-2 gap-2 animate-slideDown">
          {items.map((item, index) => (
            <Link
              key={index}
              to={title !== "More" ? `/services/${item}` : item.toLowerCase()}
            >
              <button
                onClick={handleDropdownItemClick} // <-- close dropdown on click
                className="text-left px-3 py-2 text-sm text-gray-700 rounded-md font-bold hover:bg-[#001F3F1a] hover:text-orange-600 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                {item}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-blue-950 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center h-full">
          <Link to="/" className="flex items-center">
            <img
              src={LogoImg}
              alt="Freedom Filling Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-grow space-x-6 items-center">
          {renderDropdown("Startup", menuItems.Startup, "Startup")}
          {renderDropdown(
            "Registration",
            menuItems.Registration,
            "Registration"
          )}
          {/* {renderDropdown("Trademark", menuItems.Trademark, "Trademark")} */}
          {renderDropdown("Compliance", menuItems.Compliance, "Compliance")}
          {renderDropdown("GST", menuItems.GST, "GST")}
          {renderDropdown("Income Tax", menuItems.IncomeTax, "IncomeTax")}
          {renderDropdown("MCA", menuItems.MCA, "MCA")}
          {renderDropdown("More", menuItems.More, "More")}

          <a
            href="/about us"
            className="text-white hover:text-[#FF8C00] font-medium transition duration-200"
          >
            About Us
          </a>
          <a
            href="tel:9958088591"
            className="text-white font-medium transition duration-200"
          >
            <button
              type="button"
              className="text-white bg-orange-700 hover:bg-orange-600 active:bg-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
            >
              Let's Talk
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#001F3F] px-4 pb-4 space-y-4">
          {Object.entries(menuItems).map(([section, items]) => (
            <div key={section}>
              <button
                onClick={() => toggleDropdown(section)}
                className="text-white font-medium flex items-center gap-1"
              >
                {section}
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {activeDropdown === section && (
                <div className="pl-4 mt-1">
                  {items.map((item, idx) => (
                    <p
                      key={idx}
                      className="text-white text-sm py-1 hover:text-[#FF8C00] transition duration-150"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#"
            className="text-white hover:text-[#FF8C00] block text-sm mt-2"
          >
            Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
