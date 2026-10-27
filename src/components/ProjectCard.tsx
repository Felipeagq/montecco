import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { formatDate, type ProjectPost } from "@/lib/site";

export default function ProjectCard({ post }: { post: ProjectPost }) {
  const href = `/proyectos/${post.slug}`;

  return (
    <article className="post-card">
      <Link href={href} className="post-cover" tabIndex={-1} aria-hidden>
        <Image
          src={post.cover.src}
          alt=""
          width={post.cover.w}
          height={post.cover.h}
          sizes="(max-width: 720px) 100vw, 33vw"
        />
        <span className="post-chip">{post.category}</span>
      </Link>
      <div className="post-body">
        <span className="post-date">
          <CalendarDays size={15} /> {formatDate(post.date)}
        </span>
        <h3>
          <Link href={href}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link href={href} className="link-arrow">
          Ver proyecto <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
