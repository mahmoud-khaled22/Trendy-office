import React from 'react';

import iconCube from '../../assets/imgCubeAlt2SvgrepoCom1.svg';
import iconShield from '../../assets/imgShieldCheckSvgrepoCom1.svg';
import iconCog from '../../assets/imgCogSvgrepoCom11.svg';
import iconHeadset from '../../assets/imgHeadsetSvgrepoCom1.svg';

const WhyUs = () => {
    const features = [
        {
            title: 'Custom Solutions',
            desc: 'Designed around your project needs.',
            icon: iconCube
        },
        {
            title: 'Quality Materials',
            desc: 'Selected materials built for durability.',
            icon: iconShield
        },
        {
            title: 'Professional Installation',
            desc: 'Precise installation from start to finish.',
            icon: iconCog
        },
        {
            title: 'After-Sales Support',
            desc: 'Support that continues after delivery.',
            icon: iconHeadset
        }
    ];

    return (
        <section className="w-full bg-[#f3f3f3] py-16 border-b border-[rgba(0,0,0,0.42)] font-['Inter']">
            <div className="max-w-[1512px] mx-auto px-6 md:px-10 lg:px-[64px] flex flex-col lg:flex-row gap-10 lg:gap-8 items-start lg:items-center">
                
                <div className="flex flex-col gap-4 shrink-0 lg:w-[260px] xl:w-[280px]">
                    <h2 className="font-semibold text-black text-[32px] md:text-[36px] leading-[1.1] uppercase">
                        WHY TRENDY <br /> OFFICE?
                    </h2>
                    <p className="font-light text-[#282828] text-[15px] md:text-[16px] leading-relaxed max-w-[280px]">
                        More than products, we deliver complete solutions for modern spaces.
                    </p>
                </div>

                <div className="flex-1 w-full flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 md:gap-4 lg:gap-0">
                    
                    {features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col gap-4 items-start w-full md:w-[45%] lg:w-[22%] px-2">
                                <img 
                                    src={feature.icon} 
                                    alt={feature.title} 
                                    className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
                                />
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-medium text-black text-[18px] md:text-[20px] leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="font-light text-black text-[14px] md:text-[15px] leading-snug">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>

                            {index !== features.length - 1 && (
                                <div className="hidden lg:block w-px h-[100px] bg-[rgba(0,0,0,0.6)] shrink-0 self-center mx-2 xl:mx-4"></div>
                            )}
                        </React.Fragment>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default WhyUs;