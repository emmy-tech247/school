import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import GalleryGrid from "@/components/GalleryGrid";
export const metadata: Metadata = { title: "Gallery", description: "Photos from school life, sports, culture and graduation." };
export default function Gallery() {
  return (<><PageHero title="Gallery" sub="Moments from school life." /><Section><GalleryGrid /></Section></>);
}
