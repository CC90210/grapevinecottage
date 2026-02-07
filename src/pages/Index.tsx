import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import EventsBanner from "@/components/home/EventsBanner";
import CollectionsSection from "@/components/home/CollectionsSection";
import ShopExperienceSection from "@/components/home/ShopExperienceSection";
import StoryPreviewSection from "@/components/home/StoryPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VisitSection from "@/components/home/VisitSection";
import SocialSection from "@/components/home/SocialSection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Unique Gifts & Home Decor in Collingwood, Ontario"
        description="Grapevine Cottage is a beloved Collingwood gift shop since 2001. Discover unique gifts, handcrafted jewelry, home decor & local artisan treasures in downtown Collingwood."
      />
      <HeroSection />
      <WelcomeSection />
      <EventsBanner />
      <CollectionsSection />
      <ShopExperienceSection />
      <StoryPreviewSection />
      <TestimonialsSection />
      <VisitSection />
      <SocialSection />
    </Layout>
  );
};

export default Index;