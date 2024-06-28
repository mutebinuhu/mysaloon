import React from 'react';

const Counters = ({icon, statistics, text}) => {
    return (
        <div className='bg-white w-1/4 h-46 drop-shadow-xl' >
          <div className='p-4 md:flex flex-col justify-between h-36'>
          <div className='bg-gray-100  w-12 h-12 md:flex justify-center items-center rounded-full'>
            {icon}
          </div>
          <div>
            <p className='font-bold text-2xl'>{statistics}</p>
            <p className='text-gray-400 text-sm'>{text}</p>
          </div>
          </div>
        </div>
    );
}

export default Counters;
