import React from 'react';

// استيراد صورة الخلفية للسكشن (صورة المكتب الغامقة)
import imgDarkOffice from '../../assets/imgDarkOffice.png';

const ContactCTA = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center font-['Inter']">
      
      {/* خلفية الصورة مع Overlay غامق */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgDarkOffice} 
          alt="Trendy Office Team Meeting" 
          className="w-full h-full object-cover"
        />
        {/* Overlay أسود شفاف لتوضيح النص
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      </div>

      {/* المحتوى (النص والزر) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[800px] mx-auto">
        
        <span className="text-[10px] md:text-[12px] font-bold text-white uppercase tracking-[3px] border border-[rgba(255,255,255,0.2)] px-4 py-1.5 mb-6">
          Collaborate With Our Team
        </span>
        
        <h2 className="text-[36px] md:text-[56px] font-bold text-white leading-[1.1] mb-6 uppercase tracking-tight">
          Ready to Start Your<br />Project?
        </h2>
        
        <p className="text-[14px] md:text-[16px] text-gray-300 font-light mb-10 max-w-[600px] leading-relaxed">
          Let's create a workspace that works for you. From acoustic single glass doors to multi-story partition wall fit-outs across the Middle East.
        </p>
        
        <a 
          href="#" 
          className="group border border-white text-white px-8 py-3.5 flex items-center gap-3 hover:bg-white hover:text-black transition-colors duration-300"
        >
          <span className="text-[12px] font-bold uppercase tracking-[2px]">Explore Projects</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

      </div>
    </section>
  );
};

export default ContactCTA;