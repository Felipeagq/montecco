import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  text: string;
  parent?: { href: string; label: string };
};

export default function PageHero({ title, text, parent }: Props) {
  return (
    <section className="page-hero">
      <Image src="/img/hero-bg.jpg" alt="" fill priority sizes="100vw" className="hero-bg" />
      <div className="container page-hero-inner">
        <nav className="breadcrumb" aria-label="Ruta">
          <Link href="/">Inicio</Link>
          <ChevronRight size={14} />
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <ChevronRight size={14} />
            </>
          )}
          <span>{title}</span>
        </nav>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
