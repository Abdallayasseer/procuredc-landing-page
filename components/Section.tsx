import React, { ReactNode } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
    return (
        <section {...props}>
            {children}
        </section>
    );
}

export default Section;