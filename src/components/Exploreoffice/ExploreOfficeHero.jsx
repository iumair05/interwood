'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { exploreOfficeBrowseCategoryImages } from '@/utils/ImagesData'

const slides = [
    {
      id: 1,
      web: exploreOfficeBrowseCategoryImages.Browse1,
      mobile: exploreOfficeBrowseCategoryImages.Browse1, // Add mobile versions if you have them
      alt: 'Summer Sale'
    },
    {
      id: 2,
      web: exploreOfficeBrowseCategoryImages.Browse2,
      mobile: exploreOfficeBrowseCategoryImages.Browse2,
      alt: 'BaadMay'
    },
    {
      id: 3,
      web: exploreOfficeBrowseCategoryImages.Browse3,
      mobile: exploreOfficeBrowseCategoryImages.Browse3,
      alt: 'Cafeteria'
    },
    {
      id: 4,
      web: exploreOfficeBrowseCategoryImages.Browse4,
      mobile: exploreOfficeBrowseCategoryImages.Browse4,
      alt: 'View Furniture'
    },
    {
      id: 5,
      web: exploreOfficeBrowseCategoryImages.Browse5,
      mobile: exploreOfficeBrowseCategoryImages.Browse5,
      alt: 'Image 5'
    },
    {
      id: 6,
      web: exploreOfficeBrowseCategoryImages.Browse6,
      mobile: exploreOfficeBrowseCategoryImages.Browse6,
      alt: 'Image 6'
    },
    {
      id: 7,
      web: exploreOfficeBrowseCategoryImages.Browse7,
      mobile: exploreOfficeBrowseCategoryImages.Browse7,
      alt: 'Image 7'
    },
    {
      id: 8,
      web: exploreOfficeBrowseCategoryImages.Browse8,
      mobile: exploreOfficeBrowseCategoryImages.Browse8,
      alt: 'Image 8'
    }
];

const ExploreOfficeHeroSection = () => {

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ 
          delay: 3000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        loop={true}
        className="w-full h-full"
        spaceBetween={0} 
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Desktop Image */}
            <div className="hidden md:block w-full h-[90vh] relative">
              {slide.web && (
                <Image
                  src={slide.web}
                  alt={slide.alt}
                  fill
                  className="object-cover bg-center bg-cover"
                  priority={slide.id === 1} 
                />
              )}
            </div>
            
            {/* Mobile Image */}
            <div className="md:hidden w-full h-[60vh] relative">
              {slide.mobile && (
                <Image
                  src={slide.mobile}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={slide.id === 1} 
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Centered pagination styling */}
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

          .swiper-pagination-bullet-active {
          background-color: #b2a191;
          transform: scale(1.2);
        }

        .swiper-pagination {
          bottom: 20px !important;
          text-align: center;
        }
        }
      `}</style>

    </div>
  )
}

export default ExploreOfficeHeroSection