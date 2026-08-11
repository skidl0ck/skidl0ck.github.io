"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const courses = [
  { n: "I", name: "Charred leek, brown butter", note: "the opener, meant to be eaten in two bites" },
  { n: "II", name: "Scallop, burnt citrus, salt-baked celeriac", note: "cooked over embers, not a flame" },
  { n: "III", name: "Dry-aged duck, blackened plum", note: "28 days, served rarer than most kitchens allow" },
  { n: "IV", name: "Cultured cream, hay ash, honey", note: "the only sweet thing on the menu" },
];

export default function EmberSaltClient() {
  return (
    <div className="bg-[#1B1210] text-[#EFE7D8] font-[family-name:var(--font-manrope)] min-h-screen">
      <nav className="max-w-[1100px] mx-auto px-8 h-20 flex items-center justify-between">
        <span className="font-[family-name:var(--font-cor)] italic text-[22px] tracking-wide">Ember &amp; Salt</span>
        <Link href="/#demos" className="font-[family-name:var(--font-sm)] text-[11px] px-4 py-2 rounded-full border border-[#4A3B2F] text-[#C9A25A]">
          ← Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <header className="max-w-[1100px] mx-auto px-8 pt-16 pb-24 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-[family-name:var(--font-sm)] text-[11px] uppercase tracking-[0.2em] text-[#C9A25A]"
        >
          Tasting menu only · Tue–Sat
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-[family-name:var(--font-cor)] font-medium text-[clamp(46px,7vw,88px)] leading-[1.02] mt-6"
        >
          Four courses.<br /><span className="italic text-[#C9A25A]">One fire.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 text-[16px] text-[#B8AC9B] max-w-[42ch] mx-auto"
        >
          Everything at Ember &amp; Salt passes over live coal before it reaches the pass.
          Twenty seats a night, one seating.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          href="#reserve"
          className="inline-block mt-9 font-[family-name:var(--font-sm)] text-[12px] tracking-wide px-7 py-3.5 rounded-full bg-[#C9A25A] text-[#1B1210]"
        >
          Reserve a table
        </motion.a>
      </header>

      {/* Menu */}
      <section className="max-w-[720px] mx-auto px-8 py-20 border-t border-[#3A2E24]">
        <span className="font-[family-name:var(--font-sm)] text-[11px] uppercase tracking-[0.2em] text-[#C9A25A]">
          Tonight&apos;s menu
        </span>
        <h2 className="font-[family-name:var(--font-cor)] text-[32px] mt-3 mb-14">Four courses, in order.</h2>

        <div className="relative pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[#4A3B2F]"
          />
          <div className="flex flex-col gap-12">
            {courses.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative"
              >
                <span className="absolute -left-10 top-0.5 w-3.5 h-3.5 rounded-full bg-[#C9A25A] ring-4 ring-[#1B1210]" />
                <div className="font-[family-name:var(--font-sm)] text-[11px] text-[#C9A25A] mb-1.5">Course {c.n}</div>
                <h3 className="font-[family-name:var(--font-cor)] text-[24px] leading-tight">{c.name}</h3>
                <p className="text-[13.5px] text-[#8F8272] mt-1.5 italic">{c.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve CTA */}
      <section id="reserve" className="max-w-[1100px] mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="border border-[#4A3B2F] rounded-2xl px-10 py-14 text-center"
        >
          <h3 className="font-[family-name:var(--font-cor)] text-[clamp(26px,3.6vw,38px)] max-w-[24ch] mx-auto">
            Twenty seats. One seating a night.
          </h3>
          <a href="#" className="inline-block mt-7 font-[family-name:var(--font-sm)] text-[12px] px-7 py-3.5 rounded-full bg-[#C9A25A] text-[#1B1210]">
            Check availability
          </a>
        </motion.div>
      </section>

      <footer className="max-w-[1100px] mx-auto px-8 py-8 border-t border-[#3A2E24] font-[family-name:var(--font-sm)] text-[10.5px] text-[#8F8272] flex justify-between flex-wrap gap-3">
        <span>Ember &amp; Salt — demo landing page</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
      </footer>
    </div>
  );
}
