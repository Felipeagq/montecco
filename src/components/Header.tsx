"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group">
            <a href={site.phoneHref}>
              <Phone size={14} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={14} /> {site.email}
            </a>
          </div>
          <span>
            <Clock size={14} /> {site.hours[0]} · {site.hours[1]}
          </span>
        </div>
      </div>

      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={site.name}>
            <Image src="/img/logo-transparente.png" alt="" width={56} height={56} priority />
            <span className="brand-text">
              <small>Montajes &amp; Tecnologías</small>
              <strong>MONTEC SAS</strong>
            </span>
          </Link>

          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Principal">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "is-active" : ""}
              >
                {l.label}
              </Link>
            ))}
            <Link href="#contacto" className="btn btn-primary nav-cta">
              Cotizar proyecto
            </Link>
          </nav>

          <button
            className="menu-btn"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
