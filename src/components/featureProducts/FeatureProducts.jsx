'use client';

import React from 'react';
import Image from 'next/image';
import { images } from '@/utils/ImagesData';

const beds = [

  { img: images.Feaure1, name: "Feature 1" },
  { img: images.Feaure2, name: "Feature 2" },
  { img: images.Feaure3, name: "Feature 3" }
];

const FeatureProducts = () => {

  return (
    <div className="custom-container">
      {/* Heading Section */}
      <div
        className="relative w-64 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${images.headingBg})` }}
      >
        <h2 className="main-heading">Feature Products</h2>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beds.map((bed, index) => (
          <div
            key={index}
            className="w-full aspect-square relative overflow-hidden rounded-lg group"
          >
            <Image
              src={bed.img}
              alt={bed.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
