import HeroPage from "@/commons/PageHero";
import ContactPage from "@/components/ContactUs/ContactPage";
import FAQ from "@/components/ContactUs/FAQ";
import QuestionsSection from "@/components/ContactUs/QuestionsSection";
import { homeCategories } from "@/utils/ImagesData";


const Contact = () => {
  return (
    <div>
      <HeroPage
        imageUrl={homeCategories.homeImg}
        title={<>Get In Touch With Us</>}
        description="We're here to help you design your dream space."
      />
      <ContactPage />
      <FAQ />
      <QuestionsSection />
    </div>
  )
}

export default Contact;
