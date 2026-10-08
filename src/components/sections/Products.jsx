import React from "react";
import { useState, useEffect } from "react";

import CatalogFlipbook from "../catalog/CatalogFlipbook";

import imgDoors1 from "../../assets/imgDoors1.png";
import imgFrame12 from "../../assets/imgFrame12.png";
import imgFrame14 from "../../assets/imgFrame14.png";
import imgArrowDownOutline from "../../assets/imgArrowDownOutline.svg";

import catalogDoors from "../../assets/Doors.pdf?url";
import catalogWorkspaces from "../../assets/Workspaces.pdf?url";
import catalogPartitions from "../../assets/Partition.pdf?url";

const Categories = () => {
  const categoriesData = [
    {
      id: "01",
      title: "Doors",
      desc: "Aluminium and HPL door systems built for durability, precision, and a refined finish across every space.",
      image: imgDoors1,
      pdf: catalogDoors,
      ratio: 1.414,
    },
    {
      id: "02",
      title: "Workspaces",
      desc: "Workstations, desks, meeting tables and complete office systems.",
      image: imgFrame12,
      pdf: catalogWorkspaces,
      ratio: 1.414,
    },
    {
      id: "03",
      title: "Partitions",
      desc: "Flexible partition systems that define spaces while keeping them open.",
      image: imgFrame14,
      pdf: catalogPartitions,
      ratio: 1.414,
    },
  ];

  const [selectedPdf, setSelectedPdf] = useState(null);

  // Prevent page scrolling when modal is open
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPdf]);

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center font-['Inter']">
      {/* Top divider */}
      <div className="w-[85%] max-w-[873px] h-[2px] bg-[#f2bc65] mb-10"></div>

      {/* Categories */}
      <div className="w-full max-w-[1512px] px-4 md:px-10 lg:px-[64px] grid grid-cols-1 md:grid-cols-3 gap-[5px]">
        {categoriesData.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedPdf(category)}
            className="relative w-full h-[350px] md:h-[400px] lg:h-[435px] rounded-[5px] overflow-hidden group cursor-pointer"
          >
            {/* Background image */}
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex flex-col items-start w-[90%] md:w-[95%] lg:w-[85%]">
              {/* Number */}
              <p className="font-semibold text-[#89745c] text-[48px] lg:text-[64px] leading-none mb-1 md:mb-2">
                {category.id}
              </p>

              {/* Title */}
              <h3 className="font-semibold text-white text-[24px] lg:text-[32px] mb-2">
                {category.title}
              </h3>

              {/* Description */}
              <p className="font-normal text-white text-[14px] lg:text-[16px] leading-snug opacity-90 mb-4 max-w-[290px]">
                {category.desc}
              </p>

              {/* Explore */}
              <div className="flex items-center gap-2 mt-auto group/btn">
                <span className="font-normal text-[#89745c] text-[14px] lg:text-[16px] transition-colors group-hover/btn:text-white">
                  EXPLORE
                </span>

                <img
                  src={imgArrowDownOutline}
                  alt="Explore"
                  className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform group-hover/btn:translate-x-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="w-[85%] max-w-[873px] h-[2px] bg-[#f2bc65] mt-10"></div>

      {/* Flipbook Modal */}
      {selectedPdf && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
            p-4
            backdrop-blur-md
          "
          onClick={(e) => {
            // Close only when clicking the overlay itself
            if (e.target === e.currentTarget) {
              setSelectedPdf(null);
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPdf(null)}
            className="
              absolute
              right-6
              top-6
              z-[60]
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/20
              text-xl
              text-white
              shadow-lg
              transition-colors
              hover:bg-[#C9362B]
              md:right-10
              md:top-10
            "
            aria-label="Close catalog"
          >
            ✕
          </button>

          {/* Flipbook Container */}
          <div
            className="
              flex
              h-[85vh]
              w-full
              max-w-5xl
              items-center
              justify-center
            "
          >
            <CatalogFlipbook
              pdfFile={selectedPdf.pdf}
              ratio={selectedPdf.ratio}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Categories;