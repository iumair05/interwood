'use client';
import React from 'react';
import Image from 'next/image';

import { ExploreOfficeImages, images } from '@/utils/ImagesData';

const beds = [
  { img: ExploreOfficeImages.Office1, name: 'Yellow', price: '$799' },
  { img: ExploreOfficeImages.Office2, name: 'Blue Couch', price: '$699' },
  { img: ExploreOfficeImages.Office3, name: 'Modern', price: '$499' },
  { img: ExploreOfficeImages.Office4, name: 'Elegant', price: '$999' },
  { img: ExploreOfficeImages.Office5, name: 'Sleek', price: '$599' },
  { img: ExploreOfficeImages.Office6, name: 'Minimalist', price: '$849' },
];


const ExploreOffice = () => {
  return (
    <div className="w-full px-4 py-8">
      <div
        className="relative w-60 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${images.headingBg})` }}
      >
        <h2 className="main-heading">Explore Office</h2>
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
 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOffice;