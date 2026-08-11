import { Instrument_Sans, Roboto_Mono } from "next/font/google";
import NorthlineClient from "./NorthlineClient";

const instrument = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-is" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-rm" });

export const metadata = { title: "Northline Realty — Demo Landing Page" };

export default function NorthlinePage() {
  return (
    <div className={`${instrument.variable} ${robotoMono.variable}`}>
      <NorthlineClient />
    </div>
  );
}
