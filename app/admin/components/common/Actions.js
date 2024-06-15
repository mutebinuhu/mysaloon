// Actions.js
import React from 'react';
import { FaEye, FaEdit } from 'react-icons/fa';

const Actions = ({ onView, onEdit }) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={onView}
        className="flex items-center justify-center p-2 text-gray-500  rounded hover:bg-gray-600 hover:text-white transition duration-300"
      >
        <FaEye className="w-5 h-5" />
      </button>
      <button
        onClick={onEdit}
        className="flex items-center justify-center p-2 text-gray-500 rounded hover:bg-gray-600 hover:text-white transition duration-300"
      >
        <FaEdit className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Actions;
