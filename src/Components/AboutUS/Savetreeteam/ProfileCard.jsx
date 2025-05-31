import React, { useState } from 'react';

const ProfileCard = ({ object, index }) => {
    const { name, email, designation, description, image } = object;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pos = index % 2 === 0; // Even indexes on left, odd on right

    return (
        <>
            <div 
                className={`w-full flex ${pos ? "justify-end" : "justify-start"} items-start cursor-pointer`}
                onClick={() => setIsModalOpen(true)}
            >
                <div className={`w-[80%] h-full border-4 border-[#339634] flex flex-col items-center py-5 ${
                    pos ? "rounded-bl-3xl rounded-tr-3xl" : "rounded-tl-3xl rounded-br-3xl"
                } bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300`}>
                    <div className='w-[90%] p-5 relative'>
                        <img 
                            className='w-full' 
                            src={"https://i.ibb.co.com/QjQ9PRyM/image.png"} 
                            alt={name} 
                        />
                        <p className='text-2xl text-center absolute bottom-0 right-0 border-4 px-5 py-2 bg-gray-200 border-[#339634] rounded-bl-full rounded-tr-full'>
                            {name}
                        </p>
                    </div>
                    <p className='text-3xl text-white text-end w-[90%]'>{designation}</p>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div 
                        className={`relative max-w-2xl w-full border-4 border-[#339634] ${
                            pos ? "rounded-bl-3xl rounded-tr-3xl" : "rounded-tl-3xl rounded-br-3xl"
                        } bg-white/10 backdrop-blur-md p-8`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-4 right-4 text-2xl text-white hover:text-[#339634]"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/3">
                                <img 
                                    className="w-full border-4 border-[#339634] rounded-lg" 
                                    src={"https://i.ibb.co.com/QjQ9PRyM/image.png"} 
                                    alt={name} 
                                />
                            </div>
                            <div className="w-full md:w-2/3 text-white">
                                <h2 className="text-4xl font-bold mb-2">{name}</h2>
                                <p className="text-2xl text-[#339634] mb-4">{designation}</p>
                                <p className="text-lg mb-6">{description}</p>
                                <div className="mt-4">
                                    <a 
                                        href={`mailto:${email}`} 
                                        className="inline-block px-6 py-2 bg-[#339634] text-white rounded-lg hover:bg-[#2a7d2e] transition-colors"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileCard;