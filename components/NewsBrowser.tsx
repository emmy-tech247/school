"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { news } from "@/lib/data";
import { Photo } from "./ui";

export default function NewsBrowser() {
  const [q, setQ] = useState("");
  const list = useMemo(() => news.filter((n) => `${n.title} ${n.cat} ${n.excerpt}`.toLowerCase().includes(q.toLowerCase())), [q]);
  return (
    <>
      <div className="relative mb-8 max-w-md">
        <label htmlFor="search" className="sr-only">Search news and events</label>
        <Search size={18} className="absolute left-3 top-3 text-slate-400" aria-hidden />
        <input id="search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search news and events" className="input pl-10" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {list.map((n) => (
          <article key={n.slug} className="card overflow-hidden p-0 transition hover:-translate-y-1">
            <Photo src={n.image} alt={n.title} sizes="(min-width: 768px) 33vw, 100vw" className="h-44" />
            <div className="p-6"><p className="text-xs font-semibold text-gold-600">{n.cat} · {new Date(n.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}</p>
              <h3 className="mt-2 text-xl"><Link href={`/news/${n.slug}`} className="hover:underline">{n.title}</Link></h3>
              <p className="mt-2 text-sm">{n.excerpt}</p></div>
          </article>
        ))}
      </div>
      {list.length === 0 && <p className="py-10 text-center">No results for “{q}”.</p>}
    </>
  );
}
