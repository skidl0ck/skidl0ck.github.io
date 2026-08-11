import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import LedgerlyClient from "./LedgerlyClient";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-sg" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jb" });

export const metadata = { title: "Ledgerly — Demo Landing Page" };

export default function LedgerlyPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable}`}>
      <LedgerlyClient />
    </div>
  );
}
