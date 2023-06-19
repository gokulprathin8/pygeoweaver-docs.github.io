// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pygeoweaver',
  tagline: 'Support for geoweaver on Python! 🐍',
  favicon: 'img/geoweaver-icon.png',

  // Set the production url of your site here
  url: 'https://pygeoweaver-docs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ESIP | George Mason University', // Usually your GitHub org/username.
  projectName: 'pygeoweaver-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pygeoweaver',
        logo: {
          alt: 'pygeoweaver-logo',
          src: 'img/geoweaver-icon.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          //   to: '/tutorial'
          // },
          {
            to: '/docs/getting-started',
            label: 'Docs',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'documentationSidebar'
          },
          // {
          //   to: '/release-log',
          //   label: 'Release Log',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/ESIPFed/pygeoweaver',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'ESIP',
                href: 'https://www.esipfed.org/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Release Log',
              //   to: '/release-log',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/ESIPFed/pygeoweaver',
              },
            ],
          },
        ],
        copyright: `This project is maintained by ESIPFed`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
