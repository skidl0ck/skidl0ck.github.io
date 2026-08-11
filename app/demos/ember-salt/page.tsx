import { Cormorant_Garamond, Manrope, Space_Mono } from "next/font/google";
import EmberSaltClient from "./EmberSaltClient";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-cor" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-manrope" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sm" });

export const metadata = { title: "Ember & Salt — Demo Landing Page" };

export default function EmberSaltPage() {
  return (
    <div className={`${cormorant.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <EmberSaltClient />
    </div>
  );
}
