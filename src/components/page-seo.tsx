import { Helmet } from "react-helmet-async";

const SITE_URL = "https://marcyiu.dev";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "Marc Yiu";

interface PageSEOProps {
  title: string;
  description: string;
  /** Absolute canonical path, e.g. "/projects". Defaults to current pathname. */
  path?: string;
  /** Override OG image. Defaults to /og-image.jpg */
  ogImage?: string;
  /** Page type for Open Graph. Defaults to "website" */
  ogType?: "website" | "article";
}

export const PageSEO = ({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: PageSEOProps) => {
  const canonical = path
    ? `${SITE_URL}${path}`
    : `${SITE_URL}${window.location.pathname}`;

  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} · ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
