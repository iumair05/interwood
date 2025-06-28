'use client';

import React from 'react';
import Image from 'next/image';

import { ExploreSectionImages, images } from '@/utils/ImagesData';

const beds = [
  { img: ExploreSectionImages.bed, name: 'Modern King Bed', price: '$799' },
  { img: ExploreSectionImages.sofa, name: 'Classic Queen Bed', price: '$699' },
  { img: ExploreSectionImages.chair, name: 'Stylish Twin Bed', price: '$499' },
  { img: ExploreSectionImages.dining, name: 'Luxury Bed Frame', price: '$999' },
  { img: ExploreSectionImages.wardrobe, name: 'Minimalist Bed', price: '$599' },
  { img: ExploreSectionImages.table, name: 'Rustic Wooden Bed', price: '$849' },
];


const ExploreHome = () => {

  return (
    <div className="w-full px-4 py-8">
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