import HeroPage from "@/commons/PageHero";
import HomeCategories from "@/components/ExploreHome/HomeCategories";
import NewsletterSignup from "@/components/ExploreOffice/NewsletterSignup";
import RoomInspirationSection from "@/components/ExploreOffice/RoomInspirationSection";
import { homeCategories } from "@/utils/ImagesData";


const ExploreOfficePage = () => {
  return (
    <div>
      <HeroPage
        imageUrl={homeCategories.homeImg}
        title={<>Furnish Every Corner of <br /> Your Home</>}
        description="Browse by room, category, and style to discover your perfect piece."
      />
      <HomeCategories />
      <RoomInspirationSection />
      <NewsletterSignup />
    </div>
  )
}

export default ExploreOfficePage;
