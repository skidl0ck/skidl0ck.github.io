"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Revenue tracked", value: "$48.2M", delta: "+12.4%" },
  { label: "Close time", value: "2.1 days", delta: "−63%" },
  { label: "Teams live on it", value: "340", delta: "+28 this qtr" },
];

const features = [
  { k: "01", title: "Reconciliation, not spreadsheets", desc: "Every transaction matched against your ledger automatically, with a clear trail for the ones that need a human look." },
  { k: "02", title: "Close the books in days, not weeks", desc: "Month-end checklists that update themselves as entries clear, so finance isn't the last team to know where things stand." },
  { k: "03", title: "One number everyone trusts", desc: "Finance, ops, and leadership look at the same live figures — no more three versions of 'revenue' in three different decks." },
];

const points = "M0,90 C40,85 60,60 100,58 C140,56 150,30 190,28 C230,26 250,45 290,38 C330,31 350,10 400,8";

export default function LedgerlyClient() {
  return (
    <div className="bg-[#F7F7FB] text-[#0F1222] font-[family-name:var(--font-inter)] min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#F7F7FBF2] backdrop-blur-sm border-b border-[#E4E3F0]">
        <div className="max-w-[1180px] mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-[family-name:var(--font-sg)] font-semibold text-[17px]">Ledgerly</span>
          <div className="hidden sm:flex items-center gap-8 text-[14px] text-[#4B4F6B]">
            <a href="#product">Product</a>
            <a href="#trust">Why teams switch</a>
          </div>
          <Link href="/#demos" className="font-[family-name:var(--font-jb)] text-[12px] px-4 py-2 rounded-lg bg-[#0F1222] text-white">
            ← Back to portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-[1180px] mx-auto px-8 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="inline-flex items-center gap-2 font-[family-name:var(--font-jb)] text-[11.5px] uppercase tracking-wider text-[#6D5DF6] bg-[#EDEBFF] px-3 py-1.5 rounded-full mb-6">
            Financial ops, for teams past spreadsheets
          </span>
          <h1 className="font-[family-name:var(--font-sg)] font-semibold text-[clamp(36px,4.6vw,58px)] leading-[1.08] tracking-tight">
            Close the books before anyone has to ask where they stand.
          </h1>
          <p className="mt-6 text-[17px] text-[#4B4F6B] max-w-[46ch]">
            Ledgerly reconciles, tracks, and reports in one live system — so finance stops
            being the department everyone waits on.
          </p>
          <div className="flex flex-wrap gap-3 mt-9">
            <a href="#product" className="font-[family-name:var(--font-jb)] text-[13px] px-6 py-3.5 rounded-lg bg-[#6D5DF6] text-white">Start free trial</a>
            <a href="#trust" className="font-[family-name:var(--font-jb)] text-[13px] px-6 py-3.5 rounded-lg border border-[#D6D5E8]">See how it works</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="bg-white border border-[#E4E3F0] rounded-2xl p-7 shadow-[0_30px_60px_-30px_rgba(15,18,34,0.25)]"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-[family-name:var(--font-jb)] text-[11px] uppercase tracking-wide text-[#8A8DA8]">Revenue — live</span>
            <span className="flex items-center gap-1.5 font-[family-name:var(--font-jb)] text-[11px] text-[#16A34A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" /> Synced 2m ago
            </span>
          </div>
          <svg viewBox="0 0 400 100" className="w-full h-24 mb-6">
            <motion.path
              d={points}
              fill="none"
              stroke="#6D5DF6"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
            />
          </svg>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="bg-[#F7F7FB] rounded-lg p-3.5"
              >
                <div className="font-[family-name:var(--font-jb)] text-[15px] font-medium">{s.value}</div>
                <div className="text-[11px] text-[#8A8DA8] mt-1 leading-tight">{s.label}</div>
                <div className="font-[family-name:var(--font-jb)] text-[10.5px] text-[#16A34A] mt-1">{s.delta}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </header>

      {/* Features */}
      <section id="product" className="max-w-[1180px] mx-auto px-8 py-20 border-t border-[#E4E3F0]">
        <span className="font-[family-name:var(--font-jb)] text-[11.5px] uppercase tracking-wider text-[#6D5DF6]">Product</span>
        <h2 className="font-[family-name:var(--font-sg)] font-semibold text-[clamp(26px,3vw,36px)] mt-3 mb-14 max-w-[24ch]">
          Everything finance needs, none of the spreadsheet gymnastics.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="border border-[#E4E3F0] bg-white rounded-xl p-6"
            >
              <div className="font-[family-name:var(--font-jb)] text-[12px] text-[#6D5DF6] mb-4">{f.k}</div>
              <h3 className="font-semibold text-[16px] mb-2">{f.title}</h3>
              <p className="text-[14px] text-[#4B4F6B] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="trust" className="max-w-[1180px] mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0F1222] text-white rounded-2xl px-10 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-[family-name:var(--font-sg)] font-semibold text-[26px] md:text-[32px] max-w-[16ch]">
              See your close time drop in the first month.
            </h3>
          </div>
          <a href="#" className="font-[family-name:var(--font-jb)] text-[13px] px-6 py-3.5 rounded-lg bg-[#6D5DF6] whitespace-nowrap">
            Start free trial
          </a>
        </motion.div>
      </section>

      <footer className="max-w-[1180px] mx-auto px-8 py-8 border-t border-[#E4E3F0] font-[family-name:var(--font-jb)] text-[11px] text-[#8A8DA8] flex justify-between flex-wrap gap-3">
        <span>Ledgerly — demo landing page</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
      </footer>
    </div>
  );
}
