import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import NewsBrowser from "@/components/NewsBrowser";
import { events } from "@/lib/data";
export const metadata: Metadata = { title: "News & Events", description: "School announcements, achievements and upcoming events." };
export default function News() {
  return (<>
    <PageHero title="News & Events" sub="Announcements, achievements and what is coming up." />
    <Section><div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
      <NewsBrowser />
      <aside><h2 className="text-2xl">Upcoming events</h2><ul className="mt-4 space-y-3">
        {events.map((e) => (<li key={e.t} className="card py-4"><p className="text-xs font-bold text-gold-600">{e.d}</p><p className="font-semibold text-navy">{e.t}</p><p className="text-xs">{e.loc}</p></li>))}</ul></aside>
    </div></Section>
  </>);
}
