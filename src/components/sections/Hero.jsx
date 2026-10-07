import React from 'react';
import backgroundDesktop from '../../assets/desktopbackground.png';
import backgroundMobile from '../../assets/mobileBackground.png';

const Hero = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white font-['Inter']
        h-[calc(100vh-64px)] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[650px]
      "
    >
      <div className="absolute inset-0 w-full h-full mx-auto">
        
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 z-0 bg-white">
          {/* Desktop */}
          <img
            src={backgroundDesktop}
            alt=""
            aria-hidden="true"
            className="
              absolute inset-0 w-full h-full object-cover object-[63%_20%]
              transition-opacity duration-1000 ease-in-out
              opacity-0 md:opacity-100
            "
          />

          {/* Mobile */}
          <img
            src={backgroundMobile}
            alt=""
            aria-hidden="true"
            className="
              absolute inset-0 w-full h-full object-cover object-[50%_30%]
              transition-opacity duration-1000 ease-in-out
              opacity-100 md:opacity-0
            "
          />
        </div>

        {/* ================= TEXT CONTENT ================= */}
        <div
          className="
            absolute
            w-[90%] max-w-[480px] text-center left-1/2 -translate-x-1/2 top-[7%]
            md:w-[40%] md:max-w-none md:text-left md:left-[6%] md:translate-x-0 md:top-[20%]
            lg:w-[50%] lg:top-[25%]
          "
        >
          {/* ================= TITLE ================= */}
          <h2
            className="
              font-bold text-black tracking-[-1px] mb-[2%] leading-[1.05]
              text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]
            "
          >
            COMPLETE SOLUTIONS FOR
            <br />
            <span className="text-[#C9362B]">MODERN</span> WORKSPACES.
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              font-light text-[rgba(0,0,0,0.72)] w-full leading-relaxed
              text-[15px] md:text-[16px] lg:text-base md:mb-[20%]
            "
          >
            From office doors to furniture, we create spaces designed
            <br className="hidden md:block" />
            around performance, comfort, and style.
          </p>

          {/* ================= EXPLORE MORE BUTTON ================= */}
          {/* تم دمج نسخة الموبايل والديسكتوب في عنصر واحد */}
          <button
            className="
              absolute md:relative
              top-[calc(100vh-230px)] md:top-auto
              left-1/2 md:left-auto
              -translate-x-1/2 md:translate-x-0
              flex items-center justify-center md:justify-start gap-3
              whitespace-nowrap w-full group cursor-pointer
            "
            aria-label="Explore More"
          >
            <span
              className="
                w-8 h-8 rounded-full border border-[#C9362B] text-[#C9362B]
                flex items-center justify-center shrink-0
                transition-colors duration-300
                group-hover:bg-[#C9362B] group-hover:text-white
              "
              aria-hidden="true"
            >
              ↓
            </span>
            <span
              className="
                text-[10px] tracking-[0.25em] uppercase text-black
                transition-colors duration-300
                group-hover:text-[#C9362B]
              "
            >
              Explore More
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;