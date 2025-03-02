import React from 'react'
import Section from '../Section'
import OurDataCenter from './OurDataCenter'

const DataCenter = () => {
  return (
    <Section 
      className="mt-20 text-white md:h-[120vh] lg:h-screen px-4 sm:px-6 lg:px-[150px]"
      style={{
        background: "linear-gradient(90deg, rgba(15,36,96,0.8) 0%, rgba(14,34,88,0) 100%), url('/DataCenter.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto py-10">
        {/* Header Section */}
        <h2 
          className="font-bold mb-8 text-3xl sm:text-4xl md:text-[64px] leading-tight sm:leading-[56px] md:leading-[64px]" 
          data-aos="zoom-in-up"
        >
          Data Center Hyperscaler Buyer
        </h2>
        <p 
          className="text-base sm:text-lg md:text-[24px] leading-snug sm:leading-[28px] md:leading-[36px] text-white/80" 
          data-aos="zoom-in-up"
        >
          Scale Smarter: Source Globally, Save Aggressively, Sustain Seamlessly
        </p>
        <OurDataCenter />
      </div>
    </Section>
  )
}

export default DataCenter
