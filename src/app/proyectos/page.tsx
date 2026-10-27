import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectGallery from "@/components/ProjectGallery";
import ClientLogos from "@/components/ClientLogos";
import Stats from "@/components/Stats";
import { projectPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Limpieza de aceites, filtración de combustible G2F-DF250, energías renovables y más de 120 proyectos ejecutados.",
};

export default function Proyectos() {
  return (
    <>
      <PageHero
        title="Proyectos"
        text="Más de 120 proyectos ejecutados con calidad, seguridad y compromiso."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Proyectos destacados"
            title="Soluciones que hemos implementado"
            text="Conoce algunos de los proyectos y equipos con los que ayudamos a nuestros clientes."
          />
          <div className="post-grid">
            {projectPosts.map((p) => (
              <ProjectCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Galería"
            title="Nuestro trabajo en campo"
            text="Energía solar, subestaciones, montajes electromecánicos y obras civiles."
          />
          <ProjectGallery />
        </div>
      </section>

      <section className="section section-dark section-tight">
        <div className="container">
          <Stats variant="band" />
        </div>
      </section>

      <ClientLogos />
    </>
  );
}
