import React from 'react'
import vid6 from "../assets/video-6.mp4"

const footer = () => {
  return (
    <div className='w-full h-full bg-black text-[#E0CDBD] z-[-10] relative'>
      <div className='p-10 md:pl-35'>
        <div className='flex justify-between items-center'>
            <h1 className='text-[82.176px] md:text-[153.6px] md:leading-40 leading-20'>Our <br />Story</h1>
            
        </div>
        <div>
        <video autoPlay loop muted 
            className='z-[-2] absolute top-0 left-15 md:left-85 ' src={vid6}></video>
        </div>

        <p className='py-10 text-[24.7296px]'>The story behind Exo Ape is one of <br />exploration ,creativity and curosity.</p>
      
        <p className=' text-[21.7296px] pb-10'>Our Story</p>
        
        <div className='h-[2px] w-full bg-[#E0CDBD] '></div>
        <div className="foot-item flex justify-start gap-35 leading-10  items-center text-[19.234px] py-10">
            <div className="item ">
            <ul>
                <li>Work</li>
                <li>News</li>
                <li>Studio</li>
                <li>Contact</li>
            </ul>
            </div>
        
        <div className="social ">
            <ul>
                <li>Behance</li>
                <li>Dribble</li>
                <li>Linkedin</li>
                <li>Instagram</li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default footer
