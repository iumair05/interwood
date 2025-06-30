'use client';

import { modalSectionImages } from '@/utils/ImagesData';
import Image from 'next/image';
import React from 'react';
import CanvasSection from './CanvasSection';

const ModalSection = () => {
  return (
    <div className="custom-container">
      <h1 className="main-heading text-center">Experience the 3D Difference</h1>
      <p className="my-2 text-center text-primaryText">
        Unlock Your Creativity with Our Intuitive 3D Design Tool
      </p>


      <div className="md:hidden w-full flex justify-center my-4 overflow-x-auto">
        <section className="flex items-center gap-2">
          <Image
            src={modalSectionImages.chair1}
            alt="chair picture"
            width={60}
            height={60}
            className="object-cover rounded"
          />
          <Image
            src={modalSectionImages.chair2}
            alt="chair picture"
            width={60}
            height={60}
            className="object-cover rounded"
          />
          <Image
            src={modalSectionImages.chair3}
            alt="chair picture"
            width={60}
            height={60}
            className="object-cover rounded"
          />
          <Image
            src={modalSectionImages.chair4}
            alt="chair picture"
            width={60}
            height={60}
            className="object-cover rounded"
          />
        </section>
      </div>

      <div className="flex md:flex-row flex-col md:justify-between items-center flex-wrap gap-2">

        {/* Left Side Text + Images */}
        <div className="hidden md:flex flex-col items-center my-4">
          {/* Bed */}
          <section className="flex flex-col items-center my-2">
            <p className="text-lg font-semibold">Personalize Your Bed</p>
            <p className="font-normal text-primaryText leading-tighter tracking-tighter text-center">
              Bring Your Furniture <br />
              Visions to Life with
            </p>
            <Image
              src={modalSectionImages.chair1}
              alt="chair picture"
              width={100}
              height={100}
              className="object-cover my-2 rounded"
            />
          </section>

          {/* Sofa */}
          <section className="flex flex-col items-center my-2">
            <p className="text-lg font-semibold">Personalize Your Sofa</p>
            <p className="font-normal text-primaryText leading-tighter tracking-tighter text-center">
              Transform Your Home with <br />
              Customizable 3D Furniture
            </p>
            <Image
              src={modalSectionImages.chair2}
              alt="chair picture"
              width={100}
              height={100}
              className="object-cover my-2 rounded"
            />
          </section>
        </div>

        {/* Center Canvas */}
        <div className="w-full md:w-[600px] md:h-[400px] h-[300px] flex justify-start items-center mx-auto overflow-hidden">
          <CanvasSection />
        </div>

        {/* Right Side Text + Images */}
        <div className="hidden md:flex flex-col items-center my-4">
          {/* Chair */}
          <section className="flex flex-col items-center my-2">
            <p className="text-lg font-semibold">Personalize Your Chair</p>
            <p className="font-normal text-primaryText leading-tighter tracking-tighter text-center">
              Elevate Your Space <br />
              with Personalized 3D
            </p>
            <Image
              src={modalSectionImages.chair3}
              alt="chair picture"
              width={100}
              height={100}
              className="object-cover my-4 rounded"
            />
          </section>

          {/* Table */}
          <section className="flex flex-col items-center my-2">
            <p className="text-lg font-semibold">Personalize Your Table</p>
            <p className="font-normal text-primaryText leading-tighter tracking-tighter text-center">
              Experience the Power of <br />
              3D Furniture Design
            </p>
            <Image
              src={modalSectionImages.chair4}
              alt="chair picture"
              width={100}
              height={100}
              className="object-cover my-4 rounded"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModalSection;
