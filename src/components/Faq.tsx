"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  {
    q: "¿Qué tipos de proyectos pueden manejar en su empresa de consultoría?",
    a: "Manejamos proyectos de ingeniería y arquitectura, montajes electromecánicos, construcción y remodelación de obras civiles, planeación de proyectos y suministros generales para diversos sectores industriales y comerciales.",
  },
  {
    q: "¿Ofrecen servicios de mantenimiento para proyectos ya completados?",
    a: "Sí. Ofrecemos mantenimiento correctivo y preventivo en obras civiles, mecánicas y eléctricas para garantizar la operatividad y eficiencia de tus equipos e instalaciones.",
  },
  {
    q: "¿Cómo garantizan la calidad en sus servicios de asesoría y consultoría?",
    a: "Contamos con personal calificado, procesos de planeación meticulosos y seguimiento constante en cada etapa, desde el inicio hasta la entrega final del proyecto.",
  },
  {
    q: "¿Pueden adaptar sus servicios a proyectos específicos o personalizados?",
    a: "Por supuesto. Cada proyecto es evaluado según tus necesidades para ofrecerte una solución a la medida, con precios transparentes y disponibilidad permanente.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={it.q}>
            <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{it.q}</span>
              <Plus size={18} className="faq-icon" />
            </button>
            <div className="faq-answer">
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
