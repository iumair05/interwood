'use client';

import React from 'react';
import Image from 'next/image';

const HeroPage = ({
  imageUrl,
  title,
  description,
  imageAlt = 'Hero Image',
}) => {
  return (
    <div className="relative w-full h-[50vh] md:h-[90vh]">
      {/* Hero Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover bg-center bg-cover"
        priority
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">{title}</h1>
        <p className="text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default HeroPage;