import { Mulish, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const mulish = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
