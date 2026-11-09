"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { nav, school } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav aria-label="Main" className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-bold text-navy">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold"><GraduationCap size={22} /></span>
          <span className="hidden sm:block">{school.name}</span>
        </Link>
        <ul className="hidden items-center gap-5 text-sm font-medium xl:flex">
          {nav.map(([l, h]) => (
            <li key={h}><Link href={h} aria-current={active(h) ? "page" : undefined}
              className={`border-b-2 py-1 transition hover:text-gold-600 ${active(h) ? "border-gold text-navy" : "border-transparent"}`}>{l}</Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/admissions#apply" className="btn-gold hidden sm:inline-flex">Apply Now</Link>
          <button className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t bg-white px-5 pb-5 xl:hidden">
          {nav.map(([l, h]) => (<li key={h}><Link href={h} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-medium">{l}</Link></li>))}
          <li className="pt-4"><Link href="/admissions#apply" onClick={() => setOpen(false)} className="btn-gold w-full">Apply Now</Link></li>
        </ul>
      )}
    </header>
  );
}
