import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path = require("path");

const config: Config = {
  title: "Tech Blog",
  tagline: "we tech",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://papu-nika.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "papu-nika",
  projectName: "papu-nika.github.io",
  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,

        blog: {
          showReadingTime: false,
          blogSidebarTitle: "最近の投稿",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "Top",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: "Company",
          items: [
            {
              label: "コーポレートサイト",
              href: "https://we-capital.co.jp/",
            },
            {
              label: "採用",
              href: "https://herp.careers/v1/wecapital",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            // {
            //   label: "GitHub",
            //   href: "https://github.com/facebook/docusaurus",
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
