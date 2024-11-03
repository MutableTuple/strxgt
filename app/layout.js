import { Mulish, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const mulish = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Strontium - Your Ultimate Gaming Portfolio",
  description:
    "Showcase your gaming achievements and skills with Strontium. Track your gaming stats, connect with friends, and explore the gaming community.",
  keywords:
    "gaming portfolio, track gaming stats, gaming achievements, gamer community, gaming profile, connect with friends",
  author: "Strontium GT",
  robots: "index, follow", // Instruct search engines to index the page and follow links
  og: {
    title: "Strontium - Your Ultimate Gaming Portfolio",
    description:
      "Showcase your gaming achievements and skills with Strontium. Track your gaming stats, connect with friends, and explore the gaming community.",
    url: "www.strontium.app", // Replace with the actual URL of your website
    image:
      "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/game_screen_cheetos.png", // Replace with a relevant image URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Use summary or summary_large_image for a larger preview
    title: "Strontium - Your Ultimate Gaming Portfolio",
    description:
      "Showcase your gaming achievements and skills with Strontium. Track your gaming stats, connect with friends, and explore the gaming community.",
    image:
      "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/game_screen_cheetos.png", // Replace with a relevant image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5DR7DY8JFC"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5DR7DY8JFC');
          `}
        </Script>
      </head>
      <body className={`${mulish.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
