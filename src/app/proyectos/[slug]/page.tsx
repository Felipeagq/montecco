import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CircleCheck, Expand, MessageCircle, Phone, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import { formatDate, projectPosts, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = projectPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.cover.src] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const post = projectPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = projectPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <PageHero
        title={post.title}
        text={post.excerpt}
        parent={{ href: "/proyectos", label: "Proyectos" }}
      />

      <section className="section">
        <div className="container post-layout">
          <article className="post-main">
            <div className="post-media">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                width={post.cover.w}
                height={post.cover.h}
                priority
                sizes="(max-width: 960px) 100vw, 760px"
              />
            </div>

            <div className="post-meta">
              <span>
                <CalendarDays size={16} /> {formatDate(post.date)}
              </span>
              <span>
                <Tag size={16} /> {post.category}
              </span>
            </div>

            <div className="post-content">
              {post.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {post.highlights && (
              <div className="post-highlights">
                <h2>Características principales</h2>
                <ul>
                  {post.highlights.map((h) => (
                    <li key={h}>
                      <CircleCheck size={20} /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.docs && (
              <div className="post-docs">
                <h2>Documentación técnica</h2>
                {post.docs.map((d) => (
                  <figure key={d.src}>
                    <a href={d.src} target="_blank" rel="noopener noreferrer">
                      <Image src={d.src} alt={d.alt} width={d.w} height={d.h} sizes="(max-width: 960px) 100vw, 760px" />
                    </a>
                    <figcaption>
                      <span>{d.alt}</span>
                      <a href={d.src} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        Ver en tamaño completo <Expand size={15} />
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </article>

          <aside className="post-aside">
            <div className="aside-cta">
              <h3>¿Te interesa este proyecto?</h3>
              <p>Cuéntanos qué necesitas y te asesoramos sin compromiso.</p>
              <a href={site.phoneHref} className="btn btn-white">
                <Phone size={18} /> {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>

            <div className="aside-card">
              <h3>Otros proyectos</h3>
              <ul className="aside-list">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/proyectos/${o.slug}`}>
                      <Image src={o.cover.src} alt="" width={o.cover.w} height={o.cover.h} sizes="88px" />
                      <span>
                        <strong>{o.title}</strong>
                        <small>{formatDate(o.date)}</small>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/proyectos" className="link-arrow">
                Ver todos los proyectos
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
