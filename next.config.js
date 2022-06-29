module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "downloads.ctfassets.net"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  plugins: [`gatsby-transformer-inline-svg`],
};
