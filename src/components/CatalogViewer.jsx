import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

import datasheet from "../assets/Datasheet.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js Worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const CatalogViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(450);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPageWidth(280);
      } else if (window.innerWidth < 1024) {
        setPageWidth(380);
      } else {
        setPageWidth(450);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadSuccess = ({ numPages }) => {
    console.log("✅ PDF loaded:", numPages, "pages");
    setNumPages(numPages);
  };

  const handleLoadError = (error) => {
    console.error("❌ PDF LOAD ERROR");
    console.error("Message:", error?.message);
    console.error("Name:", error?.name);
    console.error("Status:", error?.status);
    console.error("Full error:", error);

    console.log("PDF URL:", datasheet);
  };

  return (
    <section className="min-h-screen bg-[#f5f3ef] py-16 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Our Catalog
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#172033] mt-3">
          Product Catalog
        </h1>

        <p className="text-gray-500 mt-4">
          Explore our products and solutions
        </p>
      </div>

      {/* PDF */}
      <Document
        file={datasheet}
        onLoadSuccess={handleLoadSuccess}
        onLoadError={handleLoadError}
        loading={
          <div className="flex justify-center py-20">
            <p className="text-gray-500">
              Loading catalog...
            </p>
          </div>
        }
        error={
          <div className="flex justify-center py-20">
            <p className="text-red-500">
              Failed to load catalog.
            </p>
          </div>
        }
      >
        {numPages && (
          <div className="flex justify-center">

            <HTMLFlipBook
              width={pageWidth}
              height={pageWidth * 1.414}
              size="fixed"
              minWidth={280}
              maxWidth={500}
              minHeight={400}
              maxHeight={750}
              showCover={true}
              mobileScrollSupport={true}
              drawShadow={true}
              maxShadowOpacity={0.35}
              usePortrait={true}
              startPage={0}
              autoSize={true}
              flippingTime={800}
              showPageCorners={true}
              className="catalog-book"
            >
              {Array.from({ length: numPages }, (_, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden"
                >
                  <Page
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </HTMLFlipBook>

          </div>
        )}
      </Document>

    </section>
  );
};

export default CatalogViewer;