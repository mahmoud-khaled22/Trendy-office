import React from 'react';

import iconMedical from '../../assets/imgMedicalKitSvgrepoCom11.svg';
import iconEducation from '../../assets/imgEducationCapSvgrepoCom1.svg';
import iconSports from '../../assets/imgGroup.svg';
import iconCommercial from '../../assets/imgGroup1.svg';
import iconGovernment from '../../assets/imgLandmarkSvgrepoCom1.svg';
import iconEngineering from '../../assets/imgCogSvgrepoCom1.svg';

const Experience = () => {
    const categories = [
        { name: 'Medical', icon: iconMedical },
        { name: 'Education', icon: iconEducation },
        { name: 'Sports', icon: iconSports },
        { name: 'Commercial', icon: iconCommercial },
        { name: 'Government', icon: iconGovernment },
        { name: 'Engineering', icon: iconEngineering },
    ];

    return (
        <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-[90px] font-['Inter'] border-b border-gray-100">
            <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[150px]">
                
                <div className="flex flex-col items-start w-full lg:w-1/2">
                    <div className="flex items-center font-semibold leading-none mb-2">
                        <span className="text-[#191919] text-[64px]">15</span>
                        <span className="text-[#f2bc65] text-[40px] ml-1">+</span>
                    </div>
                    
                    <h2 className="font-semibold text-[#191919] text-[28px] md:text-[36px] mb-4">
                        Years of experience
                    </h2>
                    
                    <p className="font-normal text-[16px] md:text-[20px] text-[rgba(137,116,92,0.8)] leading-relaxed max-w-[550px]">
                        Trendy Office provides integrated design, execution and supply for offices, architectural doors and finishing projects from the first drawing to the last handle installed.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {categories.map((category, index) => (
                            <div 
                                key={index} 
                                className="border border-[#d9d9d9] rounded-[6px] flex flex-col items-center justify-center p-4 md:py-6 gap-3 hover:shadow-md hover:border-gray-300 transition-all duration-300 bg-white cursor-pointer group"
                            >
                                <img 
                                    src={category.icon} 
                                    alt={category.name} 
                                    className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="font-medium text-[#191919] text-[16px] md:text-[18px]">
                                    {category.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;