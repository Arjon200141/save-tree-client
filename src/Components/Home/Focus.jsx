import React, { useState } from 'react';

const Focus = () => {
    const treePrograms = [
        {
            title: "Trees and Environmental Benefits",
            description: "Trees are vital for a sustainable planet. They combat climate change by absorbing CO₂, provide oxygen, and support biodiversity. Protecting and planting trees is essential for ecological balance.",
            link: "Learn more about our tree-planting initiatives",
        },
        {
            title: "Community Engagement and Tree Conservation",
            description: "Local communities play a key role in preserving forests. By educating and involving people in tree conservation, we ensure long-term environmental sustainability.",
            link: "Discover community-led forest protection efforts",
        },
        {
            title: "Urban Greening and Healthy Cities",
            description: "Trees in urban areas reduce pollution, lower temperatures, and improve mental health. Initiatives to expand urban green spaces create healthier, more livable cities.",
            link: "Explore our urban greening projects",
        },
        {
            title: "Youth and Tree Planting Movements",
            description: "Young people are leading reforestation efforts. Through skill-building and awareness campaigns, youth are empowered to drive environmental change.",
            link: "Join youth-led tree-planting programs",
        },
        {
            title: "Policy and Advocacy for Forest Protection",
            description: "Strong policies are needed to prevent deforestation. Advocacy efforts help enforce laws that protect trees and promote sustainable land use.",
            link: "Support our environmental policy campaigns",
        },
    ]



    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="bg-white">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-8 md:px-16 lg:px-44 gap-4 sm:gap-5 py-8 sm:py-10'>
                {/* Focus Area Title Card */}
                <div className='lg:h-[70vh] bg-[#339634] p-4 sm:p-6 lg:p-7 rounded-xl'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl text-white'>
                        Our <br /> <span className='font-bold'>Focus Area</span>
                    </h2>
                </div>

                {/* Program Cards */}
                {treePrograms.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='relative  lg:h-[70vh] bg-white rounded-xl'
                    >
                        {/* Green Overlay */}
                        <div
                            className={`${hoveredCard === index ? "w-full" : "w-0"} rounded-xl transition-all duration-300 top-0 left-0 h-full bg-[#339634] absolute z-10`}
                        ></div>
                        
                        {/* Card Content */}
                        <div className={`relative z-20 rounded-lg border-2 ${hoveredCard === index ? "border-white" : "border-green-900"} transition-all duration-300 border-dashed p-4 sm:p-5 h-full flex flex-col justify-between`}>
                            <div>
                                <h2 className={`${hoveredCard === index ? "text-white" : "text-black"} text-xl sm:text-2xl lg:text-3xl font-medium mb-3 sm:mb-5 transition-all duration-300`}>
                                    {item.title}
                                </h2>
                                <p className={`${hoveredCard === index ? "text-gray-100" : "text-gray-700"} transition-all duration-300 text-base sm:text-lg relative`}>
                                    {item.description}
                                </p>
                            </div>
                            <p className={`border-2 rounded-full w-fit ${hoveredCard === index ? "border-white bg-white text-green-900" : "border-green-900 text-green-900"} transition-all duration-300 px-6 sm:px-8 lg:px-10 py-1 sm:py-2 mb-3 sm:mb-5 text-sm sm:text-base`}>
                                Learn More
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Focus;