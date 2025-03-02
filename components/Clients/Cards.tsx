import { clientData } from '@/Data/Data';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

const Cards = () => {
    return (
        <>
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                {clientData.map((client) => (
                    <div
                        key={client.id}
                        className="bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105"
                    >
                        {/* Client Info */}
                        <div className="flex items-center mb-6">
                            <Image width={100} height={100}
                                src={client.logo}
                                alt={client.alt}
                                className="w-20 h-20 rounded-full object-cover mr-4"
                                loading="lazy"
                            />
                            <div>
                                <h3 className="text-2xl font-bold text-[#143AA2]">
                                    {client.name}
                                </h3>
                                <p className="text-base text-gray-600">
                                    {client.title}
                                </p>
                            </div>
                        </div>
                        {/* Client Quote */}
                        <div className="text-xl italic text-gray-800 mb-6">
                            <i className="fas fa-quote-left text-3xl text-[#3E8DE3] mr-2"></i>
                            &ldquo;{client.quote}&rdquo;
                        </div>
                        {/* Client Rating */}
                        <div className="flex">
                            {Array.from({ length: client.rating }).map((_, i) => (
                                <FaStar key={i} className="text-yellow-300 w-5 h-5" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cards