export const SITE_NAME = "Smart Net Guide";
export const SITE_URL = "https://smartnetguides.com";
export const SITE_PHONE_DISPLAY = "(855) 950-633";
export const SITE_PHONE_TEL = "+1-855-950-633";

export function canonical(path: string) {
  return `${SITE_URL}${path}`;
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

/** Shared head() helper: unique title/description + canonical + og/twitter tags. */
export function pageHead({
  path,
  title,
  description,
  type = "website",
}: {
  path: string;
  title: string;
  description: string;
  type?: string;
}) {
  const url = canonical(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
