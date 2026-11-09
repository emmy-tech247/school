import { MessageCircle } from "lucide-react";
import { school } from "@/lib/data";
export default function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${school.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20admissions.`}
      target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105">
      <MessageCircle />
    </a>
  );
}
