import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import StoryPreviewSection from "@/components/home/StoryPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VisitSection from "@/components/home/VisitSection";
import SocialSection from "@/components/home/SocialSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WelcomeSection />
      <CollectionsSection />
      <StoryPreviewSection />
      <TestimonialsSection />
      <VisitSection />
      <SocialSection />
    </Layout>
  );
};

export default Index;
