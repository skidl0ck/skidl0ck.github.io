import { Unbounded, Inter, IBM_Plex_Mono } from "next/font/google";
import FieldworkClient from "./FieldworkClient";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-ub" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter2" });
const plexMono2 = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-pm2" });

export const metadata = { title: "Fieldwork Studio — Demo Landing Page" };

export default function FieldworkPage() {
  return (
    <div className={`${unbounded.variable} ${inter.variable} ${plexMono2.variable}`}>
      <FieldworkClient />
    </div>
  );
}
