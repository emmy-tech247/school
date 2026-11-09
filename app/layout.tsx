import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
export const metadata: Metadata = {
  title: { default: "Crestwood International School", template: "%s | Crestwood International School" },
  description: "Nursery, primary and secondary education built on academic excellence, discipline and creativity.",
  openGraph: { images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Crestwood International School" }] },
  twitter: { card: "summary_large_image", images: ["/images/og.jpg"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${inter.variable} ${serif.variable}`}>{children}</body></html>);
}
