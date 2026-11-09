import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { nav, school } from "@/lib/data";
export default function Footer() {
  const s = school.social;
  return (
    <footer className="bg-navy text-slate-200">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div><h3 className="text-xl text-white">{school.name}</h3><p className="mt-3 text-sm">{school.slogan}</p>
          <div className="mt-5 flex gap-4">
            {[["Facebook", Facebook, s.facebook], ["Instagram", Instagram, s.instagram], ["X", Twitter, s.x], ["YouTube", Youtube, s.youtube]].map(([n, I, h]: any) => (
              <a key={n} href={h} aria-label={n} className="hover:text-gold"><I size={20} /></a>))}
          </div></div>
        <div><h3 className="text-lg text-white">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm">{nav.map(([l, h]) => <li key={h}><Link href={h} className="hover:text-gold">{l}</Link></li>)}
            <li><Link href="/portal/login" className="hover:text-gold">School Portal</Link></li></ul></div>
        <div><h3 className="text-lg text-white">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{school.address}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 text-gold" />{school.phone}</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 text-gold" />{school.email}</li></ul></div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
    </footer>
  );
}
