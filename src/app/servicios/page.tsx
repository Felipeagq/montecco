import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Mantenimiento, consultoría de ingeniería y arquitectura, planeación de proyectos, suministros, montajes electromecánicos y obras civiles.",
};

const steps = [
  { title: "Diagnóstico", text: "Escuchamos tus necesidades y evaluamos el alcance técnico del proyecto." },
  { title: "Planeación", text: "Definimos cronograma, recursos y presupuesto claro, sin sorpresas." },
  { title: "Ejecución", text: "Personal calificado ejecuta la obra con seguridad y control de calidad." },
  { title: "Entrega y soporte", text: "Entregamos a satisfacción y te acompañamos con mantenimiento." },
];

export default function Servicios() {
  return (
    <>
      <PageHero
        title="Servicios"
        text="Soluciones integrales de ingeniería, montajes y construcción para diversos sectores industriales y comerciales."
      />

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Lo que hacemos"
            title="Nuestros servicios"
            text="Algunos de nuestros servicios más destacados."
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso claro, de principio a fin" />
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark section-tight">
        <div className="container">
          <Stats variant="band" />
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <div className="faq-media">
            <Image src="/img/tecnico-t.png" alt="Técnico de Montec" width={631} height={647} />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas"
            />
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
