import React from 'react'
import Section from '../Section/Section'
import Image from 'next/image'

const WhoWeAre = () => {
  return (
    <Section className="relative p-4 sm:p-8 md:p-[100px] mt-6 sm:mt-[23px] bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around border-b-[3px] border-black/25 pb-6 sm:pb-[30px]">
        {/* Content Section */}
        <div className="relative flex-1 mb-8 md:mb-0" data-aos="fade-right">
          {/* Paraph badge */}
          <div className="absolute top-0 left-0 w-[125px] h-[30px] bg-[rgba(209,229,250,1)] rounded-[6px] text-center">
            <p className="mt-[5px] font-normal text-[14px] text-[rgba(62,141,227,1)]">
              Who We Are
            </p>
          </div>
          <h2 className="mt-10 font-black text-[32px] sm:text-[48px] md:text-[64px] leading-[40px] sm:leading-[56px] md:leading-[72px] mb-4 sm:mb-[20px] text-[rgba(20,58,162,1)]">
            Powering the Future of Data Centers, One Connection at a Time
          </h2>
        </div>
        {/* Image Section */}
        <div className="flex-1 w-full md:w-auto" data-aos="fade-left">
          <Image width={100} height={100}
            src="/who we are.png"
            alt="placeholder"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}

export default WhoWeAre
