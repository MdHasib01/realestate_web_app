import Image from "next/image";
import bannerImg from "../../app/assets/image/banner.jpg";
import { Damion } from "@next/font/google";
import SearchBanner from "../SearchBanner/SearchBanner";
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
        className="w-full  h-[550px] object-cover  bg-blue-500 bg-cover bg-center brightness-50 "
      ></Image>
      <div className="container w-full p-4 mx-auto md:px-32 absolute top-0 left-0 ">
        <div className="flex justify-center items-center w-full flex-col h-[450px]">
          <h2 className="text-5xl text-center font-bold text-white mb-4">
            Welcome to <span className={`${damion.className}`}>HouseBiz</span>
          </h2>
          <div className="text-xl text-center text-white">
            Houzez is an innovative real estate WordPress theme.
          </div>
        </div>
      </div>
      <div className="mt-[-100px]">
        <SearchBanner />
      </div>
    </div>
  );
};

export default Banner;
