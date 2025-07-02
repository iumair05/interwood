"use client";

import HeroSection from '@/components/HeroSection/HeroSection';
import ModalSection from '@/components/ModalSection/ModalSection';
import UserReviews from '@/components/UserReviews/UserReviews';
import React from 'react';
import DiscoverMoreSection from '@/components/Explorehome/DiscoverMoreSection';
import ExploreHome from '@/components/Explorehome/ExploreHome';
import ExploreOffice from '@/components/Exploreoffice/ExploreOffice';
import OfficeCollection from '@/components/Exploreoffice/OfficeCollection';
import FeatureProducts from '@/components/featureProducts/FeatureProducts';

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
