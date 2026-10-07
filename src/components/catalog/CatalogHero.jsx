import { useState, useEffect } from "react";
import CatalogFlipbook from "./CatalogFlipbook";

import catalog1Pdf from "../../assets/catalog.pdf?url";
import cover from "../../assets/cover.png"
// import catalog2Pdf from "../../assets/catalog2.pdf?url";

// Catalogs
const catalogsList = [
  {
    id: 1,
    title: "Modern Office",
    cover: cover,
    pdf: catalog1Pdf,
    ratio: 1.414,
  },

  // {
  //   id: 2,
  //   title: "Executive Desks",
  //   cover: "/catalog-cover-2.jpg",
  //   pdf: catalog2Pdf,
  //   ratio: 1.414,
  // },
];

const CatalogHero = () => {
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
    <section className="relatie min-h-screen  px-[64px] py-14 bg-white">

      <div className="mx-auto ">

        {/* ================= HEADER ================= */}
        {/* <div className="flex items-center gap-4">

          <span className="h-[1px] w-10 bg-[#C9362B]" />

          <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
            Our Catalog
          </span>

        </div> */}


        {/* ================= HERO ================= */}
        <div className="grid items-center  lg:grid-cols-[0.85fr_1.15fr]  ">

          {/* ================= LEFT ================= */}
          <div className="mt-[48px] ">

            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                text-[#172033]

                md:text-6xl
                lg:text-7xl
              "
            >
              Explore Our

              <br />

              <span className="text-[#C9362B]">
                Collection
              </span>
            </h1>


            <p
              className="
                mt-7
                max-w-lg
                text-base
                leading-8
                text-gray-500

                md:text-lg
              "
            >
              Discover our collection of premium office furniture,
              executive desks, workstations and modern doors designed
              for elegant and functional spaces.
            </p>


           

            {/* ================= STATS ================= */}
            <div
              className="
                mt-12
                grid
                
                grid-cols-3
                border-t
                border-gray-300
                pt-7
                w-full
                
              "
            >

              {/* Products */}
              <div>

                <p className="text-2xl font-semibold text-[#172033]">
                  100+
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">
                  Products
                </p>

              </div>


              {/* Years */}
              <div className="border-l border-gray-300 pl-5">

                <p className="text-2xl font-semibold text-[#172033]">
                  15+
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">
                  Years
                </p>

              </div>


              {/* Solutions */}
              <div className="border-l border-gray-300 pl-5">

                <p className="text-2xl font-semibold text-[#172033]">
                  Custom
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">
                  Solutions
                </p>

              </div>

            </div>

          </div>


          {/* ================= RIGHT / CATALOG ================= */}
          <div className="flex items-center justify-center ">

            {catalogsList.map((cat) => (

              <div
                key={cat.id}
                onClick={() => setSelectedPdf(cat)}
                className="
                  group
                  relative
                  w-[260px]
                  cursor-pointer

                  sm:w-[300px]
                  md:w-[340px]
                  lg:w-[390px]
                  xl:w-[430px]
                "
              >

                {/* Decorative Back Layer */}
                <div
                  className="
                    absolute
                    -bottom-5
                    -right-5
                    h-full
                    w-full
                    rounded-2xl
                    bg-[#E9E5DE]
                    transition-all
                    duration-500

                    group-hover:translate-x-2
                    group-hover:translate-y-2
                  "
                />


                {/* Catalog Card */}
                <div
                  className="
                    relative
                    z-10
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-500

                    group-hover:-translate-y-2
                    group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]
                  "
                >

                  {/* Cover */}
                  <img
                    src={cat.cover}
                    alt={cat.title}
                    className="
                      block
                      aspect-[1/1.414]
                      w-full
                      object-cover
                    "
                  />


                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/35
                      opacity-0
                      transition-opacity
                      duration-300

                      group-hover:opacity-100
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-full
                        bg-white
                        px-6
                        py-3
                        text-sm
                        font-medium
                        text-[#172033]
                        shadow-xl
                      "
                    >

                      <span>
                        Read Catalog
                      </span>

                      <span className="text-[#C9362B]">
                        →
                      </span>

                    </div>

                  </div>

                </div>


                {/* Catalog Label */}
                <div
                  className="
                    relative
                    z-20
                    mt-5
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                      Catalog
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-[#172033]">
                      {cat.title}
                    </h3>

                  </div>


                  <span className="text-xl text-[#C9362B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= MODAL ================= */}
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

export default CatalogHero;