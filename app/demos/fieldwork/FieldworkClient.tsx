"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const work = [
  { n: "01", client: "Northline Realty", tag: "Brand + site", color: "#2B3EFF" },
  { n: "02", client: "Kinfolk Movement", tag: "Identity", color: "#FF2E9A" },
  { n: "03", client: "Ledgerly", tag: "Product design", color: "#2B3EFF" },
];

const marqueeWords = ["STRATEGY", "★", "DESIGN", "★", "BUILD", "★", "REPEAT", "★"];

export default function FieldworkClient() {
  return (
    <div className="bg-[#FFFBF2] text-[#12100B] font-[family-name:var(--font-inter2)] min-h-screen overflow-x-hidden">
      <nav className="max-w-[1180px] mx-auto px-8 h-20 flex items-center justify-between">
        <span className="font-[family-name:var(--font-ub)] font-bold text-[17px]">Fieldwork</span>
        <Link href="/#demos" className="font-[family-name:var(--font-pm2)] text-[11.5px] px-4 py-2 rounded-full bg-[#12100B] text-[#FFFBF2]">
          ← Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <header className="max-w-[1180px] mx-auto px-8 pt-10 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-[family-name:var(--font-ub)] font-black text-[clamp(44px,8vw,110px)] leading-[0.92] tracking-tight"
        >
          WE MAKE<br />
          <span className="text-[#2B3EFF]">BRANDS</span> THAT<br />
          <span className="text-[#FF2E9A]">DON&apos;T</span> BLEND IN.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-[16px] text-[#4A463D] max-w-[42ch]"
        >
          Fieldwork is a five-person studio. We take four clients a year, on purpose, so every one
          of them gets the whole team.
        </motion.p>
      </header>

      {/* Marquee */}
      <div className="border-y-2 border-[#12100B] bg-[#12100B] py-5 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap font-[family-name:var(--font-ub)] font-bold text-[28px] text-[#FFFBF2]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className={w === "★" ? "text-[#FF2E9A]" : ""}>{w}</span>
          ))}
        </motion.div>
      </div>

      {/* Work */}
      <section className="max-w-[1180px] mx-auto px-8 py-20">
        <span className="font-[family-name:var(--font-pm2)] text-[11.5px] uppercase tracking-wider text-[#2B3EFF]">Recent work</span>
        <h2 className="font-[family-name:var(--font-ub)] font-bold text-[clamp(26px,3.4vw,38px)] mt-3 mb-14 max-w-[20ch]">
          Three studios. Three very different problems.
        </h2>
        <div className="flex flex-col">
          {work.map((w, i) => (
            <motion.div
              key={w.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 10 }}
              className="group flex items-center justify-between gap-6 py-7 border-t border-[#12100B] last:border-b cursor-default"
            >
              <div className="flex items-center gap-6">
                <span className="font-[family-name:var(--font-pm2)] text-[13px] text-[#B8B2A2]">{w.n}</span>
                <span className="font-[family-name:var(--font-ub)] font-bold text-[22px] sm:text-[32px]">{w.client}</span>
              </div>
              <span
                className="font-[family-name:var(--font-pm2)] text-[11px] px-4 py-2 rounded-full whitespace-nowrap"
                style={{ backgroundColor: w.color, color: "#FFFBF2" }}
              >
                {w.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1180px] mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2B3EFF] text-[#FFFBF2] rounded-3xl px-10 py-16 text-center"
        >
          <h3 className="font-[family-name:var(--font-ub)] font-black text-[clamp(30px,5vw,54px)] leading-[0.98] max-w-[16ch] mx-auto">
            GOT SOMETHING WORTH MAKING LOUD?
          </h3>
          <a href="#" className="inline-block mt-8 font-[family-name:var(--font-pm2)] text-[12px] px-7 py-3.5 rounded-full bg-[#FFFBF2] text-[#12100B]">
            Start a project
          </a>
        </motion.div>
      </section>

      <footer className="max-w-[1180px] mx-auto px-8 py-8 border-t border-[#12100B] font-[family-name:var(--font-pm2)] text-[10.5px] text-[#7A7565] flex justify-between flex-wrap gap-3">
        <span>Fieldwork Studio — demo landing page</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
      </footer>
    </div>
  );
}
