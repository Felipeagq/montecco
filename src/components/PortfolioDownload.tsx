import Image from "next/image";
import { Download, ExternalLink, FileText } from "lucide-react";
import { portfolio } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function PortfolioDownload() {
  return (
    <section className="section section-soft" id="portafolio">
      <div className="container">
        <div className="portfolio">
          <a
            href={portfolio.href}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-cover"
            aria-label="Ver portafolio de servicios"
          >
            <Image
              src="/img/portafolio-portada.jpg"
              alt="Portada del portafolio de servicios de Montec"
              width={720}
              height={931}
              sizes="(max-width: 960px) 60vw, 340px"
            />
          </a>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Portafolio de servicios"
              title="Conoce todo lo que podemos hacer por tu empresa"
              text="Descarga nuestro portafolio y descubre nuestras soluciones de ingeniería, construcción y mantenimiento para plantas industriales y empresas."
            />
            <ul className="portfolio-areas">
              {portfolio.areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <div className="portfolio-actions">
              <a href={portfolio.href} download={portfolio.fileName} className="btn btn-primary btn-lg">
                <Download size={18} /> Descargar portafolio
              </a>
              <a
                href={portfolio.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <ExternalLink size={18} /> Ver en línea
              </a>
            </div>
            <span className="portfolio-meta">
              <FileText size={15} /> {portfolio.meta}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
