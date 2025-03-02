import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-black py-10">
            <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Social */}
                    <div>
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/">
                                <h3 className="text-white text-2xl font-semibold">
                                    ProcureDC
                                </h3>
                            </Link>
                        </div>
                        {/* Description */}
                        <p className="mt-4 text-sm text-gray-500 font-medium leading-[1rem] w-[80%]">
                            Transforming data center procurement for the digital age.
                        </p>
                        {/* Social media icons */}
                        <div className="mt-8">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="/">
                                        <FaLinkedin className="text-white transition-colors duration-300" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <FaTwitter className="text-white transition-colors duration-300" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <FaFacebook className="text-white transition-colors duration-300" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Solutions */}
                    <div className="mt-10">
                        <h3 className="text-sm font-semibold text-white uppercase">
                            Solutions
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">For Buyers</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">For Suppliers</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Enterprise</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div className="mt-10">
                        <h3 className="text-sm font-semibold text-white">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">About Us</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Careers</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Blog</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Press</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div className="mt-10">
                        <h3 className="text-sm font-semibold text-white">
                            Support
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Help Center</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Documentation</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Status</Link>
                            </li>
                            <li className="text-gray-500 hover:text-white transition-colors duration-300">
                                <Link href="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} ProcureDC. All rights reserved.
                    </p>
                    <ul className="flex space-x-4">
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href="/">Privacy Policy</Link>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href="/">Terms of Service</Link>
                        </li>
                        <li className="hover:text-white transition-colors duration-300">
                            <Link href="/">Cookie Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
