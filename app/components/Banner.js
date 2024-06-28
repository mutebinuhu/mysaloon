import React from 'react';
import Link from 'next/link';


const Banner = () => {
    return (
        <div className='md:flex justify-between bg-[#0F0F0F] items-center md:space-x-12'>
            <div className=' w-full md:w-full  text-center md:text-left md:ml-8'>
                <h1 className='text-5xl font-semibold text-white	 text-normal'>Are You Looking for a perfect haircut </h1>
                <p className='py-8 tracking-wide text-white'>
                    Meet our experienced Barbers that will give You a perfect new look with the best customer care at affordable rates
                </p>
                <p className='py-2 tracking-wide text-white '>
                    Get <span className='text-4xl font-bold'>90%</span> discount on first appointment
                </p>
                <div className='text-center md:text-left my-4 '>
                <Link href="#booknow" className='md:mr-2 bg-[#D6A354] text-white font-bold  py-3 rounded px-4 '>
                Book In-Home Saloon
                </Link>
                
                </div>
                <p className='py-2 text-sm text-white '>
                    Rated #1 Best National Barbers In Uganda
                </p>
                <p >⭐⭐⭐⭐⭐ <span className='text-white'>{"(ratings)"}</span></p>

                


              
                
               <div className=''>
             

               </div>
            
            </div>
            <div className='w-full md:mr-8 mt-6   h-60 md:h-96 ' style={{backgroundImage: "url(" + "/man-barbershop-salon-doing-haircut-beard-trim-Photoroom.png-Photoroom.png" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
  
            </div>

        </div>
    );
}

export default Banner;