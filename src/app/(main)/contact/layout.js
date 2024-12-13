import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Contact us - HouseBiz",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>{children}</main>
    </html>
  );
}
