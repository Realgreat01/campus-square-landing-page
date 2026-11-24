import { SITE_URL } from "@/config";
import { metaDesc, metaTitle } from "@/consts";

export interface SchemaEntity {
  "@type": string;
  [key: string]: unknown;
}

export interface BaseSchemaParams {
  siteUrl?: string;
  metaTitle?: string;
  metaDesc?: string;
  organizationName?: string;
  organizationUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JsonLdDocument {
  "@context": "https://schema.org";
  "@graph": SchemaEntity[];
}

export function buildWebSiteEntity(
  params: BaseSchemaParams = {},
): SchemaEntity {
  const url = params.siteUrl ?? SITE_URL;
  const title = params.metaTitle ?? metaTitle;
  const desc = params.metaDesc ?? metaDesc;
  const organization = params.organizationName ?? "CampuzSquare";
  const organizationUrl = params.organizationUrl ?? url;

  return {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: title,
    description: desc,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: organization,
      url: organizationUrl,
    },
  };
}

export function buildSoftwareAppEntity(
  params: BaseSchemaParams = {},
): SchemaEntity {
  const url = params.siteUrl ?? SITE_URL;
  const desc = params.metaDesc ?? metaDesc;
  const organization = params.organizationName ?? "CampuzSquare";
  const organizationUrl = params.organizationUrl ?? url;

  return {
    "@type": "SoftwareApplication",
    "@id": `${url}/#software`,
    name: "CampuzSquare",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android, Web",
    description: desc,
    url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: organization,
      url: organizationUrl,
    },
  };
}

export function buildBaseSchemaGraph(
  params: BaseSchemaParams = {},
): SchemaEntity[] {
  return [buildWebSiteEntity(params), buildSoftwareAppEntity(params)];
}

export function buildFaqPageSchema(faqs: readonly FaqItem[]): SchemaEntity {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildJsonLdDocument(
  baseGraph: SchemaEntity[],
  customSchema?:
    | SchemaEntity
    | SchemaEntity[]
    | Record<string, unknown>
    | Array<Record<string, unknown>>,
): JsonLdDocument {
  let graph: SchemaEntity[] = [...baseGraph];

  if (customSchema) {
    if (Array.isArray(customSchema)) {
      graph = [...graph, ...(customSchema as SchemaEntity[])];
    } else {
      graph = [...graph, customSchema as SchemaEntity];
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/**
 * Safely serializes schema objects to a JSON string for embedding inside HTML script tags.
 * Replaces '<' with unicode '<' to prevent script tag injection and XSS.
 */
export function serializeJsonLd(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
