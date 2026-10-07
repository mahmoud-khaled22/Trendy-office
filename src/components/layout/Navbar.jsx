import React, { useState, useEffect } from "react";
import logo from "../../assets/imgLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop / Mobile link styling
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-[#C9362B]"
        : "text-gray-600 hover:text-[#C9362B]"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `text-base md:text-lg font-medium border-b pb-2 transition-colors duration-300 ${
      isActive
        ? "text-[#C9362B] border-[#C9362B]"
        : "text-gray-600 border-gray-200 hover:text-black"
    }`;

  return (
    <header className="flex justify-between items-center py-4 px-5 md:px-8 lg:px-12 xl:px-16 bg-white relative z-50">

      {/* ================= LOGO ================= */}
      <div className="flex items-center gap-2 lg:gap-3 relative z-50">
        <img
          src={logo}
          alt="Trendy Office"
          className="h-7 md:h-8 lg:h-10 object-contain"
        />

        <span className="font-extrabold text-base md:text-xl lg:text-2xl tracking-wide text-gray-800 whitespace-nowrap">
          TRENDY OFFICE
        </span>
      </div>


      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-10 font-medium text-[14px] xl:text-[15px]">

        <NavLink
          to="/"
          end
          className={navLinkClass}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={navLinkClass}
        >
          About Us
        </NavLink>

        <NavLink
          to="/catalog"
          className={navLinkClass}
        >
          Catalog
        </NavLink>

        <NavLink
          to="/contact"
          className={navLinkClass}
        >
          Contact
        </NavLink>

      </nav>

           
              

      {/* ================= DESKTOP START PROJECT ================= */}
      <a
        href="https://wa.me/201002662603?text=Hello%20Trendy%20Office,%20I%20would%20like%20to%20discuss%20starting%20a%20new%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="
          hidden
          lg:flex
          items-center
          justify-center
          gap-2
          border
          border-black
          rounded
          px-6
          py-2.5
          text-[13px]
          font-bold
          uppercase
          tracking-[1px]
          text-black
          hover:bg-black
          hover:text-white
          transition-colors
          duration-300
          cursor-pointer
        "
      >

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>

        Start a Project

      </a>


      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        className="
          lg:hidden
          flex
          flex-col
          gap-[5px]
          p-2
          relative
          z-50
          cursor-pointer
        "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >

        <div
          className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
            isMenuOpen
              ? "rotate-45 translate-y-[7px]"
              : ""
          }`}
        />

        <div
          className={`w-6 h-[2px] bg-black transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />

        <div
          className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
            isMenuOpen
              ? "-rotate-45 -translate-y-[7px]"
              : ""
          }`}
        />

      </button>


      {/* ================= MOBILE SIDE MENU ================= */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[75%]
          sm:w-[60%]
          md:w-[40%]
          bg-white
          shadow-2xl
          transform
          transition-transform
          duration-300
          ease-in-out
          flex
          flex-col
          pt-24
          px-8
          gap-6
          z-40

          ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        <NavLink
          to="/"
          end
          onClick={() => setIsMenuOpen(false)}
          className={mobileNavLinkClass}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          className={mobileNavLinkClass}
        >
          About Us
        </NavLink>

        <NavLink
          to="/catalog"
          onClick={() => setIsMenuOpen(false)}
          className={mobileNavLinkClass}
        >
          Catalog
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className={mobileNavLinkClass}
        >
          Contact
        </NavLink>


        {/* Mobile WhatsApp */}
        <a
          href="https://wa.me/201002662603?text=Hello%20Trendy%20Office,%20I%20would%20like%20to%20discuss%20starting%20a%20new%20project."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
          className="
            flex
            items-center
            justify-center
            gap-2
            w-full
            border
            rounded
            border-black
            px-6
            py-2.5
            text-[13px]
            font-bold
            uppercase
            tracking-[1px]
            text-black
            hover:bg-black
            hover:text-white
            transition-colors
            duration-300
            cursor-pointer
            mt-2
          "
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>

          Start a Project

        </a>

      </div>


      {/* ================= OVERLAY ================= */}
      {isMenuOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-30
            lg:hidden
          "
          onClick={() => setIsMenuOpen(false)}
        />
      )}

    </header>
  );
};

export default Navbar;