"use client";

import React from 'react';

import HeroSection from '@/components/HeroSection/HeroSection';
import ExploreHome from '@/components/Explorehome/ExploreHome';
import ExploreOffice from '@/components/Exploreoffice/ExploreOffice';
import DiscoverMoreSection from '@/components/discovermore/DiscoverMoreSection';
import FeatureProducts from '@/components/featureProducts/FeatureProducts';
import UserReviews from '@/components/UserReviews/UserReviews';

export default function HomePage() {


  return (
    <div className='bg-[#F7EEE7]'>
      <HeroSection />
      <ExploreHome />
      <DiscoverMoreSection />
      <ExploreOffice />
      <FeatureProducts />
      <UserReviews />
    </div>
  );
}
