import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";
import { school } from "@/lib/data";
export const metadata: Metadata = { title: "Contact Us", description: "Address, phone, email, map and contact form." };
export default function Contact() {
  return (<>
    <PageHero title="Contact Us" sub="We would love to hear from you." />
    <Section><div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-5">
        <p className="flex gap-3"><MapPin className="text-gold" />{school.address}</p>
        <p className="flex gap-3"><Phone className="text-gold" /><a href={`tel:${school.phone}`}>{school.phone}</a></p>
        <p className="flex gap-3"><Mail className="text-gold" /><a href={`mailto:${school.email}`}>{school.email}</a></p>
        <iframe title="School location map" loading="lazy" className="h-64 w-full rounded-2xl border-0"
          src={`https://www.google.com/maps?q=${encodeURIComponent(school.address)}&output=embed`} />
      </div>
      <EnquiryForm kind="contact" />
    </div></Section>
  </>);
}
