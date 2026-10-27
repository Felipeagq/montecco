export const site = {
  name: "Montajes & Tecnologías Montec SAS",
  shortName: "Montec SAS",
  url: "https://www.montec.com.co",
  phone: "+57 311 4233325",
  phoneHref: "tel:+573114233325",
  whatsappHref: "https://wa.me/573114233325",
  email: "m.escobar@montec.com.co",
  address: ["Carrera 78C No. 79B - 97", "Barranquilla, Colombia"],
  hours: ["Lunes a domingo", "07:00 AM – 08:30 PM"],
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
];

export const services = [
  {
    slug: "mantenimiento",
    icon: "ic-mantenimiento",
    title: "Mantenimiento correctivo y preventivo",
    text: "Garantizamos la operatividad y eficiencia de tus equipos con servicios de mantenimiento correctivo y preventivo en obras civiles, mecánicas y eléctricas.",
  },
  {
    slug: "consultoria",
    icon: "ic-asesorias",
    title: "Asesorías y consultorías de ingeniería y arquitectura",
    text: "Ofrecemos soluciones expertas y personalizadas en asesoría y consultoría para impulsar y optimizar tu negocio. Con un enfoque innovador y estratégico, te acompañamos en cada paso hacia el éxito.",
  },
  {
    slug: "planeacion",
    icon: "ic-planeacion",
    title: "Planeación de proyectos",
    text: "Especialistas en convertir ideas en realidades mediante una planeación de proyectos meticulosa y estratégica. Aseguramos el éxito y la eficiencia desde el inicio hasta la entrega final.",
  },
  {
    slug: "suministros",
    icon: "ic-suministros",
    title: "Suministros generales",
    text: "Provisión de equipos necesarios para la construcción y operaciones relacionadas, disponibles tanto para compra como para alquiler.",
  },
  {
    slug: "montajes",
    icon: "ic-montajes",
    title: "Montajes electromecánicos",
    text: "Instalación y configuración de sistemas electromecánicos para diversos sectores industriales y comerciales.",
  },
  {
    slug: "obras-civiles",
    icon: "ic-obras",
    title: "Construcción y remodelación de obras civiles",
    text: "Servicios integrales en construcción, incluyendo edificaciones, estructuras y remodelaciones de obras civiles, eléctricas y sanitarias.",
  },
];

export const portfolio = {
  href: "/docs/portafolio-montec.pdf",
  fileName: "Portafolio-Montec.pdf",
  meta: "PDF · 11 páginas · 2,3 MB",
  areas: [
    "Electrónica",
    "Estructuras metálicas",
    "Instrumentación industrial",
    "Automatización de procesos",
    "Sistemas contra incendios",
    "Subestaciones eléctricas",
    "Redes de alta y baja tensión",
    "Electromecánica industrial",
    "Soldadura",
    "Sistemas fotovoltaicos",
    "Generadores eléctricos",
    "Obras civiles",
    "Outsourcing de personal",
  ],
};

export const stats = [
  { value: "10", label: "Años de funcionamiento" },
  { value: "24", label: "Horas de disponibilidad" },
  { value: "120+", label: "Proyectos ejecutados" },
];

export const projects = [
  { src: "/img/gal-1.jpg", alt: "Parque solar fotovoltaico", w: 1128, h: 553 },
  { src: "/img/gal-8.jpg", alt: "Subestación eléctrica", w: 1128, h: 549 },
  { src: "/img/gal-2.jpg", alt: "Equipos de bombeo", w: 1124, h: 553 },
  { src: "/img/gal-5.jpg", alt: "Equipo de trabajo en campo", w: 1124, h: 553 },
  { src: "/img/gal-3.jpg", alt: "Instalaciones eléctricas", w: 550, h: 553 },
  { src: "/img/gal-6.jpg", alt: "Trabajo en altura", w: 550, h: 553 },
  { src: "/img/gal-9.jpg", alt: "Supervisión de obra", w: 550, h: 549 },
  { src: "/img/gal-10.jpg", alt: "Coordinación en sitio", w: 550, h: 549 },
  { src: "/img/gal-11.jpg", alt: "Obra civil", w: 550, h: 549 },
];

