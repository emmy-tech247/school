import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { programmes } from "@/lib/data";
export const metadata: Metadata = { title: "Academics", description: "Our nursery, primary and secondary programmes, curriculum and calendar." };
const calendar = [["Term 1", "Sept – Dec", "Resumption 8 Sept · Mid-term 20–24 Oct · Vacation 18 Dec"], ["Term 2", "Jan – Apr", "Resumption 12 Jan · Mid-term 23–27 Feb · Vacation 3 Apr"], ["Term 3", "Apr – Jul", "Resumption 27 Apr · Examinations June · Graduation 17 Jul"]];
const clubs = ["Football & Athletics", "Debate & Public Speaking", "Music & Choir", "Robotics & Coding", "Art & Design", "Drama", "Chess", "Scouts & Community Service"];
export default function Academics() {
  return (<>
    <PageHero title="Academics" sub="Rigorous teaching, small classes and a love of learning." />
    <Section title="Our programmes"><div className="grid gap-6 md:grid-cols-3">
      {programmes.map((p) => (<div key={p.title} className="card"><h3 className="text-xl">{p.title}</h3><p className="text-xs font-semibold text-gold-600">{p.ages}</p><p className="mt-2 text-sm">{p.text}</p></div>))}</div></Section>
    <Section tint title="Curriculum & teaching methods" sub="A blended national and international curriculum.">
      <ul className="grid gap-3 md:grid-cols-2">{["Core subjects: English, mathematics, sciences, social studies", "Languages, ICT and creative arts at every level", "Project-based and hands-on learning", "Regular assessment with termly reports to parents", "Career guidance and exam preparation in senior years"].map((t) => (<li key={t} className="card py-4 text-sm">{t}</li>))}</ul></Section>
    <Section title="Academic calendar"><div className="grid gap-6 md:grid-cols-3">
      {calendar.map(([t, m, d]) => (<div key={t} className="card"><h3 className="text-xl">{t}</h3><p className="text-sm font-semibold text-gold-600">{m}</p><p className="mt-2 text-sm">{d}</p></div>))}</div></Section>
    <Section tint title="Extracurricular activities"><ul className="flex flex-wrap gap-3">{clubs.map((c) => (<li key={c} className="rounded-full bg-white px-5 py-2 text-sm font-medium text-navy shadow-card">{c}</li>))}</ul></Section>
  </>);
}
