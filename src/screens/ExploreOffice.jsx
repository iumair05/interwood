import BrowseCategories from '@/components/Exploreoffice/BrowseCategories'
import ExploreOfficeHeroSection from '@/components/Exploreoffice/ExploreOfficeHeroSection'
import FindYourStyle from '@/components/Exploreoffice/FindYourStyle'
import NewsletterSignup from '@/components/Exploreoffice/NewsletterSignup'
import RoomInspirationSection from '@/components/Exploreoffice/RoomInspirationSection'
import React from 'react'

const ExploreOffice = () => {
  return (
    <div>
      <ExploreOfficeHeroSection />
      <BrowseCategories />
      <FindYourStyle />
      <RoomInspirationSection />
      <NewsletterSignup />
    </div>
  )
}

export default ExploreOffice
