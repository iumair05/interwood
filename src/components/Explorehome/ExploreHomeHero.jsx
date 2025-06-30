'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { homeCategories } from '@/utils/ImagesData';

const slides = [
  {
    id: 1,
    img: homeCategories.figma1,
    alt: 'Summer Sale',
  },
  {
    id: 2,
    img: homeCategories.figma2,
    alt: 'BaadMay',
  },
  {
    id: 3,
    img: homeCategories.figma3,
    alt: 'Cafeteria',
  },
  {
    id: 4,
    img: homeCategories.figma4,
    alt: 'View Furniture',
  },
  {
    id: 5,
    img: homeCategories.figma5,
    alt: 'Image 5',
  },
  {
    id: 6,
    img: homeCategories.figma6,
    alt: 'Image 6',
  },
];

const ExploreHomeHero = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="w-full h-full"
        spaceBetween={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Desktop Image */}
            <div className="hidden md:block w-full h-[90vh] relative">
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>

            {/* Mobile Image (Using same image for mobile for now) */}
            <div className="md:hidden w-full h-[60vh] relative">
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: transparent;
          border: 2px solid #b2a191;
          opacity: 1;
          border-radius: 50%;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #b2a191;
          transform: scale(1.2);
        }

        .swiper-pagination {
          bottom: 20px !important;
          text-align: center;
        }

        @media (max-width: 768px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ExploreHomeHero;
