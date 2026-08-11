"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const listings = [
  { addr: "412 Wren Street", area: "Riverdale", price: "$1.24M", beds: "3", sqft: "1,840" },
  { addr: "88 Colton Ave", area: "Old Mill", price: "$895K", beds: "2", sqft: "1,220" },
  { addr: "27 Birchwood Ln", area: "Northgate", price: "$2.1M", beds: "4", sqft: "2,760" },
  { addr: "1105 Kestrel Way", area: "Riverdale", price: "$1.68M", beds: "3", sqft: "2,050" },
];

const stats = [
  { v: "184", l: "Active listings" },
  { v: "11 days", l: "Median time to offer" },
  { v: "$412M", l: "Closed this year" },
];

export default function NorthlineClient() {
  return (
    <div className="bg-white text-[#10151B] font-[family-name:var(--font-is)] min-h-screen">
      <nav className="max-w-[1180px] mx-auto px-8 h-20 flex items-center justify-between border-b border-[#E4E6EA]">
        <span className="font-semibold text-[18px] tracking-tight">Northline Realty</span>
        <Link href="/#demos" className="font-[family-name:var(--font-rm)] text-[11.5px] px-4 py-2 border border-[#10151B] rounded-sm">
          ← Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <header className="max-w-[1180px] mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-medium text-[clamp(38px,5vw,64px)] leading-[1.06] tracking-tight"
        >
          Listings priced right the first time, not the third.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col justify-end"
        >
          <p className="text-[15.5px] text-[#5B6472] max-w-[36ch]">
            Northline handles pricing, staging, and negotiation for the north-end corridor —
            nowhere else, which is exactly why we know it this well.
          </p>
          <a href="#listings" className="mt-6 font-[family-name:var(--font-rm)] text-[12px] px-5 py-3 border border-[#10151B] rounded-sm w-fit">
            View current listings
          </a>
        </motion.div>
      </header>

      {/* Route signature */}
      <div className="border-y border-[#E4E6EA] bg-[#FAFBFC]">
        <div className="max-w-[1180px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <svg viewBox="0 0 500 60" className="w-full h-14" preserveAspectRatio="none">
            <motion.path
              d="M0,50 C60,50 70,10 130,10 C190,10 200,45 260,45 C320,45 330,15 390,15 C430,15 450,30 500,28"
              fill="none"
              stroke="#1E3A5F"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <motion.circle
              cx="500" cy="28" r="5" fill="#1E3A5F"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            />
          </svg>
          <div className="grid grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-[family-name:var(--font-rm)] text-[19px]">{s.v}</div>
                <div className="text-[11.5px] text-[#8A8DA8] mt-1 whitespace-nowrap">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Listings table */}
      <section id="listings" className="max-w-[1180px] mx-auto px-8 py-20">
        <span className="font-[family-name:var(--font-rm)] text-[11px] uppercase tracking-wider text-[#1E3A5F]">Current listings</span>
        <h2 className="font-medium text-[clamp(24px,2.8vw,32px)] mt-3 mb-10">Four in the north-end corridor right now.</h2>

        <div className="border-t border-[#10151B]">
          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 py-3 font-[family-name:var(--font-rm)] text-[10.5px] uppercase tracking-wider text-[#8A8DA8] border-b border-[#E4E6EA]">
            <span>Address</span><span>Area</span><span>Beds</span><span>Sqft</span><span>Price</span>
          </div>
          {listings.map((l, i) => (
            <motion.div
              key={l.addr}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 sm:gap-4 py-4 border-b border-[#E4E6EA] text-[14px]"
            >
              <span className="font-medium">{l.addr}</span>
              <span className="text-[#5B6472]">{l.area}</span>
              <span className="text-[#5B6472]">{l.beds}</span>
              <span className="text-[#5B6472]">{l.sqft}</span>
              <span className="font-[family-name:var(--font-rm)]">{l.price}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1180px] mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-[#10151B] text-white rounded-md px-10 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <h3 className="font-medium text-[26px] md:text-[30px] max-w-[20ch]">
            Thinking of listing in the north end?
          </h3>
          <a href="#" className="font-[family-name:var(--font-rm)] text-[12px] px-6 py-3.5 rounded-sm bg-white text-[#10151B] whitespace-nowrap">
            Get a free valuation
          </a>
        </motion.div>
      </section>

      <footer className="max-w-[1180px] mx-auto px-8 py-8 border-t border-[#E4E6EA] font-[family-name:var(--font-rm)] text-[10.5px] text-[#8A8DA8] flex justify-between flex-wrap gap-3">
        <span>Northline Realty — demo landing page</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
      </footer>
    </div>
  );
}
