'use client';

import React from 'react';
import Image from 'next/image';
import { images } from '@/utils/ImagesData';

const beds = [
  { img: images.Feaure1, name: 'Yellow ', price: '$799' },
  { img: images.Feaure2, name: 'Blue Couch', price: '$699' },
  { img: images.Feaure3, name: 'Modern ', price: '$499' },
];

const FeatureProducts = () => {
  return (
    <div className="w-full px-4 py-8">
      {/* <div
        className="relative w-68 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${images.headingBg})` }}
      >
        <h2 className="main-heading">Our Feature Products</h2>
      </div> */}
      <div
        className="relative w-64 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${images.headingBg})` }}

      >
        <h2 className="main-heading">Feature Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beds.map((bed, index) => (
          <div
            key={index}
            className="w-full rounded-lg overflow-hidden  group"
          >
            <div className="relative w-full h-90">
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

export default FeatureProducts;
