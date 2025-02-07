import "./globals.css";
import { pressStart, quantico, silkscreen } from "./utils/fonts";

export const metadata = {
  title: "MemeGold - The Ultimate Gold Meme Token",
  description:
    "MemeGold (GOLD) is a 100% meme token with no utility, no roadmap, just pure meme fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${silkscreen.variable} ${quantico.variable} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
