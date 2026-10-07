import React from 'react';

import imgDoors1 from '../../assets/imgDoors1.png';
import imgFrame12 from '../../assets/imgFrame12.png';
import imgFrame14 from '../../assets/imgFrame14.png';
import imgArrowDownOutline from '../../assets/imgArrowDownOutline.svg'; 

const Categories = () => {
    const categoriesData = [
        {
            id: '01',
            title: 'Doors',
            desc: 'Aluminium and HPL door systems built for durability, precision, and a refined finish across every space.',
            image: imgDoors1,
        },
        {
            id: '02',
            title: 'Workspaces',
            desc: 'Workstations, desks, meeting tables and complete office systems.',
            image: imgFrame12,
        },
        {
            id: '03',
            title: 'Partitions',
            desc: 'Flexible partition systems that define spaces while keeping them open.',
            image: imgFrame14,
        }
    ];

    return (
        <section className="w-full bg-white py-12 flex flex-col items-center font-['Inter']">
            
            <div className="w-[85%] max-w-[873px] h-[2px] bg-[#f2bc65] mb-10"></div>

            <div className="w-full max-w-[1512px] px-4 md:px-10 lg:px-[64px] grid grid-cols-1 md:grid-cols-3 gap-[5px]">
                
                {categoriesData.map((category, index) => (
                    <div 
                        key={index} 
                        className="relative w-full h-[350px] md:h-[400px] lg:h-[435px] rounded-[5px] overflow-hidden group cursor-pointer"
                    >
                        <img 
                            src={category.image} 
                            alt={category.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                        <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex flex-col items-start w-[90%] md:w-[95%] lg:w-[85%]">
                            
                            <p className="font-semibold text-[#89745c] text-[48px] lg:text-[64px] leading-none mb-1 md:mb-2">
                                {category.id}
                            </p>
                            
                            <h3 className="font-semibold text-white text-[24px] lg:text-[32px] mb-2">
                                {category.title}
                            </h3>
                            
                            <p className="font-normal text-white text-[14px] lg:text-[16px] leading-snug opacity-90 mb-4 max-w-[290px]">
                                {category.desc}
                            </p>
                            
                            {/* زر Explore */}
                            <div className="flex items-center gap-2 mt-auto group/btn">
                                <span className="font-normal text-[#89745c] text-[14px] lg:text-[16px] transition-colors group-hover/btn:text-white">
                                    EXPLORE
                                </span>
                                <img 
                                    src={imgArrowDownOutline} 
                                    alt="Explore" 
                                    className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]  transition-transform group-hover/btn:translate-x-2"
                                />
                            </div>
                            
                        </div>
                    </div>
                ))}

            </div>

            {/* الخط الفاصل السفلي */}
            <div className="w-[85%] max-w-[873px] h-[2px] bg-[#f2bc65] mt-10"></div>
            
        </section>
    );
};

export default Categories;