import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";

export default function ServiceGrid({ withLinks }: { withLinks?: boolean }) {
  return (
    <div className="service-grid">
      {services.map((s) => (
        <article className="service-card" id={withLinks ? undefined : s.slug} key={s.slug}>
          <span className="service-icon">
            <Image src={`/img/${s.icon}.png`} alt="" width={176} height={176} />
          </span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          {withLinks && (
            <Link href={`/servicios#${s.slug}`} className="link-arrow">
              Más información <ArrowRight size={16} />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
