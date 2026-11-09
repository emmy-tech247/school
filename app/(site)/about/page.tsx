import type { Metadata } from "next";
import { PageHero, Section, Photo } from "@/components/ui";
import { school } from "@/lib/data";
export const metadata: Metadata = { title: "About Us", description: "History, vision, mission, values and leadership." };
const values = [["Excellence", "We aim high and support every child to get there."], ["Integrity", "We do what is right, even when nobody is watching."], ["Respect", "We value every person and every opinion."], ["Creativity", "We encourage curiosity and original thinking."], ["Service", "We prepare students to contribute to their community."]];
const team = [["Dr. Helen Adeyemi", "Principal"], ["Mr. James Carter", "Vice Principal, Academics"], ["Mrs. Ruth Okafor", "Head of Primary"], ["Mr. Samuel Bello", "Head of Secondary"]];
export default function About() {
  return (<>
    <PageHero title="About Us" sub={`The story, values and people behind ${school.name}.`} />
    <Section title="Our history"><p className="max-w-3xl">Founded 25 years ago with 40 pupils and three classrooms, {school.short} has grown into a community of more than 1,200 students. Our growth has always followed one idea: small, well-run classes led by teachers who care.</p></Section>
    <Section tint><div className="grid gap-6 md:grid-cols-2">
      <div className="card"><h2 className="text-2xl">Our vision</h2><p className="mt-2">To be a leading school that develops confident, capable and principled young people.</p></div>
      <div className="card"><h2 className="text-2xl">Our mission</h2><p className="mt-2">To provide high-quality education in a safe, disciplined and inspiring environment.</p></div></div></Section>
    <Section title="Core values"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {values.map(([t, d]) => (<div key={t} className="card"><h3 className="text-lg">{t}</h3><p className="mt-1 text-sm">{d}</p></div>))}</div></Section>
    <Section tint title="Principal's welcome"><div className="grid items-center gap-8 md:grid-cols-[1fr_2fr]">
      <Photo src="/images/about/team-1.jpg" alt="Dr. Helen Adeyemi, Principal" sizes="(min-width: 768px) 33vw, 100vw" className="aspect-square rounded-2xl" />
      <div className="space-y-3"><p>Welcome to {school.name}. We believe every child can succeed when they are known, challenged and encouraged. Our staff work closely with parents to make that happen.</p><p>I invite you to visit, meet our teachers and see our students at work.</p><p className="font-semibold text-navy">Dr. Helen Adeyemi, Principal</p></div></div></Section>
    <Section title="School leadership"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {team.map(([n, r], i) => (<div key={n} className="text-center"><Photo src={`/images/about/team-${i + 1}.jpg`} alt={`${n}, ${r}`} sizes="(min-width: 1024px) 25vw, 50vw" className="mb-3 aspect-square rounded-2xl" /><h3 className="text-lg">{n}</h3><p className="text-sm">{r}</p></div>))}</div></Section>
    <Section tint title="Facilities & learning environment"><p className="max-w-3xl">Our 10-acre campus includes bright classrooms, laboratories, a library and sports grounds. See the <a href="/facilities" className="font-semibold text-navy underline">Facilities page</a> for more.</p></Section>
  </>);
}
