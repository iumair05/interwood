'use client';
import React from 'react';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { roomInspirationImages } from '@/utils/ImagesData';

const rooms = [
  {
    title: 'Modern Living Room',
    description:
      'Clean lines and minimalist design create a calming space for relaxation and entertainment.',
    image: roomInspirationImages.room1,
  },
  {
    title: 'Serene Bedroom',
    description:
      'Soft textures and neutral tones create the perfect sanctuary for restful sleep.',
    image: roomInspirationImages.room2,
  },
];

const RoomInspirationSection = () => {
  return (
    <section className="custom-container">

      <h2 className="main-heading my-8">
          Room Inspiration
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="w-full md:w-[500px] rounded-2xl overflow-hidden shadow-md bg-white flex flex-col"
            >
              <div className="relative h-[260px] md:h-[300px] w-full">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">
                  {room.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-snug mb-6">
                  {room.description}
                </p>
                <button className="flex items-center text-primaryText gap-2 font-medium text-sm md:text-base hover:underline">
                  Shop This Look
                  <ArrowForwardIcon fontSize="small" />
                </button>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
};

export default RoomInspirationSection;
