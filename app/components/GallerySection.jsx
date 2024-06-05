import React from 'react';

const GallerySection = () => {
  const images = [
    'esthetician.jpg',
    'barber-shop.jpg',
    'cb2953ec-3fb9-4a67-9975-cc1feb334e4b.jpg',
    'esthetician.jpg',
    'barber-shop.jpg',
    'cb2953ec-3fb9-4a67-9975-cc1feb334e4b.jpg',
  ];

  return (
    <div className="py-12 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white/70 sm:text-4xl">
          Our Gallery
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-white/90 sm:mt-4">
          Explore our recent work and the wonderful experiences of our clients.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 px-4 sm:px-6 lg:px-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
