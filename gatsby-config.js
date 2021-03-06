require('dotenv')
  .config();
const containers = require('remark-containers');
const config = require('./config');

let algoliaApiKey = process.env.ALGOLIA_DEV_API_KEY;
switch (process.env.DEPLOY_ENV) {
  case 'main':
    algoliaApiKey = process.env.ALGOLIA_MAIN_API_KEY;
    break;
  case 'prod':
    algoliaApiKey = process.env.ALGOLIA_PROD_API_KEY;
    break;
  default:
    // Assume dev environment.
}

const algolia = {
  // This plugin must be placed last in your list of plugins to ensure that it can query
  // all the GraphQL data.
  resolve: 'gatsby-plugin-algolia',
  options: {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application.
    // Tip: use Search API key with GATSBY_ prefix to access the service from within components.
    apiKey: algoliaApiKey,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
    // eslint-disable-next-line global-require
    queries: require('./src/utils/algolia-queries.ts').queries,
    settings: {
      // optional, any index settings
      searchableAttributes: [
        'value',
      ],
    },
    enablePartialUpdates: true,
    matchFields: ['slug', 'modified'],
  },
};

const plugins = [
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-material-ui',

  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-relative-images',
        },
        {
          resolve: require.resolve('./src/plugins/gatsby-plugin-code-tabs.ts'),
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1035,
            showCaptions: true,
            markdownCaptions: true,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
        },
      ],
      remarkPlugins: [containers],
      extensions: ['.mdx', '.md'],
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-plugin-emotion',
  'gatsby-plugin-force-trailing-slashes',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-react-helmet-canonical-urls',
    options: {
      siteUrl: 'https://docs.pixielabs.ai',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: 'gatsby-plugin-gtag',
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
  {
    resolve: 'gatsby-plugin-typescript',
    options: {
      isTSX: true, // defaults to false
      jsxPragma: 'jsx', // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },
  {
    resolve: 'gatsby-plugin-segment-js',
    options: {
      prodKey: 'hk77OdVPENwS28t1fTQasMP9PzNWhojt',
      devKey: '3njXD6Bb4FFyS2FQJ6i40TwW5bmXyjiy',
      trackPage: true,
    },
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'roboto:300,400,400i,700',
        'roboto+mono:300,400,400i,700',
      ],
      display: 'block',
    },
  },
  '@pauliescanlon/gatsby-mdx-embed',
  'gatsby-plugin-remove-serviceworker',
  {
    resolve: 'gatsby-redirect-from',
    options: {
      query: 'allMdx',
    },
  },
  'gatsby-plugin-meta-redirect',
];

if ('GATSBY_ALGOLIA_APP_ID' in process.env) {
  plugins.push(algolia);
}

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins,
};
