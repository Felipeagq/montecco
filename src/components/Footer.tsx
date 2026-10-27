import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light">
            <Image src="/img/logo-transparente.png" alt="" width={56} height={56} />
            <span className="brand-text">
              <small>Montajes &amp; Tecnologías</small>
              <strong>MONTEC SAS</strong>
            </span>
          </Link>
          <p>
            Soluciones de ingeniería innovadoras y sostenibles: montajes electromecánicos,
            mantenimiento, consultoría y construcción de obras civiles.
          </p>
        </div>

        <div>
          <h4>Navegación</h4>
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Servicios</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>
                {site.address[0]}
                <br />
                {site.address[1]}
              </span>
            </li>
            <li>
              <Phone size={18} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Mail size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Clock size={18} />
              <span>
                {site.hours[0]}
                <br />
                {site.hours[1]}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </span>
          <span>Desarrollado por FEANWARE</span>
        </div>
      </div>
    </footer>
  );
}
