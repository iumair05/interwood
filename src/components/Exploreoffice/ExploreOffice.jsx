'use client';
import React from 'react';
import Image from 'next/image';
import Office1 from '../exploreofficeImages/office1.png';
import Office2 from '../exploreofficeImages/office2.png';
import Office3 from '../exploreofficeImages/office3.png';
import Office4 from '../exploreofficeImages/office4.png';
import Office5 from '../exploreofficeImages/office5.png';
import Office6 from '../exploreofficeImages/office6.png';
import LayerExploreHome from '../explorehomeImages/layerExploreHome.png';

const beds = [
  { img: Office1, name: 'Yellow ', price: '$799' },
  { img: Office2, name: 'Blue Couch', price: '$699' },
  { img: Office3, name: 'Modern ', price: '$499' },
  { img: Office4, name: 'Elegant ', price: '$999' },
  { img: Office5, name: 'Sleek ', price: '$599' },
  { img: Office6, name: 'Minimalist ', price: '$849' },
];

const ExploreOffice = () => {
  return (
    <div className="w-full px-4 py-8">
      <div
        className="relative w-60 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${LayerExploreHome.src})` }}
      >
        <h2 className="text-2xl font-bold text-black drop-shadow-md">Explore Office</h2>
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

export default ExploreOffice;
