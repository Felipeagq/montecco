import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const description =
  "Montajes electromecánicos, mantenimiento correctivo y preventivo, consultoría de ingeniería y construcción de obras civiles en Barranquilla, Colombia.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Ingeniería, montajes y construcción`,
    template: `%s | ${site.shortName}`,
  },
  description,
  icons: { icon: "/img/logo.png" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: site.name,
    title: site.name,
    description,
    images: ["/img/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <CtaBanner />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
