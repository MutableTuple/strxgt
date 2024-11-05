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
    "gaming portfolio, track gaming stats, gaming achievements, gamer community, gaming profile, connect with friends, Strontium gaming, video game portfolio, online gamer profile, showcase gaming skills, Steam integration, custom games, add custom games, multiplayer portfolio, gaming accomplishments, video game statistics, esport achievements, gaming network, game collection, game stats tracker, competitive gaming profile, game history tracker, share gaming highlights, gaming social media, gamers community, online gaming identity, create gaming resume, Strontium app, professional gaming profile, gamer connections, gaming trophies, gaming milestones, best gaming phone, gaming app download, free game download, pc gaming, gaming logo, gaming phone, gaming images, genshin impact, mobile gaming, gaming website, online game app, gaming computer pc",
  author: "Strontium GT",
  robots: "index, follow",
  og: {
    title: "Strontium - Your Ultimate Gaming Portfolio",
    description:
      "Showcase your gaming achievements and skills with Strontium. Track your gaming stats, connect with friends, and explore the gaming community.",
    url: "www.strontium.app",
    image:
      "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/game_screen_cheetos.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strontium - Your Ultimate Gaming Portfolio",
    description:
      "Showcase your gaming achievements and skills with Strontium. Track your gaming stats, connect with friends, and explore the gaming community.",
    image:
      "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/game_screen_cheetos.png",
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
