'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import BaadMayWeb from '../heroSliderImages/baadmay-web.webp'
import BaadMayMobile from '../heroSliderImages/baadmay-mobile.webp'
import CafeteriaWeb from '../heroSliderImages/cafeteria-web.webp'
import CafeteriaMobile from '../heroSliderImages/cafeteria-mobile.webp'
import SummerSaleWeb from '../heroSliderImages/summerSale-web.webp'
import SummerSaleMobile from '../heroSliderImages/summerSale-mobile.webp'
import ViewFurnitureWeb from '../heroSliderImages/viewFurniture-web.webp'
import ViewFurnitureMobile from '../heroSliderImages/viewFurniture-mobile.webp'

const slides = [
    {
      id: 3,
      web: SummerSaleWeb,
      mobile: SummerSaleMobile,
      alt: 'Summer Sale',
    },
    {
      id: 1,
      web: BaadMayWeb,
      mobile: BaadMayMobile,
      alt: 'BaadMay',
    },
    {
      id: 2,
      web: CafeteriaWeb,
      mobile: CafeteriaMobile,
      alt: 'Cafeteria',
    },
    {
      id: 4,
      web: ViewFurnitureWeb,
      mobile: ViewFurnitureMobile,
      alt: 'View Furniture',
    },
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Desktop Image */}
            <div className="hidden md:block w-full h-[520px] relative">
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
        .swiper-pagination {
          bottom: 20px !important;
          text-align: center;
        }
        .swiper-pagination-bullet {
          background: #000;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default HeroSection
