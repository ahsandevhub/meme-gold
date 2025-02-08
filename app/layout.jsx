import localFont from "next/font/local";
import "./globals.css";

const customFont = localFont({
  src: "../public/fonts/TypefaceMario64.otf",
  display: "swap",
});

export const metadata = {
  title: "MemeGold64 - The Ultimate Gold Meme Token",
  description:
    "MemeGold64 (GOLD) is a 100% meme token with no utility, no roadmap, just pure meme fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${customFont.className} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
