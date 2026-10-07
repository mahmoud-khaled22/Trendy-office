import React from 'react';

// استيراد الأيقونات (يفضل تستخدم الأيقونات اللي عندك في فولدر assets)
import iconPhone from '../../assets/imgPhoneSvgrepoCom1.svg';
import iconEmail from '../../assets/imgEmail1SvgrepoCom1.svg';
import iconLocation from '../../assets/imgIconSet.svg';
import iconClock from '../../assets/imgClock.svg'; // افترض وجود أيقونة للساعة

const ContactFormSection = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-20 font-['Inter']">
      <div className="max-w-[1512px] mx-auto px-6 md:px-16 lg:px-[20px] flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* الجزء الأيسر: الفورم */}
        <div className="flex-1 flex flex-col gap-8 py-2 px-8 md:px-8 shadow-sm rounded-sm">
          <div className="flex flex-col gap-2">
            <h2 className="text-[32px] md:text-[40px] font-bold uppercase tracking-[-0.5px] text-black">
              Get in Touch
            </h2>
            <p className="text-[14px] text-gray-500 font-light">
              Fill out the form and tell us a little about your project, footprint, or door schedule specifications.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[11px] font-bold text-black uppercase tracking-[1px]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Basel Mohamed"
                  className="w-full border border-gray-200 p-4 text-[14px] placeholder-gray-400 focus:outline-none focus:border-black bg-[#fdfdfd]"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[11px] font-bold text-black uppercase tracking-[1px]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+20 100 000 0000"
                  className="w-full border border-gray-200 p-4 text-[14px] placeholder-gray-400 focus:outline-none focus:border-black bg-[#fdfdfd]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-black uppercase tracking-[1px]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. Basel@company.com"
                className="w-full border border-gray-200 p-4 text-[14px] placeholder-gray-400 focus:outline-none focus:border-black bg-[#fdfdfd]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-black uppercase tracking-[1px]">
                Project Scope & Requirements
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your space, dimensions, estimated timelines, or acoustic rating specifications..."
                className="w-full border border-gray-200 p-4 text-[14px] placeholder-gray-400 focus:outline-none focus:border-black bg-[#fdfdfd] resize-y min-h-[120px]"
              ></textarea>
            </div>

            <div className="flex items-center justify-between mt-2">
              <button
                type="submit"
                className="bg-black text-white text-[12px] font-bold uppercase tracking-[1.5px] py-4 px-8 flex items-center gap-3 hover:bg-gray-800 transition-colors"
              >
                Send Message
                <span>→</span>
              </button>
              <span className="text-[11px] text-gray-400 hidden sm:block">
                Strict privacy. Architectural NDA available.
              </span>
            </div>

          </form>
        </div>

        {/* الجزء الأيمن: معلومات الاتصال */}
        <div className="lg:w-[35%] flex flex-col gap-10 lg:pl-10 lg:border-l border-gray-200">
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] md:text-[40px] font-bold uppercase tracking-[-0.5px] text-black leading-tight">
              Contact<br />Information
            </h2>
            <p className="text-[14px] text-gray-500 font-light">
              Connect directly with our engineering division, project estimators, and material library.
            </p>
          </div>

          <div className="flex flex-col gap-8">

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 flex justify-center items-center shrink-0">
                <img src={iconPhone} alt="Phone" className="w-4 h-4 opacity-70" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[1px]">Phone</span>
                <span className="text-[18px] font-bold text-black">+20 100 266 2603</span>
                <span className="text-[12px] text-gray-400">Direct Site WhatsApp</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 flex justify-center items-center shrink-0">
                <img src={iconEmail} alt="Email" className="w-4 h-4 opacity-70" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[1px]">Email</span>
                <span className="text-[18px] font-bold text-black">hanygroup@yahoo.com</span>
                <span className="text-[12px] text-gray-400">For inquiries and specifications</span>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 flex justify-center items-center shrink-0">
                <img src={iconLocation} alt="Location" className="w-4 h-4 opacity-70" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[1px]">Office & Showroom</span>
                <span className="text-[16px] font-bold text-black leading-snug">Zahraa El Maadi,<br />Cairo, Egypt</span>
                <span className="text-[12px] text-gray-400">Materials & Profile Mockup Suite</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 flex justify-center items-center shrink-0">
                <img src={iconClock} alt="Hours" className="w-4 h-4 opacity-70" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[1px]">Working Hours</span>
                <span className="text-[16px] font-bold text-black">Saturday – Thursday</span>
                <span className="text-[12px] text-gray-400">10:30 AM – 5:00 PM  •  <span className="text-red-500">Friday: Closed</span></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;