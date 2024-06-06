import React from 'react';
import Socials from './Socials';
import Link from 'next/link';
import NewsletterSignup from '@/app/components/NewsletterSignup';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-bold border-t">
      <NewsletterSignup/>
      <div className="">
       
          <ul className="mx-4 flex justify-between md:hidden">
            <li><a href="#">Home</a></li>
            <li><a href="#about-us">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact-us">Contact</a></li>
            <li><a href="#book-now">Book Now</a></li>

          </ul>
      </div>
      <div className='flex justify-center mt-12'>
      <Socials/>
      </div>
      <p className='text-center py-12'>@2024 MySaloon</p>
      <div className='md:flex justify-center'>
      <ul className="mx-4 md:flex justify-between hidden ">
            <li><Link href="#">Home|</Link></li>
            <li><Link href="#about">About|</Link></li>
            <li><Link href="#services">Services|</Link></li>
            <li><Link href="#contact-us">Contact|</Link></li>
            <li><Link href="#booknow">Book Now</Link></li>

          </ul>
      </div>
    </footer>
  );
};

export default Footer;