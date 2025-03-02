import React from 'react'
import { heroImg } from '@/Data/Data'
import Image from 'next/image'

const Statistics = () => {
  return (
    <>
      {/* Statistics Section */}
      <div className="stats-section mt-10 p-5 backdrop-blur" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroImg.map((stat) => (
            <div key={stat.id} className="flex items-center">
              <div className="flex-none mr-2 w-20 h-20 md:w-24 md:h-24">
                <Image src={stat.src} alt={stat.title} loading="lazy" width={100} height={100} className="w-full h-auto" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-xl md:text-[32px] leading-tight md:leading-[40px] mb-2 md:mb-5">
                  {stat.number}
                </h3>
                <p className="font-normal text-base md:text-[20px] leading-snug md:leading-[30px]">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Statistics
