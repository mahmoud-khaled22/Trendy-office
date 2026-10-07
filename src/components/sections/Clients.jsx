import React, { useState } from "react";
import { clients } from "../../data/clients";

const CLIENTS_PER_SECTION = 8;

const Clients = () => {
    const [activeSection, setActiveSection] = useState(0);

    // Divide clients into sections
    const sections = [];

    for (let i = 0; i < clients.length; i += CLIENTS_PER_SECTION) {
        sections.push(clients.slice(i, i + CLIENTS_PER_SECTION));
    }

    const nextSection = () => {
        setActiveSection((prev) =>
            prev === sections.length - 1 ? 0 : prev + 1
        );
    };

    const prevSection = () => {
        setActiveSection((prev) =>
            prev === 0 ? sections.length - 1 : prev - 1
        );
    };

    const currentClients = sections[activeSection] || [];

    return (
        <section className="w-full bg-white py-12 border-b border-gray-200">

            <div className="max-w-[1512px] mx-auto px-4 md:px-10 lg:px-[64px] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

                {/* ================= LEFT SIDE ================= */}

                <div className="flex flex-col gap-3 shrink-0 lg:w-[280px] text-center lg:text-left">

                    <h2 className="font-semibold text-black text-[32px] md:text-[36px] leading-[1.1] uppercase">
                        OUR CLIENTS
                    </h2>

                    <p className="font-light text-[#555] text-[14px] md:text-[15px] leading-relaxed max-w-[300px] mx-auto lg:mx-0">
                        Trendy Office is a trusted workspace solutions company in Egypt,
                        helping businesses create functional and modern spaces.
                    </p>

                    {/* Pagination */}

                    <div className="flex justify-center lg:justify-start gap-2 mt-2">

                        {sections.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setActiveSection(index)}
                                aria-label={`Go to clients section ${index + 1}`}
                                className={`
                                    h-1.5
                                    rounded-full
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                    ${activeSection === index
                                        ? "w-6 bg-blue-600"
                                        : "w-2 bg-gray-300 hover:bg-gray-400"
                                    }
                                `}
                            />
                        ))}

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="flex-1 w-full flex items-center gap-3 md:gap-5">

                    {/* Previous Button */}

                    <button
                        type="button"
                        onClick={prevSection}
                        aria-label="Previous clients"
                        className="
                            shrink-0
                            w-[42px]
                            h-[42px]
                            md:w-[50px]
                            md:h-[50px]
                            flex
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            border
                            border-gray-200
                            shadow-sm
                            hover:shadow-md
                            hover:bg-gray-50
                            transition-all
                            duration-300
                        "
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>


                    {/* ================= LOGOS ================= */}

                    <div className="flex-1 overflow-hidden">

                        <div
                            key={activeSection}
                            className="
                                grid
                                grid-cols-2
                                md:grid-cols-4
                                gap-3
                                md:gap-4
                            "
                        >

                            {currentClients.map((client) => (

                                <a
                                    key={client.id}
                                    href={client.url || "#"}
                                    target={
                                        client.url
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        client.url
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    title={client.name}
                                    className="
                                        group
                                        h-[105px]
                                        md:h-[120px]
                                        flex
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-[#E5E7EB]
                                        bg-[#F5F6F7]
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-white
                                        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                    "
                                >

                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        loading="lazy"
                                        className={`
                                            block
                                            max-w-[175px]
                                            max-h-[72px]
                                            w-auto
                                            h-auto
                                            object-contain
                                            transition-all
                                            duration-300
                                            group-hover:scale-105

                                            ${client.lightLogo
                                                ? "brightness-0"
                                                : ""
                                            }
                                        `}
                                    />

                                </a>

                            ))}

                        </div>

                    </div>


                    {/* Next Button */}

                    <button
                        type="button"
                        onClick={nextSection}
                        aria-label="Next clients"
                        className="
                            shrink-0
                            w-[42px]
                            h-[42px]
                            md:w-[50px]
                            md:h-[50px]
                            flex
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            border
                            border-gray-200
                            shadow-sm
                            hover:shadow-md
                            hover:bg-gray-50
                            transition-all
                            duration-300
                        "
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Clients;