import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden  shadow-lg bg-white">
      <div
        className="bg-cover bg-center h-48"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
    </div>
  );
};

export default Card;
