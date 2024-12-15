import { Roboto } from "@next/font/google";
import "../globals.css";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});
export default function RootLayout({ children }) {
  return <>{children}</>;
}
