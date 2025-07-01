import HeroPage from '@/commons/PageHero'
import NewsletterSignup from '@/components/ExploreOffice/NewsletterSignup'
import OfficeCategories from '@/components/ExploreOffice/OfficeCategories'
import RoomInspirationSection from '@/components/ExploreOffice/RoomInspirationSection'
import { homeCategories } from '@/utils/ImagesData'
import React from 'react'

const ExploreHomePage = () => {
  return (
    <div>
      <HeroPage
        imageUrl={homeCategories.homeImg}
        title={<>Furnish Every Corner of <br /> Your Home</>}
        description="Browse by room, category, and style to discover your perfect piece."
      />
      <OfficeCategories />
      <RoomInspirationSection />
      <NewsletterSignup />
    </div>
  )
}

export default ExploreHomePage;