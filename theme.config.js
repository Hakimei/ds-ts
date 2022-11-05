export default {
  github: 'https://github.com/Hakimei/ds-ts',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – EVOTS',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">EVOTS</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Design Documentation Site
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="EVOTS - Mindset, Foundation, Principles, Blog, Resource" />
      <meta name="og:description" content="EVOTS - Mindset, Foundation, Principles, Blog, Resource" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/Hakimei/ds-ts/main/public/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="EVOTS - Mindset, Foundation, Principles, Blog, Resource" />
      <meta name="og:image" content="https://raw.githubusercontent.com/Hakimei/ds-ts/main/public/og.png" />
      <meta name="apple-mobile-web-app-title" content="EVOTS - Mindset, Foundation, Principles, Blog, Resource" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  unstable_faviconGlyph: '',
}
