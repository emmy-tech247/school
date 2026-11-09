"use client";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/lib/data";
import { Photo } from "./ui";

const cats = ["All", ...Array.from(new Set(gallery.map((g) => g.cat)))];
export default function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const [idx, setIdx] = useState<number | null>(null);
  const items = gallery.filter((g) => cat === "All" || g.cat === cat);
  const step = (d: number) => setIdx((i) => (i === null ? i : (i + d + items.length) % items.length));

  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setIdx(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  });

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {cats.map((c) => (<button key={c} onClick={() => setCat(c)} aria-pressed={c === cat}
          className={`rounded-full px-4 py-2 text-sm font-medium ${c === cat ? "bg-navy text-white" : "bg-navy-50 text-navy hover:bg-gold-50"}`}>{c}</button>))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (<button key={g.id} onClick={() => setIdx(i)} aria-label={`Open ${g.caption}`} className="overflow-hidden rounded-xl transition hover:opacity-90">
          <Photo src={g.src} alt={g.caption} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-square" /></button>))}
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4" onClick={() => setIdx(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 text-white"><X /></button>
          <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-4 text-white"><ChevronLeft size={36} /></button>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl">
            <Photo src={items[idx].src} alt={items[idx].caption} sizes="768px" priority className="aspect-[4/3] rounded-xl" />
            <p className="mt-3 text-center text-white">{items[idx].caption}</p></div>
          <button aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-4 text-white"><ChevronRight size={36} /></button>
        </div>)}
    </>
  );
}
