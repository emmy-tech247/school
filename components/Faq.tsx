"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function Faq({ items }: { items: readonly (readonly string[])[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y rounded-2xl border bg-white shadow-card">
      {items.map(([q, a], i) => (
        <div key={q}>
          <h3 className="font-sans text-base">
            <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-navy">
              {q}<ChevronDown size={18} className={`shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
          </h3>
          <div id={`faq-${i}`} hidden={open !== i} className="px-5 pb-5 text-sm">{a}</div>
        </div>
      ))}
    </div>
  );
}
