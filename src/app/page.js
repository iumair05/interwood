"use client";

import DiscoverMoreSection from '@/components/ExploreHome/DiscoverMoreSection';
import ExploreHome from '@/components/ExploreHome/ExploreHome';
import ExploreOffice from '@/components/ExploreOffice/ExploreOffice';
import OfficeCollection from '@/components/ExploreOffice/OfficeCollection';

import HeroSection from '@/components/HeroSection/HeroSection';
import ModalSection from '@/components/ModalSection/ModalSection';
import UserReviews from '@/components/UserReviews/UserReviews';
import React from 'react';
import FeatureProducts from '@/components/FeatureProducts/FeatureProducts';

export default function HomePage() {

  return (
    <div>
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
