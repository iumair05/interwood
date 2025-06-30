import ExploreHomeHero from "@/components/ExploreHome/ExploreHomeHero";
import HomeCategories from "@/components/ExploreHome/HomeCategories";
import FindYourStyle from "@/components/ExploreOffice/FindYourStyle";
import NewsletterSignup from "@/components/ExploreOffice/NewsletterSignup";
import RoomInspirationSection from "@/components/ExploreOffice/RoomInspirationSection";


const ExploreOfficePage = () => {
  return (
    <div>
      <ExploreHomeHero />
      <HomeCategories />

      <FindYourStyle />
      <RoomInspirationSection />
      <NewsletterSignup />
    </div>
  )
}

export default ExploreOfficePage;
