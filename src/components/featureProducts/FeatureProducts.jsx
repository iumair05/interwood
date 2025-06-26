'use client';
import React from 'react';
import Image from 'next/image';
import Feature1 from '../featureProductImages/feature1.png';
import Feature2 from '../featureProductImages/feature2.png';
import Feature3 from '../featureProductImages/feature3.png';
import LayerExploreHome from '../explorehomeImages/layerExploreHome.png';

const beds = [
  { img: Feature1, name: 'Yellow ', price: '$799' },
  { img: Feature2, name: 'Blue Couch', price: '$699' },
  { img: Feature3, name: 'Modern ', price: '$499' },
];

const FeatureProducts = () => {
  return (
    <div className="w-full px-4 py-8">
      <div
        className="relative w-68 h-12 flex items-center justify-center bg-center bg-cover mb-6"
        style={{ backgroundImage: `url(${LayerExploreHome.src})` }}
      >
        <h2 className="text-2xl font-bold text-black drop-shadow-md">Our Feature Products</h2>
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

export default FeatureProducts;
