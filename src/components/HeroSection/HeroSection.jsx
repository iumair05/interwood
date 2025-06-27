'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { HeroSectionImages } from '@/utils/ImagesData'

const slides = [
  {
    id: 3,
    web: HeroSectionImages.SummerSaleWeb,
    mobile: HeroSectionImages.SummerSaleMobile,
    alt: 'Summer Sale'
  },
  {
    id: 1,
    web: HeroSectionImages.BaadMayWeb,
    mobile: HeroSectionImages.BaadMayMobile,
    alt: 'BaadMay'
  },
  {
    id: 2,
    web: HeroSectionImages.CafeteriaWeb,
    mobile: HeroSectionImages.CafeteriaMobile,
    alt: 'Cafeteria'
  },
  {
    id: 4,
    web: HeroSectionImages.ViewFurnitureWeb,
    mobile: HeroSectionImages.ViewFurnitureMobile,
    alt: 'View Furniture'
  }
]

const HeroSection = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            {/* Desktop Image */}
            <div className="hidden md:block w-full h-[90vh] relative">
              <Image
                src={slide.web}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden w-full h-[650px] relative">
              <Image
                src={slide.mobile}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Centered pagination styling */}
      <style jsx global>{`
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
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
`}</style>


    </div>
  )
}

export default HeroSection
