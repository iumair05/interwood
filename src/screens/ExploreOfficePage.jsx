import ExploreOfficeHero from '@/components/ExploreOffice/ExploreOfficeHero'
import FindYourStyle from '@/components/ExploreOffice/FindYourStyle'
import NewsletterSignup from '@/components/ExploreOffice/NewsletterSignup'
import OfficeCategories from '@/components/ExploreOffice/OfficeCategories'
import RoomInspirationSection from '@/components/ExploreOffice/RoomInspirationSection'
import React from 'react'

const ExploreHomePage = () => {
  return (
    <div>
      <ExploreOfficeHero />
      <OfficeCategories />
      <FindYourStyle />
      <RoomInspirationSection />
      <NewsletterSignup />
    </div>
  )
}

export default ExploreHomePage;