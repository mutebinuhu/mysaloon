"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Card from './Card';

const AboutUs = () => {
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
        <div  id="about-us" ref={sectionRef} className='bg-[#1F1F1F] container transition-opacity duration-1000 opacity- mx-auto space-between md:flex py-12 '>
            <section className='md:w-1/2 text-white/70 '>
           
            <h2 className='text-4xl text-center md:text-6xl text-white font-bold md:text-left '>About Us</h2>
            <p className='py-4'>
                Welcome to [my Saloon]! At our salon, we believe in enhancing your natural beauty with a touch of luxury and style. Our talented team of professionals is dedicated to providing top-notch hair, skin, and nail services tailored to your unique needs. With a passion for the latest trends and techniques, we ensure every visit leaves you feeling refreshed and confident. Experience the perfect blend of relaxation and transformation at [My Saloon]—where your beauty is our priority.
            </p>
            <div className='text-center md:text-left my-4 '>
                <Link href="#booknow" className='md:mr-2 bg-[#D5A354] text-white font-bold  py-3 rounded px-4 '>
                  Meet You Anywhere
                </Link>
                
                </div>
            </section>
            <section className='md:w-1/2 mt-12  md:mt-0 flex justify-center items-center'>
            
                <div className='w-96 relative'>
                    <p className='bg-[#D5A354] rounded-3xl text-white font-bold py-3 px-4 absolute bottom-12 right-0'>
                        Experienced Nail Doctors
                    </p>
                <div className=''>
                <Card
                image="https://img.freepik.com/free-photo/nail-art-professional-working-client-nails_23-2149265927.jpg?t=st=1717131094~exp=1717134694~hmac=3fbf6ae8c88e64c3ad7c707cb0891d10b5436ff05da57a053c12b4a7875909e6&w=360"
                />
                
                </div>
                </div>
           
            </section>
        </div>
    );
}

export default AboutUs;
