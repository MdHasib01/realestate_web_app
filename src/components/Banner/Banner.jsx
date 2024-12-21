import Image from "next/image";
import bannerImg from "../../app/assets/image/banner.jpg";
import { Damion } from "@next/font/google";
import SearchBanner from "../SearchBanner/SearchBanner";
import Reveal from "../ui/Motion/Reveal";
const damion = Damion({
  subsets: ["latin"],
  weight: "400",
});
const Banner = () => {
  return (
    <div className="relative w-full">
      <Image
        src={bannerImg}
        alt="banner"
        className="w-full h-[550px] object-cover bg-blue-500 bg-cover bg-center brightness-50 "
      ></Image>
      <div className="flex justify-center items-center w-full p-4 mx-auto lg:px-32 absolute top-0 left-0 ">
        <div className="flex justify-center items-center w-full flex-col h-[450px]">
          <Reveal>
            <h2 className="text-5xl text-center font-bold text-white mb-4">
              Welcome to <span className={`${damion.className}`}>HouseBiz</span>
            </h2>
          </Reveal>

          <div className="text-xl text-center text-white">
            Houzez is an innovative real estate web application that provides a
            user-friendly platform for buying, selling, and renting properties.
          </div>
        </div>
      </div>
      <div className="mt-[-100px] max-w-6xl mx-auto">
        <SearchBanner />
      </div>
    </div>
  );
};

export default Banner;
