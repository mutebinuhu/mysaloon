import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter, FaTiktok, FaYoutube } from "react-icons/fa6";
import Link from 'next/link';





const Socials = () => {
    return (
       <ul className='flex justify-between space-x-8'>
            <li>
                <Link href="https://www.facebook.com" target='_blank'>
                    <FaFacebookSquare className='text-4xl text-blue-500' />
                </Link>
            </li>

            <li>
                <Link href="https://www.instagram.com" target='_blank'>
                  <IoLogoInstagram className='text-4xl' />
                </Link>
            </li>

            <li>
                <Link href="https://www.tiktok.com" target='_blank'>
                <FaSquareXTwitter className='text-4xl' />
            </Link>
            </li>

            <li>
            <Link href="https://www.tiktok.com" target='_blank'>
                  <FaTiktok className='text-4xl' />
            </Link>

            </li>
            <li>
            <Link href="https://www.youtube.com" className='text-red-500' target='_blank'>
                  <FaYoutube className='text-4xl' />
            </Link>

            </li>
       </ul>
    );
}

export default Socials;