import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";
import { MdCall } from "react-icons/md";



const Topheader = () => {
    return (
        <header className='bg-[#D5A354] flex justify-between items-center container'>
            <section>
                <ul className='flex items-center text-sm text-bold py-2'>
                    <li className='text-white'>
                        <Link href="tel:+2567585000" className='md:flex'> 
                        <MdCall/>

                        </Link>
                        </li>
                        <li className='text-white'>
                        <Link href="tel:+2567585000" className=''> 
                        +25678388398
                        </Link>
                        </li>
                </ul>
            </section>
            <ul className='text-white flex space-x-2'>
                <li><Link href=""><FaFacebook/></Link></li>
                <li>
                <Link href=""><AiFillInstagram/></Link>

                </li>
                <Link href=""><FaSnapchat/></Link>
            </ul>
        </header>
    );
}

export default Topheader;
