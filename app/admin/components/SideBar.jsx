"use client"
import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

import { Transition } from '@headlessui/react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="bg-gray-800 text-white w-64">
    <ul class="py-4">
      <li class="px-4 py-2 hover:bg-gray-700">
        <a href="#" class="block">Home</a>
      </li>
      <li class="px-4 py-2 hover:bg-gray-700">
        <a href="#" class="block">Coming Soon</a>
      </li>
      <li class="px-4 py-2 hover:bg-gray-700">
      <a href="#" class="block">Coming Soon</a>

      </li>
      <li class="px-4 py-2 hover:bg-gray-700">
      <a href="#" class="block">Coming Soon</a>

      </li>
    </ul>
  </nav>
  );
};
export default SideBar;
