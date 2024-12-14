import { Roboto } from "@next/font/google";
import "../globals.css";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});
export default function RootLayout({ children }) {
  return (
    <body className={`${roboto.className} antialiased bg-blue-50`}>
      {children}
    </body>
  );
}
