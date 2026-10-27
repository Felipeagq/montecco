import Image from "next/image";
import { clients } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function ClientLogos() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Clientes"
          title="Empresas que confían en nosotros"
          text="Hemos acompañado a organizaciones de distintos sectores en la ejecución de sus proyectos."
        />
        <ul className="client-grid">
          {clients.map((c) => (
            <li className="client-card" key={c.name}>
              <Image src={c.src} alt={c.name} width={c.w} height={c.h} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
