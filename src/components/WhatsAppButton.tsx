import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