type Img = { src: string; alt: string; w: number; h: number };

export type ProjectPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: Img;
  excerpt: string;
  body: string[];
  highlights?: string[];
  docs?: Img[];
};

export const projectPosts: ProjectPost[] = [
  {
    slug: "limpieza-de-aceites",
    title: "Limpieza de aceites",
    date: "2024-01-04",
    category: "Filtración industrial",
    cover: {
      src: "/img/proyectos/limpieza-aceites.jpg",
      alt: "Unidad de limpieza de aceites con manómetros de succión y presión",
      w: 768,
      h: 1238,
    },
    excerpt:
      "Depuración de aceites hidráulicos y lubricantes para proteger los equipos y extender la vida útil del aceite.",
    body: [
      "Realizamos la limpieza de aceites en equipos industriales mediante unidades de filtración que retiran partículas sólidas y agua del aceite en circulación.",
      "Mantener el aceite limpio reduce el desgaste de los componentes, disminuye las paradas no programadas y baja los costos de mantenimiento.",
    ],
  },
  {
    slug: "filtro-de-combustible",
    title: "Filtro de combustible",
    date: "2024-01-04",
    category: "Filtración de combustible",
    cover: {
      src: "/img/proyectos/filtro-combustible.jpg",
      alt: "Modelo G2F-DF250",
      w: 769,
      h: 772,
    },
    excerpt:
      "Sistema de filtración de diésel G2F-DF250: filtración ultrafina del combustible mientras el equipo está en operación.",
    body: [
      "Suministramos el filtro de diésel G2F-DF250, un sistema que limpia el combustible de forma continua mientras el equipo está en operación.",
      "Los motores diésel modernos trabajan con mayor presión de inyección y exigen un combustible más limpio que nunca. El sistema G2F ayuda a prevenir paradas no planeadas, protege partes costosas y conserva la eficiencia del combustible.",
    ],
    highlights: [
      "Elimina el 99,97 % del agua del combustible",
      "Filtraje absoluto de 3 micrones",
      "Flujo de 15 litros por minuto a 44 psi / 3 bar",
      "Reduce el consumo de combustible y prolonga la vida del motor",
      "Cumple los requisitos de motores de nivel 4",
      "Manija de acero inoxidable y válvula de seguridad preestablecida",
    ],
    docs: [
      {
        src: "/img/proyectos/g2f-df250-ficha.png",
        alt: "Sistema de filtración de combustible G2F-DF250",
        w: 784,
        h: 614,
      },
      {
        src: "/img/proyectos/g2f-como-funciona.png",
        alt: "Cómo funciona el sistema G2F y su elemento filtrante",
        w: 714,
        h: 818,
      },
    ],
  },
  {
    slug: "energias-renovables",
    title: "Energías renovables",
    date: "2023-12-29",
    category: "Energía",
    cover: {
      src: "/img/proyectos/energias-renovables.jpg",
      alt: "Paneles solares, aerogeneradores y torres de transmisión",
      w: 769,
      h: 361,
    },
    excerpt:
      "Soluciones de energía solar, eólica e infraestructura eléctrica para una producción de energía más limpia.",
    body: [
      "Participamos en el desarrollo de soluciones de energías renovables, como sistemas solares fotovoltaicos y eólicos, junto con la infraestructura eléctrica asociada.",
      "Nuestro objetivo es contribuir a una producción de energía más limpia y sostenible, con la calidad técnica que caracteriza cada uno de nuestros proyectos.",
    ],
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-CO", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${iso}T12:00:00Z`),
  );
}

export const clients = [
  { name: "Indepsas", src: "/img/clientes/indepsas.png", w: 420, h: 258 },
  { name: "Gecelca", src: "/img/clientes/gecelca.png", w: 392, h: 129 },
  { name: "Arenas Inmobiliaria", src: "/img/clientes/arenas.png", w: 418, h: 147 },
  { name: "Mundial", src: "/img/clientes/mundial.png", w: 420, h: 159 },
  { name: "Herrajes Andina S.A.S.", src: "/img/clientes/herrajes-andina.png", w: 367, h: 64 },
];
