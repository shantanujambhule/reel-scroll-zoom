import React from 'react'
import { IoSparklesSharp } from "react-icons/io5";
import Video1 from "../assets/vid-1.mp4";
import Video2 from "../assets/vid-2.mp4";
import Video3 from "../assets/vid-3.mp4";
import Video4 from "../assets/vid-4.mp4";


const Work = () => {
  return (
    <div className='work w-full h-full bg-white text-black p-10  '>
      <div className='flex items-center gap-4 text-[18.66px] pt-25'>
      <IoSparklesSharp />
      <h3> Featured Projects</h3>
    </div>
      <h1 className='py-3 text-[80px] md: '>Work</h1>
      <p className='text-[23px]'>Highligts of case that we <br /> passionately built with forward-thinking <br />
      clients and friends over the years.</p>

      <div className="proj py-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="prj-1">
            <video src={Video1}></video>
            <div className="cap">
                <p>Ottografie</p>
                <p className='text-gray-500'>Seamless potografic journey</p>
            </div>
        </div>
        <div className="prj-2">
            <video src={Video2}></video>
            <div className="cap">
                <p>Amaterasu</p>
                <p className='text-gray-500'>Seamless potografic journey</p>
            </div>
        </div>
        <div className="prj-3">
            <video src={Video3}></video>
            <div className="cap">
                <p>Cloubia</p>
                <p className='text-gray-500'>Seamless potografic journey</p>
            </div>
        </div>
        <div className="prj-4">
            <video src={Video4}></video>
            <div className="cap">
                <p>Cambium</p>
                <p className='text-gray-500'>Pioneering Sustainable Solution</p>
            </div>
        </div>
      </div>

      <div className='flex justify-center text-[21.33px] mt-20'><p>Browse all work</p></div>
    </div>
  )
}

export default Work
