"use client";

import DiscoverMoreSection from '@/components/Explorehome/DiscoverMoreSection';
import ExploreHome from '@/components/Explorehome/ExploreHome';
import ExploreOffice from '@/components/Exploreoffice/ExploreOffice';
import OfficeCollection from '@/components/Exploreoffice/OfficeCollection';
import FeatureProducts from '@/components/FeatureProducts/FeatureProducts';
import HeroSection from '@/components/HeroSection/HeroSection';
import ModalSection from '@/components/ModalSection/ModalSection';
import UserReviews from '@/components/UserReviews/UserReviews';
import React from 'react';

export default function HomePage() {


  return (
    <div className='bg-[#F7EEE7]'>
      <HeroSection />
      <ModalSection />
      <ExploreHome />
      <DiscoverMoreSection />
      <ExploreOffice />
      <OfficeCollection />
      <FeatureProducts />
      <UserReviews />
    </div>
  );
}
