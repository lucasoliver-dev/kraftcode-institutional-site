import { EnterpriseSection } from "../src/components/home/EnterpriseSection";
import { FinalCTA } from "../src/components/home/FinalCTA";
import { FounderPreview } from "../src/components/home/FounderPreview";
import { HeroSection } from "../src/components/home/HeroSection";
import { SaaSShowcaseCarousel } from "../src/components/home/SaaSShowcaseCarousel";
import { SolutionsCarousel } from "../src/components/home/SolutionsCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsCarousel />
      <SaaSShowcaseCarousel />
      <EnterpriseSection />
      <FounderPreview />
      <FinalCTA />
    </>
  );
}
