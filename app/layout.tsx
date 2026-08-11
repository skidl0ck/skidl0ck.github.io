import type { Metadata } from "next";
import { Newsreader, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-worksans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plexmono",
});

export const metadata: Metadata = {
  title: "Marben Taguinod — Frontend Developer",
  description:
    "Marben Taguinod — frontend developer. Next.js, TypeScript, Tailwind. Case study: Sikaty, a freelance marketplace in production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="bg-[#F4F1EA] text-[#15140F] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
