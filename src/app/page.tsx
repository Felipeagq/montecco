import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeDollarSign,
  CircleCheck,
  Clock,
  Eye,
  Phone,
  Quote,
  Target,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import ServiceGrid from "@/components/ServiceGrid";
import ClientLogos from "@/components/ClientLogos";
import ProjectGallery from "@/components/ProjectGallery";
import PortfolioDownload from "@/components/PortfolioDownload";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Precios transparentes",
    text: "Nuestros “precios sin sorpresas” no solo son transparentes, sino también competitivos, asegurando calidad a un costo justo y claro desde el inicio.",
  },
  {
    icon: Clock,
    title: "Siempre disponibles",
    text: "Estamos presentes cuando más nos necesitas, ofreciendo servicios confiables y constantes con alta disponibilidad de nuestro personal.",
  },
  {
    icon: Award,
    title: "Expertos calificados",
    text: "Garantizamos servicios de la más alta calidad, con amplia experiencia y conocimientos para cumplir tus expectativas con excelencia y eficiencia.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/img/hero-bg.jpg" alt="" fill priority sizes="100vw" className="hero-bg" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="hero-pill">Ingeniería · Montajes · Construcción</span>
            <h1>
              Hacemos <span>realidad</span> tus proyectos
            </h1>
            <p>
              Montajes electromecánicos, mantenimiento, consultoría y construcción de obras
              civiles con los más altos estándares de calidad, seguridad y eficiencia.
            </p>
            <div className="hero-actions">
              <Link href="/servicios" className="btn btn-primary btn-lg">
                Nuestros servicios <ArrowRight size={18} />
              </Link>
              <a href={site.phoneHref} className="btn btn-outline-light btn-lg">
                <Phone size={18} /> {site.phone}
              </a>
            </div>
            <ul className="hero-trust">
              {reasons.map((r) => (
                <li key={r.title}>
                  <CircleCheck size={16} /> {r.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-logo">
            <Image
              src="/img/logo-transparente.png"
              alt="Montajes & Tecnologías Montec"
              width={455}
              height={458}
              priority
            />
          </div>
        </div>
      </section>

      <div className="container stats-overlap">
        <Stats variant="card" />
      </div>

      <section className="section about">
        <div className="container about-grid">
          <div className="about-media">
            <Image
              className="about-main"
              src="/img/gal-5.jpg"
              alt="Equipo de Montec en campo"
              width={1124}
              height={553}
              sizes="(max-width: 960px) 100vw, 50vw"
            />
            <Image
              className="about-secondary"
              src="/img/gal-8.jpg"
              alt="Subestación eléctrica"
              width={1128}
              height={549}
              sizes="(max-width: 960px) 60vw, 25vw"
            />
            <div className="about-badge">
              <strong>10</strong>
              <span>
                años de
                <br />
                experiencia
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Quiénes somos"
              title="Comprometidos a hacer el trabajo de la manera correcta"
            />
            <p className="lead">
              “Estamos comprometidos a hacer el trabajo, cada trabajo, de la manera correcta”
              refleja nuestra dedicación inquebrantable a la calidad y eficiencia. Nos
              esforzamos por la excelencia, asegurando que cada proyecto cumpla con los más
              altos estándares y fortaleciendo la confianza de nuestros clientes con cada tarea
              completada.
            </p>
            <p className="muted">
              Nuestro compromiso es con la integridad y la maestría en todo lo que hacemos.
            </p>
            <ul className="check-list">
              <li>
                <CircleCheck size={20} /> Ingeniería con excelencia técnica y ética profesional
              </li>
              <li>
                <CircleCheck size={20} /> Acompañamiento desde la planeación hasta la entrega
              </li>
              <li>
                <CircleCheck size={20} /> Responsabilidad ambiental y desarrollo sostenible
              </li>
            </ul>
            <Link href="/servicios" className="btn btn-primary">
              Conoce nuestros servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Por qué escogernos"
            title="Razones por las que somos tu mejor opción"
          />
          <div className="reason-grid">
            {reasons.map((r) => (
              <article className="reason-card" key={r.title}>
                <span className="icon-badge">
                  <r.icon size={26} />
                </span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-row">
            <SectionHeading
              align="left"
              eyebrow="Servicios"
              title="Soluciones integrales de ingeniería"
              text="Algunos de nuestros servicios más destacados."
            />
            <Link href="/servicios" className="btn btn-outline">
              Ver todos los servicios <ArrowRight size={18} />
            </Link>
          </div>
          <ServiceGrid withLinks />
        </div>
      </section>

      <PortfolioDownload />

      <section className="section section-dark">
        <div className="container">
          <SectionHeading light eyebrow="Nuestra esencia" title="Misión y visión" />
          <div className="mv-grid">
            <article className="mv-card">
              <span className="icon-badge is-dark">
                <Target size={26} />
              </span>
              <h3>Misión</h3>
              <p>
                Nuestra misión en <strong>Montajes y Tecnologías Montec SAS</strong> es ser
                líderes en soluciones de ingeniería innovadora y sostenible que impulsen el
                progreso y mejoren la calidad de vida. Nos comprometemos a proporcionar
                servicios de alta calidad, basados en la excelencia técnica, la ética
                profesional y la responsabilidad ambiental. Buscamos el mejoramiento continuo de
                nuestros clientes, colaboradores y comunidades, contribuyendo de manera
                significativa al desarrollo sostenible y al avance tecnológico.
              </p>
            </article>
            <article className="mv-card">
              <span className="icon-badge is-dark">
                <Eye size={26} />
              </span>
              <h3>Visión</h3>
              <p>
                Visualizamos un mañana donde <strong>Montajes y Tecnologías Montec SAS</strong>{" "}
                sea reconocida como la firma de ingeniería líder a nivel global, distinguida por
                su capacidad para generar impacto positivo en la sociedad y el medio ambiente.
                Aspiramos a ser la opción preferida para clientes que buscan la excelencia
                técnica, la innovación y la sostenibilidad en cada proyecto.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Nuestro equipo" title="Liderazgo con experiencia" />
          <article className="team-card">
            <Image
              className="team-photo"
              src="/img/mauricio.jpg"
              alt="Mauricio, fundador de Montec"
              width={440}
              height={440}
            />
            <div>
              <Quote className="team-quote" size={32} />
              <p>
                Líder visionario con una sólida experiencia técnica, comprometido con la
                innovación y la excelencia en la entrega de soluciones de ingeniería avanzadas y
                sostenibles.
              </p>
              <h3>Mauricio</h3>
              <span className="team-role">Fundador y CEO</span>
            </div>
          </article>
        </div>
      </section>

      <ClientLogos />

      <section className="section section-soft">
        <div className="container">
          <div className="head-row">
            <SectionHeading
              align="left"
              eyebrow="Proyectos"
              title="Trabajos recientes"
              text="Una muestra de los proyectos que hemos ejecutado en campo."
            />
            <Link href="/proyectos" className="btn btn-outline">
              Ver todos los proyectos <ArrowRight size={18} />
            </Link>
          </div>
          <ProjectGallery limit={6} />
        </div>
      </section>
    </>
  );
}
