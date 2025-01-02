import Agents from "@/components/Agents/Agents";
import Banner from "@/components/Banner/Banner";
import Brand from "@/components/Brand/Brand";
import FeaturedProperty from "@/components/FeaturedProperty/FeaturedProperty";
export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedProperty />
      <Agents />
      <Brand />
    </div>
  );
}
