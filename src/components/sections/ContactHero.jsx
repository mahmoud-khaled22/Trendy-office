import React from 'react';

const ContactHero = () => {
  return (
    <section className="w-full bg-white  pb-24 border-b border-gray-100 font-['Inter']">
      <div className=" mx-auto px-6 md:px-[64px] lg:px-[120px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        
        {/* الجزء الأيسر: العنوان الكبير */}
        <div className="flex flex-col gap-6 lg:w-[60%]">
          {/* <div className="flex items-center gap-4">
            <span className="text-[12px] font-bold text-[#444748] tracking-[3px] uppercase">
              Contact Us
            </span>
            <div className="w-[40px] h-[1px] bg-[#e2e2e2]"></div>
          </div> */}
          <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold uppercase leading-[1.05] tracking-[-1.5px] text-black">
            Let's Build<br /><span className='text-[#C9362B]'>Your</span> Space.
          </h1>
        </div>

        {/* الجزء الأيمن: الوصف */}
        <div className="lg:w-[30%]">
          <p className="text-[15px] font-light text-[#444748] leading-[26px]">
            Have a project in mind? Tell us what you need and our architectural consulting team will get back to you within 24 hours.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;