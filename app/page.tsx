import Link from "next/link";
import SystemDiagram from "@/components/SystemDiagram";

const workItems = [
  { n: "01", title: "Seller onboarding", desc: "Multi-step profile wizard with per-step validation, unsaved-changes tracking, and a profile-strength score that updates as sellers type." },
  { n: "02", title: "Real-time chat", desc: "WebSocket inbox and conversation view on a dual-channel design - one channel for notifications, one for the open thread - plus a mobile bottom-sheet UI." },
  { n: "03", title: "Checkout & subscriptions", desc: "Stripe Elements and PayPal in a session-based flow, covering both one-off custom offers and recurring plans." },
  { n: "04", title: "Order management", desc: "The full order flow migrated off Bootstrap: feed, details, requirements, deliveries - each rendered differently for buyer and seller." },
  { n: "05", title: "Search & discovery", desc: "Paginated gig grid with bookmarking and autocomplete, backed by a word-tokenized Django search endpoint." },
  { n: "06", title: "The design system", desc: "One typography, color and motion language applied across landing, blog, category browsing and help center." },
];

const toolkit = [
  { label: "Frontend", tag: "Core, daily", items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "React Query"] },
  { label: "Live features", tag: "Real-time", items: ["WebSocket clients", "Django Channels", "Dual-channel sync"] },
  { label: "Payments UI", tag: "Commerce", items: ["Stripe Elements", "PayPal Checkout", "Session-based flows"] },
];

const demos = [
  { slug: "ledgerly", name: "Ledgerly", desc: "Fintech / SaaS analytics" },
  { slug: "kinfolk", name: "Kinfolk Movement", desc: "Boutique fitness studio" },
  { slug: "ember-salt", name: "Ember & Salt", desc: "Fine dining restaurant" },
  { slug: "northline", name: "Northline Realty", desc: "Real estate agency" },
  { slug: "fieldwork", name: "Fieldwork Studio", desc: "B2B creative consultancy" },
];

