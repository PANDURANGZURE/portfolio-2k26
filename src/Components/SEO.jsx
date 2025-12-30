

export default function SEO() {
  const siteName = "Pandurang Zure – Portfolio 2026";
  const description =
    "Official portfolio of Pandurang Zure, a web developer specializing in React, Next.js, Tailwind CSS and modern web technologies. Portfolio 2026.";
  const keywords =
    "Pandurang Zure, Pandurang Zure Portfolio, Portfolio 2026, Web Developer India, React Developer, Frontend Developer, Pandurang Project, JavaScript Developer";
  const url = "https://pandurang-2k26.netlify.app/"; 
  const image = "https://pandurang-2k25.netlify.app/assets/pfp-_lj6DcG3.png"; 

  return (
    <Helmet>
      {/* Primary */}
      <title>{siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Pandurang Zure" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pandurang Zure",
          url: url,
          jobTitle: "Web Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          sameAs: [
            "https://github.com/PANDURANGZURE",
            "https://www.linkedin.com/in/pandurang-santosh-zure-au3112/",
          ],
        })}
      </script>
    </Helmet>
  );
}
