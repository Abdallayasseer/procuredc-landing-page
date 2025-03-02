"use client";
import React, { useEffect } from 'react'
import Hero from '../Hero/Hero';
import WHOWEARE from '../WHOWEARE/WHOWEARE';
import Vid from '../Vid/Vid';
import DataCenter from '../DataCenter/DataCenter';
import DataCenterSuppliers from '../DataCenter/DataCenterSuppliers';
import Trusted from '../Trusted/Trusted';
import Clintes from '../Clients/Clintes';
import Section from './../Section';
import RequestDemo from '../RequestDemo/RequestDemo';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Homepage = () => {
  useEffect(() => {
    const initAOS = async () => {
      await AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        easing: 'ease-in',
        anchorPlacement: 'top-bottom'
      });
    }
    initAOS();
  }, [])
  return (
    <Section className='overflow-hidden'>
      <Hero />
      <WHOWEARE />
      <Vid />
      <DataCenter />
      <DataCenterSuppliers />
      <Trusted />
      <Clintes />
      <RequestDemo />
    </Section>
  )
}

export default Homepage;