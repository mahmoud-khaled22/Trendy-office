import React, { useEffect, useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PageWrapper = forwardRef(({ pageNumber, width }, ref) => {
  return (
    <div ref={ref} className="bg-white overflow-hidden shadow-xl flex justify-center items-center">
      <Page
        pageNumber={pageNumber}
        width={width}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </div>
  );
});

// نستقبل ratio هنا (ومعاه قيمة افتراضية لو مش موجود)
const CatalogFlipbook = ({ pdfFile, ratio = 1.414 }) => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(400);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);

      if (screenWidth < 640) {
        setWidth(screenWidth - 40); 
      } else if (screenWidth < 1024) {
        setWidth(300);
      } else if (screenWidth < 1280) {
        setWidth(360);
      } else {
        setWidth(400);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <Document
        file={pdfFile}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => console.error("Catalog PDF Error:", error)}
        loading={
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="w-14 h-14 border-4 border-white/20 border-t-[#C9362B] rounded-full animate-spin"></div>
            <p className="text-white text-lg font-medium tracking-wide">
              Loading Catalog...
            </p>
            <p className="text-gray-400 text-sm">
              Please wait, optimizing pages
            </p>
          </div>
        }
      >
        {numPages && (
          <HTMLFlipBook
            key={isMobile ? "mobile" : "desktop"} 
            width={width}
            height={width * ratio} // هنا التغيير الأساسي: هيتغير الطول حسب نسبة الملف
            size="fixed"
            minWidth={260}
            maxWidth={450}
            minHeight={360}
            maxHeight={650}
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            maxShadowOpacity={0.5}
            usePortrait={isMobile}
            flippingTime={800}
            showPageCorners={true}
            className="catalog-flipbook mx-auto"
          >
            {Array.from({ length: numPages }, (_, index) => (
              <PageWrapper key={index} pageNumber={index + 1} width={width} />
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
};

export default CatalogFlipbook;