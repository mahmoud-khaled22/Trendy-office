import React from 'react';

import imgMap from '../../assets/imgMap.png'; 

const ContactLocation = () => {
  return (
    <section className="w-full bg-white py-24 font-['Inter']">
      <div className="max-w-[1512px] mx-auto px-4 md:px-16 lg:px-[50px] flex flex-col gap-12">
        
        {/* الجزء العلوي: العنوان وزرار الخريطة */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-[32px] md:text-[40px] font-bold uppercase tracking-[-0.5px] text-black">
              Our Location
            </h2>
            <p className="text-[14px] text-gray-500 font-light">
              Visit our engineering office or preview our coordinates on the urban plan.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <span className="text-[10px] font-bold text-black uppercase tracking-[1px]">
               Zahraa El Maadi,
Cairo, Egypt
              </span>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=29°58'56.6%22N+31°19'15.9%22E" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-gray-300 px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-[10px] font-bold text-black uppercase tracking-[1px]">
                View on Map
              </span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* الجزء السفلي: الخريطة التفاعلية */}
        <div className="relative w-full h-[300px] md:h-[450px] bg-gray-100 border border-gray-200 overflow-hidden">
          
          {/* صورة الخريطة كخلفية */}
          <img 
            src={imgMap} 
            alt="Trendy Office Map Location" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* الكارت الخاص بالإحداثيات (أعلى اليسار) */}
          <div className="absolute top-6 left-6 bg-white p-4 shadow-sm border border-gray-100 hidden md:block">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[1px] mb-1">
              Coordinates
            </p>
            <p className="text-[14px] font-bold text-black tracking-wide">
              29°58'56.6"N 31°19'15.9"E            </p>
            <p className="text-[11px] text-gray-500 mt-1">
              Zahraa El Maadi • Commercial Area
            </p>
          </div>

          {/* مؤشر الموقع (Marker) في المنتصف */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            
            {/* كارت اسم المكان فوق المؤشر */}
            <div className="bg-black text-white px-4 py-2 mb-2 flex items-center gap-2 shadow-lg">
               <div className="w-1.5 h-1.5 bg-red-500"></div>
               <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-[1px] uppercase leading-none">Trendy Office HQ</span>
                  <span className="text-[8px] text-gray-400 leading-none mt-1">Zahraa El Maadi • Showroom</span>
               </div>
            </div>

            {/* نقطة الـ Pin الحمراء */}
            <div className="w-4 h-4 bg-red-500 rounded-sm border-2 border-white shadow-md relative">
              <div className="absolute inset-0 bg-red-500 animate-ping rounded-sm opacity-50"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactLocation;