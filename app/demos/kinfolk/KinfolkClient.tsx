"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const classes = ["STRENGTH", "•", "CONDITIONING", "•", "MOBILITY", "•", "SPRINT", "•", "RECOVERY", "•"];

const offerings = [
  { title: "Strength", time: "45 min · small group", desc: "Barbell fundamentals, coached in groups of six so form actually gets corrected." },
  { title: "Conditioning", time: "30 min · high intensity", desc: "Short, hard, and over before it gets boring. Built around intervals you can actually recover from." },
  { title: "Mobility", time: "40 min · all levels", desc: "The session most members skip and then wish they hadn't. Slower on purpose." },
];

export default function KinfolkClient() {
  return (
    <div className="bg-white text-[#14120F] font-[family-name:var(--font-archivo)] min-h-screen">
      <nav className="max-w-[1180px] mx-auto px-8 h-20 flex items-center justify-between">
        <span className="font-[family-name:var(--font-bg)] font-bold text-[19px] tracking-tight">Kinfolk Movement</span>
        <Link href="/#demos" className="text-[12px] font-medium px-4 py-2 rounded-full border border-[#14120F]">
          ← Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <header className="max-w-[1180px] mx-auto px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[family-name:var(--font-bg)] font-extrabold text-[clamp(44px,7vw,92px)] leading-[0.96] tracking-tight"
          >
            Train like<br /><span className="text-[#FF5A36]">it&apos;s the only</span><br />hour you get.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-[16px] text-[#5C574E] max-w-[38ch]">
              Small-group strength and conditioning in the East Side. Real coaching,
              not a playlist and a mirror.
            </p>
            <a href="#classes" className="inline-block mt-6 font-medium text-[13px] px-6 py-3.5 rounded-full bg-[#14120F] text-white">
              Book a free session
            </a>
          </motion.div>
        </div>
      </header>

      {/* Pulse strip */}
      <div className="border-y border-[#EFECE5] bg-[#FBF7F0] py-10 overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-8 flex items-center gap-10">
          <svg viewBox="0 0 200 40" className="w-40 shrink-0" preserveAspectRatio="none">
            <motion.path
              d="M0,20 L40,20 L52,4 L64,36 L76,20 L200,20"
              fill="none"
              stroke="#FF5A36"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </svg>
          <div className="overflow-hidden flex-1">
            <motion.div
              className="flex gap-6 whitespace-nowrap font-[family-name:var(--font-bg)] font-bold text-[15px] tracking-wide text-[#14120F]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {[...classes, ...classes].map((c, i) => (
                <span key={i} className={c === "•" ? "text-[#FF5A36]" : ""}>{c}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Classes */}
      <section id="classes" className="max-w-[1180px] mx-auto px-8 py-20">
        <span className="text-[12px] font-semibold uppercase tracking-wider text-[#FF5A36]">The sessions</span>
        <h2 className="font-[family-name:var(--font-bg)] font-bold text-[clamp(28px,3.4vw,40px)] mt-3 mb-14 max-w-[22ch]">
          Three formats. Pick what your week actually has room for.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-[#14120F] text-white p-7 flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <h3 className="font-[family-name:var(--font-bg)] font-bold text-[22px]">{o.title}</h3>
                <div className="text-[11.5px] text-[#FF5A36] font-medium mt-1.5">{o.time}</div>
              </div>
              <p className="text-[14px] text-[#C9C4B8] mt-6 leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1180px] mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FF5A36] text-white rounded-2xl px-10 py-14 text-center"
        >
          <h3 className="font-[family-name:var(--font-bg)] font-extrabold text-[clamp(28px,4vw,44px)] max-w-[18ch] mx-auto leading-tight">
            First session&apos;s free. Bring whatever shoes you have.
          </h3>
          <a href="#" className="inline-block mt-7 font-semibold text-[13px] px-7 py-3.5 rounded-full bg-white text-[#14120F]">
            Book now
          </a>
        </motion.div>
      </section>

      <footer className="max-w-[1180px] mx-auto px-8 py-8 border-t border-[#EFECE5] text-[11px] text-[#8C877B] flex justify-between flex-wrap gap-3">
        <span>Kinfolk Movement — demo landing page</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
      </footer>
    </div>
  );
}
