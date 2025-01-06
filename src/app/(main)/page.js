import Agents from "@/components/Agents/Agents";
import Banner from "@/components/Banner/Banner";
import Brand from "@/components/Brand/Brand";
import ExploreCitiesSection from "@/components/ExploreCities/ExploreCitiesSection";
import FeaturedProperty from "@/components/FeaturedProperty/FeaturedProperty";
export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedProperty />
      <ExploreCitiesSection />
      <Agents />
      <Brand />
    </div>
  );
}
