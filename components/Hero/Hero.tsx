import React from 'react'
import Section from '../Section/Section'
import Statistics from './Statistics'

const Hero = () => {
    return (
        <Section
            className="relative px-4 sm:px-6 lg:px-[150px] text-white"
            style={{
                backgroundImage: "url('/MainImg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="container mx-auto py-10">
                {/* Hero Title */}
                <div className="hero-title" data-aos="fade-up">
                    <h1 className="max-w-full md:max-w-[670px] font-black text-[32px] sm:text-[48px] md:text-[64px] leading-tight sm:leading-[56px] md:leading-[67px] mt-12 sm:mt-28 mb-6 sm:mb-8">
                        Your One-Stop Platform for Data Center Procurement
                    </h1>
                    <p className="max-w-full md:max-w-[700px] font-normal text-[16px] sm:text-[18px] md:text-[24px] leading-snug md:leading-[32px]">
                        Empower your procurement process, expand your partnerships, and unlock unmatched purchasing power.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div
                    className="hero-cta flex flex-col items-center md:flex-row justify-center my-6 gap-4"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <a
                        href="#"
                        className="px-6 py-2 md:px-8 md:py-2.5 font-semibold text-base border border-blue-900 bg-white text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-2xl"
                    >
                        Find Suppliers
                    </a>
                    <a
                        href="#"
                        className="px-6 py-2 md:px-8 md:py-2.5 font-semibold text-base bg-transparent border-2 border-white text-white hover:border-transparent hover:bg-blue-900 transition-all duration-300 rounded-2xl"
                    >
                        Join as a Supplier
                    </a>
                </div>

                <Statistics />
            </div>
        </Section>
    )
}

export default Hero
