import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="cta-wrap" id="contacto">
      <div className="container">
        <div className="cta">
          <div>
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>
              Cuéntanos qué necesitas y te ayudamos a hacerlo realidad. Atención{" "}
              {site.hours[0].toLowerCase()}, {site.hours[1]}.
            </p>
          </div>
          <div className="cta-actions">
            <a href={site.phoneHref} className="btn btn-white">
              <Phone size={18} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline-light">
              <Mail size={18} /> Escríbenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
