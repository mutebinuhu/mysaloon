import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

import { Transition } from '@headlessui/react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4 space-y-6">
          <h2 className="text-2xl font-bold">Salon Appointments</h2>
          <nav>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Appointments</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Services</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Customers</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Settings</a>
          </nav>
          <button
          className="p-2 text-gray-800 bg-gray-200 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        </div>
      </Transition>
      
      {/* Content */}
      <div className="flex-1 p-4">
        
        <FiAlignJustify className='text-2xl' onClick={() => setIsOpen(!isOpen)}/>


        <div className="mt-4">
          {/* Your main content goes here */}
          <h1 className="text-3xl font-bold">Welcome to the Salon Appointment System</h1>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
