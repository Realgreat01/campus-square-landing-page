import type { MetadataRoute } from "next";
import { IS_PRODUCTION, SITE_URL } from "@/config";
import { SITE_ROUTES } from "@/consts";
import { buildSitemapEntries } from "@/lib/seo/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries({
    siteUrl: SITE_URL,
    isProduction: IS_PRODUCTION,
    routes: SITE_ROUTES,
  });
}