export default function Home() {
  return (
    <div className="max-w-[1040px] mx-auto px-8">
      {/* Nav */}
      <div className="sticky top-0 z-40 flex items-baseline justify-between gap-6 py-4 pb-3.5 bg-[#F4F1EAF2] backdrop-blur-sm border-b border-[#E3DCCF]">
        <a href="#top" className="font-display text-[21px] tracking-tight">Marben Taguinod</a>
        <div className="flex items-baseline gap-5 font-mono text-[12.5px] tracking-wide">
          <a href="#work" className="text-[#6E675C]">Work</a>
          <a href="#demos" className="text-[#6E675C]">Demos</a>
          <a href="#toolkit" className="text-[#6E675C]">Toolkit</a>
          <a href="#about" className="text-[#6E675C]">About</a>
          <a href="mailto:marben.taguinod@gmail.com" className="text-[#0D9488]">Email ↗</a>
        </div>
      </div>

      {/* Hero */}
      <div id="top" className="grid grid-cols-1 md:grid-cols-[1.35fr_0.65fr] gap-14 items-start pt-[84px] pb-[72px]">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-[#6E675C] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4E8A5B]" />
            Frontend developer · open to roles
          </div>
          <h1 className="font-display font-normal text-[clamp(40px,6.2vw,68px)] leading-[1.04] tracking-tight text-balance">
            Hi, I&apos;m Marben. I&apos;ve spent the last two years building one product{" "}
            <em className="not-italic italic text-[#0D9488]">all the way</em> to production.
          </h1>
          <p className="mt-6 text-[18.5px] text-[#57524A] max-w-[54ch] text-balance">
            Next.js, TypeScript and Tailwind, wired into real backends - real-time chat, checkout
            that can&apos;t silently fail, multi-step wizards that survive a refresh. Not demos: one
            marketplace, live, with paying users.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#work" className="font-mono text-[13px] px-5 py-3 rounded-full bg-[#15140F] text-[#F4F1EA] hover:bg-[#0D9488] transition-colors">
              Read the case study
            </a>
            <a href="/docs/Marben_Taguinod_Resume.pdf" download target="_blank" className="font-mono text-[13px] px-5 py-3 rounded-full border border-[#D6CEBF] hover:border-[#15140F] transition-colors">
              Résumé (PDF)
            </a>
          </div>
        </div>
        <div>
          <div className="aspect-[4/5] rounded overflow-hidden border border-[#E3DCCF] bg-[#EDE7D8] flex items-center justify-center">
            <span className="font-mono text-xs text-[#8A8377] text-center px-4">
              <img src="/images/portrait.png" alt="Marben Taguinod" className="w-full h-full object-cover" />
            </span>
          </div>
          <div className="font-mono text-[11.5px] text-[#8A8377] mt-2.5 leading-relaxed">
            Manila, PH · works remote<br />Replies within a day
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#E3DCCF] border-t border-b border-[#E3DCCF]">
        <div className="bg-[#F4F1EA] py-5 px-6 sm:pl-0 sm:pr-6">
          <div className="font-mono text-[11px] tracking-wide uppercase text-[#8A8377]">Right now</div>
          <div className="text-[15.5px] mt-1">Primary frontend dev on Sikaty</div>
        </div>
        <div className="bg-[#F4F1EA] py-5 px-6">
          <div className="font-mono text-[11px] tracking-wide uppercase text-[#8A8377]">Looking for</div>
          <div className="text-[15.5px] mt-1">Full-time or contract, product teams</div>
        </div>
        <div className="bg-[#F4F1EA] py-5 px-6 sm:pr-0 sm:pl-6">
          <div className="font-mono text-[11px] tracking-wide uppercase text-[#8A8377]">Happiest doing</div>
          <div className="text-[15.5px] mt-1">Interfaces that touch real state</div>
        </div>
      </div>

      {/* Work */}
      <div id="work" className="pt-[84px]">
        <div className="font-mono text-xs tracking-wide uppercase text-[#8A8377] mb-7">Selected work - 01</div>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-display font-normal text-[clamp(34px,4.6vw,52px)] leading-[1.05] tracking-tight">Sikaty</h2>
            <div className="font-mono text-[13px] text-[#6E675C] mt-2.5">Freelance marketplace · UK-registered · 2025 → 2026</div>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[#3F7A4C] bg-[#E9F2E9] border border-[#CFE3D0] px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4E8A5B]" />
            In production
          </span>
        </div>

        <p className="text-lg text-[#2C2A24] max-w-[70ch] mt-7 text-balance">
          Buyers post work, sellers deliver it, and the whole relationship runs through the
          platform: discovery, real-time messaging, orders, payment. I built the{" "}
          <strong className="font-semibold">entire client-side application</strong> - from the
          first Bootstrap-to-Next.js migration through to the subscription checkout that&apos;s
          live today - and worked into the Django backend it talks to.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 mt-[54px]">
          {workItems.map((item, i) => (
            <div key={item.n} className={`py-5 pb-[22px] border-t ${i < 2 ? "border-[#15140F]" : "border-[#E3DCCF]"}`}>
              <div className="font-mono text-[11.5px] text-[#0D9488]">{item.n}</div>
              <h3 className="mt-2 mb-1.5 font-body text-[16.5px] font-semibold">{item.title}</h3>
              <p className="text-[15px] text-[#6E675C]">{item.desc}</p>
            </div>
          ))}
        </div>

        <SystemDiagram />

        <div className="flex gap-3 flex-wrap mt-7">
          <a href="https://www.sikaty.com" target="_blank" className="font-mono text-[13px] px-[18px] py-[11px] rounded-full border border-[#D6CEBF] hover:border-[#15140F] transition-colors">
            Live site ↗
          </a>
        </div>
      </div>

      {/* Demos */}
      <div id="demos" className="pt-[84px]">
        <div className="font-mono text-xs tracking-wide uppercase text-[#8A8377] mb-7">Selected work - 02</div>
        <h2 className="font-display font-normal text-[clamp(28px,3.6vw,40px)] tracking-tight max-w-[28ch] mb-3">
          Five landing pages, five different problems to solve
        </h2>
        <p className="text-[15.5px] text-[#6E675C] max-w-[60ch] mb-10">
          Sikaty is one deep product build. These are short, self-contained demos - each one a
          different industry, palette, and animation approach - built to show range on
          Figma-to-code and motion work specifically.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {demos.map((d) => (
            <Link
              key={d.slug}
              href={`/demos/${d.slug}`}
              className="group block border border-[#E3DCCF] rounded-md p-6 bg-[#FFFDF8] hover:border-[#15140F] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl">{d.name}</h3>
                <span className="font-mono text-xs text-[#8A8377] group-hover:text-[#15140F] transition-colors">↗</span>
              </div>
              <p className="text-sm text-[#6E675C] mt-1.5">{d.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Toolkit */}
      <div id="toolkit" className="pt-[84px]">
        <div className="font-mono text-xs tracking-wide uppercase text-[#8A8377] mb-6">Toolkit</div>
        <h2 className="font-display font-normal text-[clamp(28px,3.6vw,40px)] tracking-tight max-w-[26ch] mb-8">
          What I&apos;ve actually shipped with
        </h2>
        <div className="flex flex-col">
          {toolkit.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-6 py-[22px] border-t border-[#E3DCCF] ${i === toolkit.length - 1 ? "border-b" : ""}`}
            >
              <div>
                <div className="text-base font-semibold">{row.label}</div>
                <div className="font-mono text-[11px] tracking-wide uppercase text-[#0D9488] mt-1">{row.tag}</div>
              </div>
              <div className="flex flex-wrap gap-2 content-start">
                {row.items.map((it) => (
                  <span key={it} className="font-mono text-[12.5px] bg-[#FFFDF8] border border-[#E3DCCF] px-[11px] py-1.5 rounded">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div id="about" className="pt-[84px] grid grid-cols-1 md:grid-cols-[1fr_0.72fr] gap-14 items-start">
        <div>
          <div className="font-mono text-xs tracking-wide uppercase text-[#8A8377] mb-6">About</div>
          <p className="mb-4 font-display text-[27px] leading-[1.32] tracking-tight text-balance">
            I&apos;d rather go deep on one real product than wide on ten demos.
          </p>
          <p className="mb-4 text-[16.5px] text-[#2C2A24] text-balance">
            Building one thing end to end meant owning the parts that never show up in a component
            library: state that has to survive a page refresh, checkout flows that can&apos;t fail
            quietly, chat that stays in sync across two WebSocket channels.
          </p>
          <p className="text-[16.5px] text-[#2C2A24] text-balance">
            I like working close to the backend - not because I want to be a backend developer, but
            because the best frontend decisions come from knowing exactly what the API can and
            can&apos;t promise you.
          </p>
        </div>
        <div className="flex flex-col border-t border-[#15140F]">
          {[
            ["Focus", "Next.js · TypeScript · Tailwind"],
            ["Comfortable with", "Django REST · WebSockets"],
            ["Currently", "Open to frontend roles"],
          ].map(([k, v]) => (
            <div key={k} className="py-4 border-b border-[#E3DCCF]">
              <div className="font-mono text-[10.5px] tracking-wide uppercase text-[#8A8377]">{k}</div>
              <div className="text-[15px] mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="pt-24 pb-10">
        <div className="border-t border-[#15140F] pt-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <h2 className="font-display font-normal text-[clamp(32px,5vw,54px)] leading-[1.06] tracking-tight">
              Got something that needs a frontend?
            </h2>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <a href="mailto:marben.taguinod@gmail.com" className="inline-block font-mono text-[clamp(16px,2vw,21px)] border-b border-[#99F6E4] pb-1">
                marben.taguinod@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 font-mono text-[13.5px]">
            <a href="https://github.com/skidl0ck" target="_blank" className="text-[#6E675C]">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/marben-taguinod-b5b083424" target="_blank" className="text-[#6E675C]">LinkedIn ↗</a>
            <a href="/docs/Marben_Taguinod_Resume.pdf" target="_blank" download className="text-[#6E675C]">Résumé ↗</a>
          </div>
        </div>
        <div className="mt-14 pt-5 border-t border-[#E3DCCF] flex justify-between gap-5 flex-wrap font-mono text-[11.5px] text-[#8A8377]">
          <span>© {new Date().getFullYear()} Marben Taguinod</span>
        </div>
      </div>
    </div>
  );
}
