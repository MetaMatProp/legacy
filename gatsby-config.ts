import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Designed AI`,
    description: `Startup building the innovative computation technologies for Artificial Intelligence`,
  },
  graphqlTypegen: true,
  plugins: [],
};

export default config;
