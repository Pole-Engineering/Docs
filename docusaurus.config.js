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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pole-Engineering", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.

  onBrokenLinks: "throw",
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/pole-engineering/Docs/tree/gh-pages/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/pole-engineering/Docs/tree/gh-pages/",
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
          { to: "/bom", label: "BOM", position: "left" },
          { to: "/configurator", label: "Configurator", position: "left" },
          { to: "/mods", label: "Mods", position: "left" },
          { to: "/gallery", label: "Gallery", position: "left" },
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
                label: "FAQ",
                to: "/docs/FAQ",
              },
              {
                label: "Assembly Guide",
                to: "/docs/category/assembly-guide",
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

module.exports = config;
