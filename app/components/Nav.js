
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { RiCustomerService2Line } from "react-icons/ri"
import { FiAlignCenter } from "react-icons/fi";
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', url:'/', idName:"#" },
    { id: 2, text: 'About',  url:'/about-us', idName:"#about-us" },
    { id: 3, text: 'Contact' ,  url:'/contact-us', idName:"#contact-us"},

  ];

  return (
    <div className='w-full flex justify-between py-4 bg-[#0F0F0F] items-center mx-auto px-4 text-white z-20 '>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold'>
        {/**<Image src="/la_verde_png.jpg" width={120} height={80} className='py-4' />**/}
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center font-bold  '>
        {navItems.map(item => (
          <Link href={`${item.idName}`}>
            <li
            key={item.id}
            className='p-2 hover:bg-[#D5A354] hover:text-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
          </Link>
        ))}
      
        <li>
        <Link href="#booknow" className='bg-[#D5A354] py-3 rounded px-4'>
                    Appointment
                </Link>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block  md:hidden text-black '>
        {nav ? <AiOutlineClose size={30} className='text-white' /> : <FiAlignCenter className='text-white' size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full  border-r border-r-gray-900 bg-[#D5A354] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-white m-4'>MySaloon</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-white hover:text-black duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      <div className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 '>
      <Link href={"tel:06767676766"} className='md:flex items-center text-gray'>
        <RiCustomerService2Line />
        <p className=''>06767676766</p>
        </Link>
      </div>

      </ul>
    </div>
  );
};

export default Navbar;
