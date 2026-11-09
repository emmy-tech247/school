import type { Metadata } from "next";
import { PageHero, Section, Photo } from "@/components/ui";
import { facilities } from "@/lib/data";
export const metadata: Metadata = { title: "Our Facilities", description: "Classrooms, laboratories, library, sports and transport." };
export default function Facilities() {
  return (<>
    <PageHero title="Our Facilities" sub="Spaces designed for learning, play and growth." />
    <Section><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {facilities.map(([t, d, img]) => (<article key={t} className="card overflow-hidden p-0"><Photo src={img} alt={t} className="h-52" />
        <div className="p-6"><h2 className="text-xl">{t}</h2><p className="mt-2 text-sm">{d}</p></div></article>))}</div></Section>
  </>);
}
