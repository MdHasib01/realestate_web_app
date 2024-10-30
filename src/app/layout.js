import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

import { Damion, Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});
const damion = Damion({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "HouseBiz- Buy and sell your property",
  description: "Find the perfect property to buy or sell with HouseBiz.",
  openGraph: {
    title: "HouseBiz - Buy and sell your property",
    description: "Find the perfect property to buy or sell with HouseBiz.",
    images: [
      {
        url: "./assets/image/banner.jpg",
        width: 800,
        height: 630,
        alt: "HouseBiz - Buy and sell your property",
      },
    ],
    site_name: "HouseBiz",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-blue-50`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
