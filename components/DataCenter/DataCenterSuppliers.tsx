import React from 'react'
import Section from '../Section'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Image from 'next/image'

const DataCenterSuppliers = () => {
  return (
    <Section className="py-[150px] md:mt-36">
      <div className="max-w-[2200px] mx-auto px-[5%] sm:px-[30px] md:px-[50px] lg:px-[150px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <h2
              className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-[1.1] text-[#121212]"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Data Center Suppliers
            </h2>
            <p
              className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-[2rem] text-[#121212]"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Be the Go-To Supplier for Global Data Center Giants
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <div
              className="flex items-center justify-between bg-gradient-to-r from-[#143AA2] to-[#3E8DE3] text-white px-[20px] sm:px-[25px] lg:px-[35px] py-[8px] sm:py-[10px] lg:py-[15px] rounded-[12px] transition-all duration-500 hover:from-[#3E8DE3] hover:to-[#143AA2] cursor-pointer"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <span>Talk to an Expert</span>
              <MdOutlineArrowOutward className="text-[18px] sm:text-[20px] lg:text-[25px]" />
            </div>
          </div>
        </div>

        {/* Content Section: List and Image */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center mt-16 gap-8"
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* List Section */}
          <ul className="flex flex-col gap-6 lg:gap-8 flex-1 w-full">
            <li className="relative group p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-md rounded-[12px] text-center cursor-pointer transition-all duration-300 
              bg-white text-[#143AA2] hover:bg-[#143AA2] hover:text-white hover:scale-105 hover:shadow-lg
              first:bg-[rgba(20,58,162,1)] first:text-white first:rounded-l-[20px] first:rounded-r-0 
              first:hover:bg-white first:hover:text-[rgba(20,58,162,1)]">
              <h4 className="text-[18px] sm:text-[20px] font-bold">Consultants</h4>
              <MdOutlineArrowOutward className="absolute top-6 sm:top-10 right-4 sm:right-5 text-[28px] sm:text-[32px] transition-colors duration-300 cursor-pointer" />
            </li>
            <li className="relative group bg-white text-[#143AA2] hover:scale-105 p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-md rounded-[12px] text-center cursor-pointer transition-all duration-300 hover:bg-[#143AA2] hover:text-white">
              <h4 className="text-[18px] sm:text-[20px] font-bold">Contractors</h4>
              <MdOutlineArrowOutward className="absolute top-4 sm:top-6 lg:top-10 right-3 sm:right-4 lg:right-5 text-[24px] sm:text-[28px] lg:text-[32px] cursor-pointer" />
            </li>
            <li className="relative group bg-white text-[#143AA2] hover:scale-105 p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-md rounded-[12px] text-center cursor-pointer transition-all duration-300 hover:bg-[#143AA2] hover:text-white">
              <h4 className="text-[18px] sm:text-[20px] font-bold">Original Equipment Manufacturer</h4>
              <MdOutlineArrowOutward className="absolute top-4 sm:top-6 lg:top-10 right-1 sm:right-4 lg:right-5 text-[24px] sm:text-[28px] lg:text-[32px] cursor-pointer" />
            </li>
            <li className="relative group bg-white text-[#143AA2] hover:scale-105 p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-md rounded-[12px] text-center cursor-pointer transition-all duration-300 hover:bg-[#143AA2] hover:text-white">
              <h4 className="text-[18px] sm:text-[20px] font-bold">Power</h4>
              <MdOutlineArrowOutward className="absolute top-4 sm:top-6 lg:top-10 right-3 sm:right-4 lg:right-5 text-[24px] sm:text-[28px] lg:text-[32px] cursor-pointer" />
            </li>
          </ul>
          {/* Image Section */}
          <div className="flex-1 w-full">
            <figure className="relative mb-10 lg:mb-1 p-4 sm:p-5 border border-gray-100 shadow-lg rounded-2xl transition-transform duration-300 ease-in hover:scale-105">
              <Image width={100} height={100} src="/DataCentersub.png" alt="Data Center Supplier 1" className="w-full h-auto rounded-2xl" />
              <figcaption className="mt-4 sm:mt-6 lg:mt-8 text-center">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold mb-2 sm:mb-3 lg:mb-4 text-[#121212]">Title Here</h3>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[28px] text-[#121212]/80">
                  Join the Network Where Suppliers Become Hyperscale Heroes.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DataCenterSuppliers
