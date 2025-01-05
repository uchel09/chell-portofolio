import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white fixed w-full z-10 ">
      <div className="max-w-7xl mx-auto px-[20px] sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer  bg-gradient-to-r text-transparent bg-clip-text from-[#ff014f] via-[#ff00ff] to-[#ffce3c] font-bold"
          >
            Chell Porto
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            "home",
            "about",
            "skills",
            "projects",
            "experiences",
            "contact",
          ].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[24px] text-[20px] capitalize transition-colors duration-300  bg-gradient-to-r text-transparent bg-clip-text from-[#ff014f] via-[#ff00ff] to-[#ffce3c] font-bold"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-[rgba(230,213,213,0.5)] flex-1  text-black overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {["home", "about", "skills", "projects", "experiences", "contact"].map(
          (item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              className="block px-4 py-2 text-sm hover:bg-white  hover:text-black capitalize transition-colors duration-300 bg-gradient-to-r text-transparent bg-clip-text from-[#ff014f] via-[#ff00ff] to-[#ffce3c] font-bold cursor-pointer hover:translate-x-2"
              onClick={() => {}} // Tutup menu saat klik
            >
              {item}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
