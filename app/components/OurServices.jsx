"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaScissors } from "react-icons/fa6";

const services = [
  {
    title: 'Haircuts & Styling',
    description: 'Get the perfect cut and style tailored to your personality. From classic trims to trendy cuts, our stylists ensure you leave looking your best.',
  },
  {
    title: 'Color & Highlights',
    description: 'Enhance your hair with our expert coloring services. Whether you want subtle highlights or a bold new hue, we have you covered.',
  },
  {
    title: 'Manicures & Pedicures',
    description: 'Pamper your hands and feet with our luxurious manicures and pedicures. Enjoy beautiful, healthy nails with our wide range of polish options.',
  },
  {
    title: 'Facials & Skincare',
    description: 'Rejuvenate your skin with our customized facial treatments. Our skincare experts use top-quality products to address your specific skin concerns.',
  },
  {
    title: 'Waxing & Hair Removal',
    description: 'Experience smooth, flawless skin with our professional waxing services. We offer a variety of options to ensure you feel comfortable and confident.',
  },
  {
    title: 'Special Occasion Styling',
    description: 'Look stunning for any event with our special occasion styling. From weddings to proms, our team will create the perfect look for your big day.',
  },
];

const OurServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-fadeIn');
          } else {
            section.classList.remove('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="services" ref={sectionRef} className="max-w-7xl mx-auto bg-[#0F0F0F] px-4 sm:px-6 lg:px-8 py-12">
                  <h2 className='text-4xl text-center md:text-6xl text-white font-bold md:text-left mb-4'>Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-[#1F1F1F] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-300 mb-4"><span className='md:flex items-center'><FaScissors className='text-[#D5A354] md:mx-2'/>{service.title}</span></h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      <div className='text-center m-12 text-white'>
      <Link href="#booknow" className='bg-[#D5A354] p-4 font-bold rounded px-6'>
                    Book Now
                    
                </Link>
    </div>
    </div>
  );
};

export default OurServices;
