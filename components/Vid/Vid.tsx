import React from 'react'
import Section from '../Section'
import { FaPlay } from 'react-icons/fa'

const Vid = () => {
  return (
    <Section className="px-4 sm:px-6 lg:px-[150px]">
      <div className="container mx-auto">
        {/* Video Content */}
        <div className="mt-10">
          <h2
            className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] leading-[1.1] mb-6 text-black"
            data-aos="zoom-in"
          >
            See How ProcureDC Transforms Procurement
          </h2>
          <p
            className="font-normal text-base sm:text-lg md:text-xl lg:text-[1.8rem] leading-tight lg:leading-[28px] text-[rgba(75,85,99,1)]"
            data-aos="zoom-in"
          >
            Watch how we connect buyers and suppliers through an intuitive, data-driven platform.
          </p>
        </div>

        {/* Video Section */}
        <div className="mt-10" data-aos="flip-right">
          <div className="container mx-auto">
            <div
              className="h-[50vh] md:h-screen rounded-[24px] bg-cover bg-center bg-no-repeat grid place-items-center relative"
              style={{ backgroundImage: "url('/vid sec.png')" }}
            >
              <button
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white text-blue-900 grid place-items-center outline-none focus:outline-none animate-pluse"
                aria-label="play video"
              >
                <FaPlay
                  className="text-xl sm:text-2xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Vid
