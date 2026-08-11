"use client";

import { useState } from "react";

const NODES = [
  { key: "01 · Client", title: "Next.js frontend", built: true,
    detail: "The client: Next.js pages and components, React Query for data, Tailwind for styling. Everything the user actually sees and clicks." },
  { key: "02 · Live", title: "Realtime UI layer", built: true,
    detail: "WebSocket clients feeding the inbox and active conversation, plus the dual-channel logic that keeps notifications and open threads in sync." },
  { key: "03 · Server", title: "Django Channels", built: false,
    detail: "Django Channels holds the WebSocket connections server-side and routes each message to the right channel group." },
  { key: "04 · Server", title: "Django REST API", built: false,
    detail: "Django REST Framework serves gigs, orders, profiles and auth — the API surface the frontend consumes." },
  { key: "05 · Client", title: "Checkout UI", built: true,
    detail: "Stripe Elements and PayPal Checkout embedded in the client, driving subscription and custom-offer checkout end to end." },
];

export default function SystemDiagram() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-[46px] p-6 sm:p-8 bg-[#FFFDF8] border border-[#E3DCCF] rounded-md">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <h3 className="font-display text-2xl font-normal tracking-tight">
            Where my work sat in the system
          </h3>
          <p className="mt-1.5 text-sm text-[#6E675C] max-w-[48ch]">
            Click a piece to see what it did. Teal is mine end to end.
          </p>
        </div>
        <div className="flex gap-4 font-mono text-[11.5px] text-[#8A8377]">
          <span className="flex items-center gap-1.5">
            <i className="w-2.5 h-2.5 rounded-sm bg-[#0D9488] inline-block" />
            Built by me
          </span>
          <span className="flex items-center gap-1.5">
            <i className="w-2.5 h-2.5 rounded-sm bg-[#E3DCCF] inline-block" />
            Backend context
          </span>
        </div>
      </div>

      <div className="flex gap-2.5 mt-6 flex-wrap">
        {NODES.map((node, i) => (
          <button
            key={node.key}
            type="button"
            onClick={() => setActive(i)}
            className={`flex-1 min-w-[160px] text-left cursor-pointer font-body rounded-[5px] p-3.5 border transition-colors
              ${node.built ? "bg-[#FFFDF8] hover:border-[#0D9488]" : "bg-[#F4F1EA] hover:border-[#C6BDAC]"}
              border-[#E3DCCF]`}
            style={{
              outline: active === i ? "2px solid #15140F" : "2px solid transparent",
              outlineOffset: "-1px",
            }}
          >
            <span className={`block font-mono text-[10.5px] tracking-wide uppercase ${node.built ? "text-[#0D9488]" : "text-[#8A8377]"}`}>
              {node.key}
            </span>
            <span className="block text-[14.5px] font-semibold mt-1.5">{node.title}</span>
          </button>
        ))}
      </div>

      <p className="mt-5 text-[15px] text-[#2C2A24] min-h-[48px]">{NODES[active].detail}</p>
    </div>
  );
}
