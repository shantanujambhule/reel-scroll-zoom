import React from 'react'
import { MdArrowDownward } from "react-icons/md";

const Hero = () => {
  return (
    <div className='hero flex flex-col pt-28 md:pt-95 md:ml-22 text-white'>
      <p>Global digital design studio partnering <br /> with brands and businesses that create <br /> exceptional experience where people <br /> live,work,and unwind.</p>

      <div className="large-text md:-ml-5 pt-5 md:pt-20 text-[15vw] leading-18 md:leading-50 ">
        <h1>Digital</h1>
        <h1>Design</h1>
        <h1>Experience</h1>
      </div>
      <div className="downArrow pt-13 md:hidden">
      <MdArrowDownward size={20} />
      </div>
    <div className='pt-15 md:pt-50'>
    <p>We help experienc3-driven companies <br /> thrive by making thier audience feel the <br /> refined intricacies of their brand and <br /> product in the digital space. <br /> Unforgatable journeys start with a <br /> click.</p>
    

    <div className="foot-text hidden md:flex justify-between items-center  ">
    <p className='pt-10 '> <a href="#">The Studio</a></p>
      <div className='flex'>
      <ul className='foot-item pr-20 '>
        <li>Work</li>
        <li>News</li>
        <li>Studio</li>
        <li>Contact</li>
      </ul>
        <div>
        <p>hello@gmail.com</p>
        <p>+91-123456789</p>
        </div>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Hero
