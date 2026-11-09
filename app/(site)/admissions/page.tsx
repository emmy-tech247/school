import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import Faq from "@/components/Faq";
import EnquiryForm from "@/components/EnquiryForm";
import { faqs, school } from "@/lib/data";
export const metadata: Metadata = { title: "Admissions", description: "Requirements, process, fees and how to apply." };
const c = school.currency;
const steps = ["Submit an enquiry or application", "Book a campus tour", "Child takes an assessment", "Receive admission decision", "Pay fees and complete registration"];
const fees = [["Nursery", `${c}900`], ["Primary", `${c}1,100`], ["Secondary", `${c}1,400`]];
export default function Admissions() {
  return (<>
    <PageHero title="Admissions" sub="Join a school where every child is known and challenged." />
    <Section title="Admission requirements"><ul className="max-w-2xl list-disc space-y-2 pl-5">
      {["Completed application form", "Copy of birth certificate", "Two passport photographs", "Previous school report (for Primary 2 and above)", "Immunisation record"].map((r) => <li key={r}>{r}</li>)}</ul></Section>
    <Section tint title="Admission process"><ol className="grid gap-4 md:grid-cols-5">
      {steps.map((s, i) => (<li key={s} className="card"><span className="font-serif text-3xl text-gold">{i + 1}</span><p className="mt-2 text-sm font-medium text-navy">{s}</p></li>))}</ol></Section>
    <Section title="Tuition and fees" sub="Sample amounts per term. Replace with your official fee schedule.">
      <div className="max-w-xl overflow-hidden rounded-2xl border shadow-card"><table className="w-full text-left text-sm">
        <thead className="bg-navy text-white"><tr><th className="p-4">Section</th><th className="p-4">Tuition per term</th></tr></thead>
        <tbody>{fees.map(([s, f]) => (<tr key={s} className="border-t"><td className="p-4">{s}</td><td className="p-4 font-semibold text-navy">{f}</td></tr>))}</tbody></table></div></Section>
    <Section tint title="Frequently asked questions"><div className="max-w-3xl"><Faq items={faqs} /></div></Section>
    <section id="apply" className="scroll-mt-24 py-16"><div className="container-x grid gap-10 md:grid-cols-2">
      <div><h2 className="text-3xl">Apply or enquire</h2><p className="mt-3">Fill in the form and our admissions team will contact you within two working days. A full online application will be available through the school portal.</p></div>
      <EnquiryForm kind="admission" /></div></section>
  </>);
}
