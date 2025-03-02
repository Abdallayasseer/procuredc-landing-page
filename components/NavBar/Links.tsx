import { NavLink } from '@/Data/Data'
import React from 'react'

const Links = () => {
    return (
        <div className="hidden lg:block">
            <ul className="flex space-x-4">
                {NavLink.map(link => (
                    <li key={link.id}>
                        <a href={link.url} className="nav__link">
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Links
