import React from 'react';
import imgOfficeSpace from '../../assets/imgSpace1.png'; 

const ContactSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row font-['Inter'] border-b border-gray-200">
      

      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">

        <img 
          src={imgOfficeSpace} 
          alt="Modern Office Space" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        

        <div className="absolute inset-0 bg-black/20"></div>


        <div className="relative z-10 flex items-center h-full p-8 md:p-10 lg:p-16">
          <h2 className="text-white text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.1] uppercase tracking-tight">
            LET'S BUILD <br /> YOUR SPACE.
          </h2>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 lg:p-16 flex flex-col justify-center">
        
        <h3 className="text-black text-[28px] md:text-[32px] font-bold uppercase mb-6 md:mb-8">
          GET IN TOUCH
        </h3>
        
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col md:flex-row gap-4">
            
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-[#444748] uppercase tracking-[0.55px]">
                Full Name <span className="text-[#dc3129]">*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. Basel Mohamed" 
                className="border border-[#e2e2e2] p-3 text-[14px] text-black placeholder:text-[#c4c7c7] focus:outline-none focus:border-black transition-colors rounded-[3px]"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-[#444748] uppercase tracking-[0.55px]">
                Phone Number
              </label>
              <input 
                type="tel" 
                placeholder="+20 100 000 0000" 
                className="border border-[#e2e2e2] p-3 text-[14px] text-black placeholder:text-[#c4c7c7] focus:outline-none focus:border-black transition-colors rounded-[3px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-[#444748] uppercase tracking-[0.55px]">
              Email Address <span className="text-[#dc3129]">*</span>
            </label>
            <input 
              type="email" 
              placeholder="e.g. basel_mohamed@company.com" 
              className="border border-[#e2e2e2] p-3 text-[14px] text-black placeholder:text-[#c4c7c7] focus:outline-none focus:border-black transition-colors rounded-[3px]"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-[#444748] uppercase tracking-[0.55px]">
              Project Scope & Requirements
            </label>
            <textarea 
              rows="3" 
              placeholder="Tell us about your space..." 
              className="border border-[#e2e2e2] p-3 text-[14px] text-black placeholder:text-[#c4c7c7] focus:outline-none focus:border-black transition-colors resize-none rounded-[3px]"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-black text-white text-[13px] font-bold uppercase tracking-[1.4px] py-3 px-6 w-fit flex items-center gap-2 mt-2 hover:bg-gray-800 transition-colors rounded-[3px] group"
          >
            SEND MESSAGE
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

        </form>
      </div>

    </section>
  );
};

export default ContactSection;