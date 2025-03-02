import React from 'react'
import Section from '../Section'
import Image from 'next/image'

const RequestDemo = () => {
  return (
    <Section className="relative px-4 sm:px-8 lg:px-[150px] mb-28">
      <div
        className="container flex flex-col md:flex-row justify-between items-center gap-5 max-w-[1200px] mx-auto p-5 bg-[rgba(20,58,162,1)] rounded-[26px] shadow-[0_0_10px_rgba(0,0,0,0.2)]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Content Section */}
        <div>
          <div className="title">
            <h3 className="text-[28px] md:text-[36px] font-bold leading-[1.5] text-white mb-5">
              Empower growth with AI: matching, compliance, cost-efficiency, and sustainable success.
            </h3>
            <p className="text-[16px] md:text-[18px] font-normal leading-[1.5] text-[rgba(241,241,241,1)] mt-2.5 mb-10">
              Join hundreds of companies worldwide that trust us to power their business.
            </p>
          </div>
        </div>
        {/* Button Section */}
        <div className="w-full md:w-[866px]">
          <a
            href="#"
            className="inline-block bg-[rgba(229,231,235,1)] text-center text-[rgba(20,58,162,1)] no-underline rounded-[12px] text-[32px] font-bold cursor-pointer transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)] p-5 hover:bg-[rgba(185,190,196,1)] hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] active:bg-[rgba(163,169,175,1)] active:shadow-[0_0_10px_rgba(0,0,0,0.2)] active:scale-95 focus:outline-none"
          >
            Request a Demo
          </a>
        </div>
      </div>
      {/* Background Image */}
      <div
        className="absolute bottom-[-200px] left-0 right-0 w-full h-full z-[-1]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Image
          src="/ReqImg.png"
          alt="background-img"
          loading="lazy"
          className="lg:w-full object-cover h-[40vh]"
        />
      </div>
    </Section>
  )
}

export default RequestDemo
