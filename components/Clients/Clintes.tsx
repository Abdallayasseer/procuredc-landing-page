import React from 'react'
import Section from '../Section'
import Cards from './Cards'

const Clintes = () => {
    return (
        <Section className="py-20">
            <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
                {/* Header */}
                <h2 className="text-4xl font-bold text-start text-[#121212] mb-10" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    What Our Clients Say
                </h2>
                <Cards />
            </div>
        </Section>
    )
}

export default Clintes
