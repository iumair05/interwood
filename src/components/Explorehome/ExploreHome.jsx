'use client';
import React from 'react';
import Image from 'next/image';
import Bed1 from '../explorehomeImages/bed1.png';
import Bed2 from '../explorehomeImages/bed2.png';
import Bed3 from '../explorehomeImages/bed3.png';
import Bed4 from '../explorehomeImages/bed4.png';
import Bed5 from '../explorehomeImages/bed5.png';
import Bed6 from '../explorehomeImages/bed6.png';
import LayerExploreHome from '../explorehomeImages/layerExploreHome.png';

// Bed data
const beds = [
  { img: Bed1, name: 'Modern King Bed', price: '$799' },
  { img: Bed2, name: 'Classic Queen Bed', price: '$699' },
  { img: Bed3, name: 'Stylish Twin Bed', price: '$499' },
  { img: Bed4, name: 'Luxury Bed Frame', price: '$999' },
  { img: Bed5, name: 'Minimalist Bed', price: '$599' },
  { img: Bed6, name: 'Rustic Wooden Bed', price: '$849' },
];

const ExploreHome = () => {
  return (
    <div className="w-full px-4 py-8">
      <div
        className="relative w-60 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${LayerExploreHome.src})` }}
      >
        <h2 className="text-2xl font-bold text-black drop-shadow-md">Explore Home</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beds.map((bed, index) => (
          <div
            key={index}
            className="w-full rounded-lg overflow-hidden  group"
          >
            <div className="relative w-full h-64">
              <Image
                src={bed.img}
                alt={bed.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-none p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{bed.name}</h3>
              <p className="text-sm text-gray-600">{bed.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreHome;
