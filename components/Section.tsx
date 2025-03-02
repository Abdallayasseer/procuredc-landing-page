import React from 'react'

const Section = ({ children, ...props }) => {
    return (
        <section {...props}>
            {children}
        </section>
    )
}

export default Section