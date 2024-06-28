import React from 'react';
import 'tailwindcss/tailwind.css';

const CallToActionButton = ({text}) => {
  return (
    <div className="flex justify-center items-center p-4">
      <button className="px-6 py-3 text-lg font-semibold text-white bg-[#D5A354] rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      </button>
      {text}
    </div>
  );
};

export default CallToActionButton;
