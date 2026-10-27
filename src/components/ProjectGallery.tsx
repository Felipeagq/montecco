"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { projects } from "@/lib/site";

export default function ProjectGallery({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <>
      <div className="project-grid">
        {items.map((p, i) => (
          <button className="project-tile" key={p.src} onClick={() => setActive(i)}>
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 720px) 100vw, 33vw" />
            <span className="project-overlay">
              <span>{p.alt}</span>
              <ZoomIn size={20} />
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[active].alt} onClick={close}>
          <button className="lightbox-close" aria-label="Cerrar" onClick={close}>
            <X />
          </button>
          <button
            className="lightbox-nav is-prev"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Image src={items[active].src} alt={items[active].alt} width={items[active].w} height={items[active].h} />
            <figcaption>
              {items[active].alt} · {active + 1} / {items.length}
            </figcaption>
          </figure>
          <button
            className="lightbox-nav is-next"
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
