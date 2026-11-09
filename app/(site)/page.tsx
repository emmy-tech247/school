import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Quote, ShieldCheck, Sparkles, Users, Award } from "lucide-react";
import { school, stats, programmes, reasons, testimonials, events, news } from "@/lib/data";
import { Section, Photo } from "@/components/ui";

const icons = [Users, ShieldCheck, Sparkles, Award];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="container-x grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-gold">Nursery · Primary · Secondary</p>
            <h1 className="mt-3 text-4xl leading-tight text-white md:text-6xl">{school.slogan}</h1>
            <p className="mt-5 max-w-lg text-slate-200">Welcome to {school.name}, where every child is known, challenged and supported to reach their full potential.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/admissions#apply" className="btn-gold">Apply for Admission</Link>
              <Link href="/about" className="btn-ghost">Explore Our School <ArrowRight size={16} /></Link>
            </div>
          </div>
          <Photo src="/images/hero/campus.jpg" alt="Crestwood International School main building with students on the lawn" priority sizes="(min-width: 768px) 50vw, 100vw" className="h-72 rounded-3xl border-4 border-gold/60 md:h-96" />
        </div>
      </section>

      <section className="-mt-1 bg-gold-50">
        <dl className="container-x grid grid-cols-2 gap-6 py-10 text-center md:grid-cols-4">
          {stats.map(([n, l]) => (<div key={l}><dt className="font-serif text-3xl font-bold text-navy">{n}</dt><dd className="text-sm">{l}</dd></div>))}
        </dl>
      </section>

      <Section title="A school built on excellence" sub={`For 25 years ${school.short} has combined strong academics with firm discipline, creativity and care. We prepare students to succeed in school, university and life.`}>
        <Link href="/about" className="btn-navy">Learn more about us</Link>
      </Section>

      <Section tint title="Our academic programmes" sub="Age-appropriate teaching at every stage.">
        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((p) => (<div key={p.title} className="card"><BookOpen className="text-gold" /><h3 className="mt-4 text-xl">{p.title}</h3>
            <p className="text-xs font-semibold text-gold-600">{p.ages}</p><p className="mt-2 text-sm">{p.text}</p></div>))}
        </div>
      </Section>

      <Section title={`Why choose ${school.short}`}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([t, d], i) => { const I = icons[i]; return (<div key={t}><span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold"><I size={22} /></span>
            <h3 className="mt-4 text-lg">{t}</h3><p className="mt-1 text-sm">{d}</p></div>); })}
        </div>
      </Section>

      <Section tint title="Latest news" sub="What is happening on campus.">
        <div className="grid gap-6 md:grid-cols-3">
          {news.slice(0, 3).map((n) => (<article key={n.slug} className="card p-0 overflow-hidden"><Photo src={n.image} alt={n.title} className="h-40" />
            <div className="p-5"><p className="text-xs font-semibold text-gold-600">{n.cat}</p>
              <h3 className="mt-1 text-lg"><Link href={`/news/${n.slug}`} className="hover:underline">{n.title}</Link></h3></div></article>))}
        </div>
      </Section>

      <Section title="What our community says">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (<figure key={t.n} className="card"><Quote className="text-gold" /><blockquote className="mt-3 text-sm">{t.q}</blockquote>
            <figcaption className="mt-4 text-sm"><span className="font-semibold text-navy">{t.n}</span><span className="block text-xs">{t.r}</span></figcaption></figure>))}
        </div>
      </Section>

      <Section tint title="Upcoming events">
        <ul className="grid gap-4 md:grid-cols-3">
          {events.map((e) => (<li key={e.t} className="card flex gap-4"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-center text-xs font-bold leading-tight text-gold">{e.d}</span>
            <div><h3 className="font-sans text-base font-semibold">{e.t}</h3><p className="flex items-center gap-1 text-xs"><CalendarDays size={12} />{e.loc}</p></div></li>))}
        </ul>
      </Section>

      <section className="bg-navy py-14 text-center text-white"><div className="container-x">
        <h2 className="text-3xl text-white">Give your child the best start</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-200">Visit us for a campus tour or send an enquiry today.</p>
        <Link href="/contact" className="btn-gold mt-6">Contact Us</Link></div></section>
    </>
  );
}
