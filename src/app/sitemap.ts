import type { MetadataRoute } from "next";
import { projectPosts, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/servicios", "/proyectos", ...projectPosts.map((p) => `/proyectos/${p.slug}`)];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
