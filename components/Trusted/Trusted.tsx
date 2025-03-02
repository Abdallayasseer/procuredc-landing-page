import React from 'react'
import Section from '../Section'
import { trustImg } from '@/Data/Data'

const Trusted = () => {
  return (
    <Section className="py-[70px]">
      <div className=" mx-auto px-5 lg:px-[150px]">
        {/* Trusted Content Header */}
        <div className="flex flex-col gap-5">
          <div className="mb-8">
            <h2 className="font-bold text-[64px]  text-[#121212] mb-5" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              Trusted by Industry Leaders
            </h2>
            <p className="text-[24px] leading-[30px] font-medium text-[rgba(75,85,99,1)] mb-10" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              Join hundreds of companies worldwide that trust us to power their business
            </p>
          </div>
          {/* Button Group */}
          <div className="lg:flex gap-5 mt-10 text-center" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <a
              href="#"
              className="bg-[rgba(20,58,162,1)] text-white px-[60px] py-[20px] mb-5 rounded-[12px] text-[20px] leading-[24px] font-semibold transition-colors duration-300 hover:bg-[rgba(20,58,162,0.8)]"
            >
              Buyers
            </a>
            <a
              href="#"
              className="bg-white text-[rgba(32,23,71,1)] px-[60px] py-[20px] mb-5 rounded-[12px] text-[20px] leading-[24px] font-semibold transition-colors duration-300 hover:bg-[rgba(20,58,162,1)] hover:text-white"
            >
              Suppliers
            </a>
          </div>
        </div>

        {/* Trusted Images Grid */}
        <div className="mt-10" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustImg.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden cursor-pointer p-2 bg-white rounded-[12px] shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Trusted
