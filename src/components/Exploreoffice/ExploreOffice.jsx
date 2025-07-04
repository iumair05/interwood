'use client';
import React from 'react';
import Image from 'next/image';

import { exploreOfficeImages, images } from '@/utils/ImagesData';

const beds = [
  { img: exploreOfficeImages.office1, name: 'Yellow', price: '$799' },
  { img: exploreOfficeImages.office2, name: 'Blue Couch', price: '$699' },
  { img: exploreOfficeImages.office3, name: 'Modern', price: '$499' },
  { img: exploreOfficeImages.office4, name: 'Elegant', price: '$999' },
  { img: exploreOfficeImages.office5, name: 'Sleek', price: '$599' },
  { img: exploreOfficeImages.office6, name: 'Minimalist', price: '$849' },
];


const ExploreOffice = () => {
  return (
    <div className="custom-container">
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