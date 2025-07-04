'use client';

import React from 'react';
import Image from 'next/image';

import { exploreSectionImages, images } from '@/utils/ImagesData';

const beds = [
  { img: exploreSectionImages.bed, name: 'Modern King Bed', price: '$799' },
  { img: exploreSectionImages.sofa, name: 'Classic Queen Bed', price: '$699' },
  { img: exploreSectionImages.chair, name: 'Stylish Twin Bed', price: '$499' },
  { img: exploreSectionImages.dining, name: 'Luxury Bed Frame', price: '$999' },
  { img: exploreSectionImages.wardrobe, name: 'Minimalist Bed', price: '$599' },
  { img: exploreSectionImages.table, name: 'Rustic Wooden Bed', price: '$849' },
];


const ExploreHome = () => {

  return (
    <div className="custom-container">


      <div
        className="relative w-60 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${images.headingBg})` }}

      >
        <h2 className="main-heading">Explore Home</h2>
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

export default ExploreHome;