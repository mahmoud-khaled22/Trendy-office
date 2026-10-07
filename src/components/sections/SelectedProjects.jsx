import React from 'react';

import imgDoooor1 from '../../assets/imgDoooor1.png';
import imgFrame14 from '../../assets/imgFrame14.png';
import imgFrame12 from '../../assets/imgFrame12.png';
import imgDoors1 from '../../assets/imgDoors1.png';
import imgArrowRight from '../../assets/imgVector.svg';

const SelectedProjects = () => {
    const projects = [
        {
            title: 'Educational facility',
            location: 'Cairo, Egypt',
            category: 'Doors',
            image: imgDoooor1
        },
        {
            title: 'Bank',
            location: 'Cairo, Egypt',
            category: 'Doors • Partition',
            image: imgFrame14
        },
        {
            title: 'Office',
            location: 'Cairo, Egypt',
            category: 'Workspaces',
            image: imgFrame12
        },
        {
            title: 'Educational facility',
            location: 'Cairo, Egypt',
            category: 'Doors',
            image: imgDoors1
        }
    ];

    return (
        <section className="w-full bg-white py-12 md:py-16 border-t border-b border-[rgba(0,0,0,0.15)] font-['Inter']">
            <div className="max-w-[1512px] mx-auto px-4 md:px-10 lg:px-[60px] flex flex-col lg:flex-row gap-10 lg:gap-8 items-start">
                
                <div className="flex flex-col gap-6 shrink-0 lg:w-[260px] pt-4 w-full">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-semibold text-[#282828] text-[32px] md:text-[36px] leading-tight uppercase">
                            SELECTED <br /> PROJECTS
                        </h2>
                        <p className="font-light text-[15px] md:text-[16px] text-[#282828] leading-relaxed max-w-[240px]">
                            Projects that turn ideas into functional, modern and inspiring spaces.
                        </p>
                    </div>

                    <a href="/projects" className="flex items-center justify-center gap-3 border border-[rgba(50,50,50,0.78)] rounded-[4px] py-2.5 px-4 w-fit hover:bg-gray-50 transition-colors group">
                        <span className="font-medium text-[16px] text-[rgba(40,40,40,0.72)]">
                            View All Projects
                        </span>
                        <img 
                            src={imgArrowRight} 
                            alt="Arrow" 
                            className="w-[12px] h-auto opacity-70 group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                </div>

                <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col bg-[rgba(213,213,213,0.15)] rounded-[4px] p-2.5 hover:shadow-md transition-all duration-300 group cursor-pointer w-full"
                        >
                            <div className="w-full h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden rounded-[2px] mb-3 relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold text-[#111010] text-[17px] md:text-[18px] leading-tight truncate">
                                        {project.title}
                                    </h3>
                                    <p className="font-light text-[#111010] text-[13px] md:text-[14px]">
                                        {project.location}
                                    </p>
                                </div>
                                <p className="font-medium text-[#111010] text-[13px] md:text-[14px] mt-1">
                                    {project.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SelectedProjects;