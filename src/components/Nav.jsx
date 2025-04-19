import React from 'react'
import { IoIosMenu } from "react-icons/io";

const Nav = () => {

    const menuItems = ["Work","Studio","News","Contact"]

  return (
    <div className='nav flex justify-between items-center p-10 text-white'>
      <div className="logo text-5xl">exp<span className='text-red-500 text-2xl '>ape</span> </div>
      <ul className="nav-item hidden md:flex gap-8 ">
        {menuItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="menu-bar text-xl flex gap-3 items-center md:hidden pr-4 pt-3">
        <p>Menu</p>
        <IoIosMenu size={40}  />

      </div>
    </div>
  )
}

export default Nav
