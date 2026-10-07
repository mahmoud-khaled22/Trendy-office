import React from 'react';

// استيراد الصور بناءً على الأسماء في كود فيجما
import imgDatasheet1 from '../../assets/imgDatasheet1.png';
import img011 from '../../assets/img011.png';
import img021 from '../../assets/img021.png';
import img031 from '../../assets/img031.png';
import img041 from '../../assets/img041.png';
import img051 from '../../assets/img051.png';

const Details = () => {
    const detailsData = [
        {
            id: '01',
            title: 'Aluminium Frame',
            desc: 'A strong aluminium frame that provides rigidity, precise alignment and a clean modern edge.',
            image: img011
        },
        {
            id: '02',
            title: 'Hinges',
            desc: 'High-quality hinges, fitted to match the door system and its intended use.',
            image: img021
        },
        {
            id: '03',
            title: 'HPL Surface & Core',
            desc: 'High-pressure laminate (HPL) with a strong core for the best balance of weight, strength and insulation.',
            image: img031
        },
        {
            id: '04',
            title: 'Lock & Edge Profile',
            desc: 'Integrated lock system with a reinforced edge profile for enhanced security and smooth operation.',
            image: img041
        },
        {
            id: '05',
            title: 'Protection & Finishing',
            desc: 'Stainless steel kick plate and finishing details for added durability in high-traffic areas.',
            image: img051
        }
    ];

    return (
        <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-[60px] font-['Inter'] overflow-hidden">

            <div className="max-w-[1512px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1.4fr] gap-10 lg:gap-8 items-center">
                
                <div className="flex flex-col gap-6 order-1 lg:order-none lg:-mt-32">
                    <h2 className="font-semibold text-[#191919] text-[40px] lg:text-[48px] leading-[1.1]">
                        From material <br />
                        <span className="text-[#C9362B]">to</span> detail.
                    </h2>
                    
                    <p className="font-normal text-[18px] lg:text-[22px] text-black leading-relaxed max-w-[320px]">
                        Every component works together to deliver strength, durability and a clean modern look.
                    </p>

                    <div className="mt-4">
                        <div className="w-[85px] h-[3px] bg-black mb-4"></div>
                        <p className="font-normal text-[12px] text-[rgba(137,116,92,0.66)] tracking-[1px] uppercase leading-relaxed">
                            ENGINEERED <br /> FOR REAL SPACES.
                        </p>
                    </div>
                </div>

                <div className="relative w-full flex justify-center items-center order-2 lg:order-none">
                    <img 
                        src={imgDatasheet1} 
                        alt="Door Details" 
                        className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain pointer-events-none"
                    />
                </div>

                <div className="flex flex-col gap-5 lg:gap-6 order-3 lg:order-none w-full">
                    {detailsData.map((item, index) => (
                        <div key={index} className="flex flex-row gap-4 items-start w-full">
                            
                            <div className="shrink-0 w-[80px] h-[80px] lg:w-[110px] lg:h-[100px] border border-[#89745c] rounded-[2px] overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="flex flex-row gap-3 lg:gap-4 items-start flex-1">
                                <span className="font-semibold text-[#89745c] text-[28px] lg:text-[32px] leading-none mt-[-2px]">
                                    {item.id}
                                </span>
                                
                                <div className="flex flex-col gap-1 lg:gap-1.5 flex-1">
                                    <h3 className="font-medium text-[18px] lg:text-[20px] text-black leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="font-normal text-[13px] lg:text-[14.5px] text-[rgba(137,116,92,0.66)] leading-snug">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Details;