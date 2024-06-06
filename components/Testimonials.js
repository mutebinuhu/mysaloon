import Link from 'next/link';
import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'Amazing service! My hair has never looked better.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
  },
  {
    name: 'John Smith',
    feedback: 'Very convenient and professional. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 4,
  },
  {
    name: 'Alice Johnson',
    feedback: 'The mobile salon came right to my doorstep. Fantastic experience!',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-cover bg-center py-8 " style={{ backgroundImage: 'url("handsome-man-barbershop-shaving-beard-Photoroom.png-Photoroom.png")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-white mb-6">What Our Clients Are Saying</h2>
        <div className="md:flex md:space-x-4  ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-90 p-4 m-4 md:m-0 rounded-lg shadow-md flex items-center space-x-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.feedback}</p>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27l5.18 3.73-1.64-5.81L20 10.27l-5.86-.42L12 4.6 9.86 9.85 4 10.27l4.46 4.19-1.64 5.81L12 17.27z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
           
        </div>
        <div className='text-center m-12 text-white'>
      <Link href="#booknow" className='bg-[#D5A354] p-4 font-bold rounded px-6'>
                    Schedule a Visit
                </Link>
    </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
