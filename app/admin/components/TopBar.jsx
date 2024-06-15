import React from 'react';
import { FaRegBell } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";


const Search = ()=>{
    return(
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
              <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </div>
      </div>
    )
}

const Profile = () =>{
    return(
        <div>
            <FaRegUserCircle  className='w-12 h-12'/>
        </div>
    )
}
const TopBar = () => {
    return (
        <nav className='drop-shadow-md bg-white mx-4 '>
            <div className='flex justify-between'>
            <div className='flex'>
                <p className='mt-6 px-2'>Search</p>
            </div>
            <div className='w-1/5 p-2'>
                <ul className='flex space-x-4 items-center'>
                    <li className='bg-gray-100 w-12 h-12 md:flex justify-center items-center rounded-full'><FaRegBell className='font-bold text-3xl text-purple-600' /></li>
                    <li className='bg-gray-100 w-12 h-12 md:flex justify-center items-center rounded-full'><FiMessageCircle className='font-bold text-3xl text-purple-600' /></li>
                    <li><Profile/></li>

                </ul>

              
            </div>
            </div>
        </nav>
    );
}

export default TopBar;
