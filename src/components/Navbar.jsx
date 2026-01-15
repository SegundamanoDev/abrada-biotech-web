import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO SECTION */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 rounded-xl flex items-center justify-center p-1 group-hover:bg-[#FFD600] transition-colors duration-300">
              {/* If you have the image in assets, use: src="/logo.png" or your imported variable */}
              <img
                src="/logo.png"
                alt="Abrada Biotech Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black text-[#1B4332] leading-none tracking-tight">
                ABRADA-BIOTECH
              </span>
              <span className="text-[8px] md:text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                Engineering Academy
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-10">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-bold text-gray-500 hover:text-[#1B4332] transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD600] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/training"
              className="bg-[#1B4332] text-[#FFD600] px-6 py-2.5 rounded-full text-sm font-black tracking-wide hover:bg-green-800 transition shadow-md hover:shadow-xl active:scale-95"
            >
              ENROLL NOW
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1B4332] p-2 focus:outline-none"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end relative">
                <span
                  className={`h-0.5 bg-[#1B4332] transition-all duration-300 ${
                    isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-[#1B4332] transition-all duration-300 ${
                    isOpen ? "opacity-0" : "w-4"
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-[#1B4332] transition-all duration-300 ${
                    isOpen ? "w-6 -rotate-45 -translate-y-2.5" : "w-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-6 space-y-4">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <Link
              key={item}
              onClick={() => setIsOpen(false)}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-xl font-bold text-gray-800 hover:text-[#1B4332]"
            >
              {item}
            </Link>
          ))}
          <Link
            onClick={() => setIsOpen(false)}
            to="/training"
            className="block bg-[#1B4332] text-[#FFD600] p-4 rounded-2xl text-center font-black tracking-widest"
          >
            START TRAINING
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
