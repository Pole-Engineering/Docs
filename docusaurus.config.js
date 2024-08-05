// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pole Engineering",
  tagline: "Fast Forward IRL",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://poleengineering.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "ignore",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pole-Engineering", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.

  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pole-engineering/Docs/tree/gh-pages/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pole-engineering/Docs/tree/gh-pages/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: "LJ3565G2XN",

        // Public API key: it is safe to commit it
        apiKey: "7bd17f6cdc86234ae432961cf8c61ef5",

        indexName: "Pole",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "PE Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Getting Started",
          },

          { to: "/configurator", label: "Configurator", position: "left" },
          { to: "/mods", label: "Mods", position: "left" },
          { to: "/gallery", label: "Gallery", position: "left" },
          { to: "/faq", label: "FAQ", position: "left" },
          { to: "/about", label: "About", position: "left" },

          {
            href: "https://pole.engineering",
            label: "Main Site",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting_started",
              },
              {
                label: "Assembly Guide",
                to: "/docs/category/assembly-guide",
              },
              {
                label: "FAQ",
                to: "/faq",
              },
              {
                label: "About US",
                to: "/about",
              },
            ],
          },
          {
            title: "Projects",
            items: [
              {
                label: "Crossant 235",
                to: "/docs/category/crossant-235",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/poleengineering",
              },
              {
                label: "Github",
                href: "https://github.com/Pole-Engineering",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/poleengineering",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/poleengineering",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pole Engineering`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = {
  plugins: [
    // ...
  
  ],
  // ...
  stylesheets: ["/css/custom.css"],
  scripts: ["/js/custom.js"],
};


module.exports = config;
