import HeroPage from "@/commons/PageHero";
import ExploreCategory from "@/components/ExploreCategory/ExploreCategory";
import NewsletterSignup from "@/components/ExploreCategory/NewsletterSignup";
import RoomInspirationSection from "@/components/ExploreCategory/RoomInspirationSection";
import { homeCategories } from "@/utils/ImagesData";


const ExploreCategoryPage = () => {
  return (
    <div>
      <HeroPage
        imageUrl={homeCategories.homeImg}
        title={<>Furnish Every Corner of <br /> Your Home</>}
        description="Browse by room, category, and style to discover your perfect piece."
      />
      <ExploreCategory />
      <RoomInspirationSection />
      <NewsletterSignup />
    </div>
  )
}

export default ExploreCategoryPage;
