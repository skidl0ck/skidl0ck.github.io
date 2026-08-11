import { Bricolage_Grotesque, Archivo } from "next/font/google";
import KinfolkClient from "./KinfolkClient";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-bg" });
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-archivo" });

export const metadata = { title: "Kinfolk Movement — Demo Landing Page" };

export default function KinfolkPage() {
  return (
    <div className={`${bricolage.variable} ${archivo.variable}`}>
      <KinfolkClient />
    </div>
  );
}
