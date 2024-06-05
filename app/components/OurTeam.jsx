import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Master Stylist',
    imageUrl: '/stylist.jpg', // Replace with your image URL
    bio: 'John is a highly skilled stylist with over 10 years of experience in the industry. He specializes in modern cuts and color techniques.',
  },
  {
    name: 'Jane Smith',
    role: 'Senior Esthetician',
    imageUrl: '/esthetician.jpg', // Replace with your image URL
    bio: 'Jane is our skincare expert, known for her personalized facial treatments and skincare advice tailored to each client’s needs.',
  },
  {
    name: 'Emily Johnson',
    role: 'Nail Technician',
    imageUrl: '/cb2953ec-3fb9-4a67-9975-cc1feb334e4b.jpg', // Replace with your image URL
    bio: 'Emily is a talented nail technician with a passion for creative nail art and designs. She ensures every client leaves with beautiful nails.',
  },
];

const OurTeam = () => {
  return (
    <div className="max-w-7xl bg-[#1F1F1F] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-white/80 text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
         <div className='p-4 bg-[#0F0F0F] hover:bg-[#D5A354] text-white '>
           <div key={index} className="p-6 bg-[#0F0F0F]   hover:bg-[#D5A354] hover:text-gray-800 h-96  shadow-md flex justify-center w-full items-center" style={{backgroundImage: "url(" + member.imageUrl + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
         
           {/** <p className="text-white/60">{member.bio}</p> */}
              
          
          </div>
          <div className='text-center mt-4'>
          <h3 className="text-xl font-semibold text-white/80 mb-2">{member.name}</h3>
            <p className=" mb-4">{member.role}</p>
          </div>
         </div>
          
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
