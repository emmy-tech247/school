import Image from "next/image";
import { ImageIcon } from "lucide-react";
export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="container-x"><h1 className="text-4xl text-white md:text-5xl">{title}</h1><p className="mt-3 max-w-2xl text-slate-200">{sub}</p></div>
    </section>
  );
}
export function Section({ title, sub, children, tint }: { title?: string; sub?: string; children: React.ReactNode; tint?: boolean }) {
  return (
    <section className={tint ? "bg-navy-50 py-16" : "py-16"}>
      <div className="container-x">
        {title && <div className="mb-10 max-w-2xl"><h2 className="text-3xl">{title}</h2>{sub && <p className="mt-2">{sub}</p>}</div>}
        {children}
      </div>
    </section>
  );
}
/** Replace with next/image and real photos in /public */
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={`flex items-center justify-center bg-gradient-to-br from-navy to-navy-700 text-gold ${className}`}>
      <ImageIcon size={36} aria-hidden />
    </div>
  );
}

/** Optimised, responsive image. Parent size is set with className (e.g. "h-44" or "aspect-square"). */
export function Photo({ src, alt, className = "", sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", priority = false }: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-navy-50 ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
