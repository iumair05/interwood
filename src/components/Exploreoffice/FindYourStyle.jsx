'use client';
import CustomButton from '@/commons/CustomButton';
import React from 'react';

const FindYourStyle = () => {
  return (
    <div className="px-4 flex justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-4xl w-full">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Find Your Perfect Style
        </h2>
        <p className="text-gray-600 mb-6">
          Find stylish, functional pieces for every space in your home. Browse our full collection today and transform your living spaces with our curated selection.
        </p>

        <CustomButton text="Explore All Categories" />

      </div>
    </div>
  );
};

export default FindYourStyle;