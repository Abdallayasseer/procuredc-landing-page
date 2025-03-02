import { ourDataCenter } from '@/Data/Data'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const OurDataCenter = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" data-aos="zoom-in-down">
                {ourDataCenter.map((data) => (
                    <div
                        key={data.id}
                        className="relative w-[calc(100%-30px)] rounded-[16px] p-10 bg-[rgba(20,58,162,0.5)] backdrop-blur-[12px] transition-transform duration-300 ease-out hover:scale-105"
                    >
                        <h3 className="font-bold mb-2 text-[24px] leading-[36px] text-white">
                            {data.head}
                        </h3>
                        <p className="text-[18px] leading-[28px] text-white/80">
                            {data.paragraph}
                        </p>
                        <MdOutlineArrowOutward className="absolute bottom-5 right-5 text-[32px] text-white cursor-pointer" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default OurDataCenter