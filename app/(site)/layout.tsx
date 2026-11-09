import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:p-3">Skip to content</a>
    <Navbar /><main id="main" className="pt-20">{children}</main><Footer /><WhatsAppButton />
  </>);
}
