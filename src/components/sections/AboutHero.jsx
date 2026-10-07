import React from 'react';

import imgAboutSection1 from '../../assets/imgAboutSection1.png';
import imgVector from '../../assets/imgVector.svg';
import imgVector1 from '../../assets/imgVector1.svg';
import imgRectangle27 from '../../assets/imgRectangle27.svg';

const AboutHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start overflow-hidden relative w-full font-['Inter'] ">

      {/* الجزء الأيسر: النصوص والأرقام */}
      {/* التعديل هنا: تم تغيير h-auto lg:h-[556px] إلى min-h-[100vh] */}
      <div className="bg-white flex flex-col  lg:min-h-[calc(100vh-64px)] relative w-full lg:w-[45%] z-20 order-1 px-6 md:px-12 lg:pl-[80px] lg:pr-10 py-10 lg:py-0 lg:justify-center ">        
        
        {/* كلمة ABOUT US */}
        {/* <div className="mb-[150px] mt-[64px] flex items-center gap-4">
          <span className="h-[1px] w-10 bg-[#C9362B]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
            About Us
          </span>
        </div> */}

        {/* العنوان والفقرة والزرار */}
        <div className="flex flex-col items-start   gap-6 w-full lg:max-w-[480px] ">
          <h2 className="font-bold leading-[1.05] text-[40px] md:text-[50px] lg:text-[64px] text-black tracking-[-1px]">
            WHO <span className='text-[#C9362B]'>WE</span> <br /> ARE.
          </h2>
          {/* الفقرة هتاخد عرض الشاشة بالكامل */}
          <p className="font-light leading-relaxed text-[15px] md:text-[16px] lg:text-base text-[rgba(0,0,0,0.72)] w-full ">
            Trendy Office is a specialized company providing integrated solutions in the design, implementation, and supply of doors, partitions, furnishings, and accessories for office and commercial spaces.
          </p>

          <button className="group flex items-center gap-3 bg-[#252525] hover:bg-black text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-md transition-all duration-300 mt-2 shadow-sm hover:shadow-md cursor-pointer">
            <span className="font-medium text-base lg:text-[17px] tracking-wide">Build Your Space</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* قسم الأرقام والإحصائيات */}
        <div className="flex flex-row justify-between lg:justify-start lg:gap-10 mt-10 lg:mt-12 w-full border-t lg:border-t-0 border-gray-200 pt-8 lg:pt-0">
          
          <div className="flex flex-col gap-1 items-start">
            <span className="font-semibold text-[#89745c] text-[32px] md:text-[42px] lg:text-[46px] leading-none">15+</span>
            <span className="font-normal text-[12px] md:text-[15px] text-[rgba(28,28,28,0.78)] leading-snug">Years of<br/>Experience</span>
          </div>
          
          {/* الخط الفاصل */}
          <div className="hidden lg:block bg-[rgba(0,0,0,0.3)] h-[50px] w-[1px]" />
          
          <div className="flex flex-col gap-1 items-start">
            <span className="font-semibold text-[#89745c] text-[32px] md:text-[42px] lg:text-[46px] leading-none">200+</span>
            <span className="font-normal text-[12px] md:text-[15px] text-[rgba(28,28,28,0.78)] leading-snug">Projects<br/>Completed</span>
          </div>
          
          <div className="hidden lg:block bg-[rgba(0,0,0,0.3)] h-[50px] w-[1px]" />
          
          <div className="flex flex-col gap-1 items-start">
            <span className="font-semibold text-[#89745c] text-[32px] md:text-[42px] lg:text-[46px] leading-none">5+</span>
            <span className="font-normal text-[12px] md:text-[15px] text-[rgba(28,28,28,0.78)] leading-snug">Sectors<br/>Served</span>
          </div>
          
        </div>
      </div>

      {/* الجزء الأيمن: الصورة والنص الجانبي */}
      {/* التعديل هنا: تم تغيير lg:h-[556px] إلى lg:min-h-[100vh] عشان الصورة تساوي الكلام في الشاشات الكبيرة */}
      <div className="relative h-[350px] md:h-[450px] lg:min-h-[100vh] w-full lg:w-[55%] z-10 order-2 mt-2 lg:mt-0">

        {/* التدرج اللوني - مخفي في الموبايل وظاهر في الديسكتوب بس */}
        <div className="hidden lg:block absolute top-0 left-0 w-[150px] h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

        <div className="absolute inset-0 w-full h-full">
          <img alt="Trendy Office Workspace" className="w-full h-full object-cover pointer-events-none object-center" src={imgAboutSection1} />
        </div>

        <div className="hidden md:flex absolute right-[5%] lg:right-[15%] top-[50%] lg:top-[30%] -translate-y-1/2 lg:translate-y-0 flex-col gap-2.5 items-start justify-center p-2.5 z-30">
          <div className="flex items-center justify-center w-8">
            <div className="-scale-y-100 rotate-90">
              <img alt="Divider" className="w-8 h-[1px]" src={imgRectangle27} />
            </div>
          </div>
          <p className="font-light leading-normal text-xs text-[#89745c] whitespace-nowrap">
            QUALITY
            <br />
            PRECISION
            <br />
            EXPERIENCE
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutHero;