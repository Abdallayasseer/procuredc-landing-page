import { NavLink } from '@/Data/Data'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean,
  closeNav: () => void,
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full"

  return (
    <div className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[100000] w-full h-screen`}>
      <div className={`${navOpen} text-white fixed flex flex-col justify-center h-full transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gradient-to-r from-[#143AA2] to-[#3E8DE3] opacity-100`}>
        <ul className="flex flex-col gap-3 px-8">
          {NavLink.map(link => (
            <li key={link.id}>
              <a
                href={link.url}
                className="text-white text-center text-[20px] border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-blue-900 transition-colors duration-300"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        {/* Button Section */}
        <div className="flex items-center justify-around space-x-4 pt-6">
          <button className="px-6 py-2 md:px-8 md:py-2.5 bg-white text-blue-900 font-semibold text-base border border-white hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-2xl">
            Sign In
          </button>
          <button className="px-6 py-2 md:px-8 md:py-2.5 text-white font-semibold text-base bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 transition-all duration-300 rounded-2xl">
            Request a Demo
          </button>
        </div>

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-10 sm:h-10 w-8 h-8 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileNav
