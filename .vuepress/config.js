var path = require("path");
let { getArticles } = require(path.resolve(".vuepress/utils"));

module.exports = {
  base: "/TIL/",
  title: "TIL - Mulgyeol",
  description: "Today I Learned",
  email: "Mulgyeol@gmail.com",
  head: [
    ["link", { rel: "icon", href: `/images/felog.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "apple-touch-icon", href: `/images/felog.png` }],
    ["link", { rel: "mask-icon", href: "/images/felog.png", color: "#3eaf7c" }],
    ["meta", { name: "msapplication-TileImage", content: "/images/felog.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  themeConfig: {
    repo: "Mulgyeol/TIL",
    repoLabel: "Contribute",
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: "Mulgyeol/TIL",
    // if your docs are not at the root of the repo:
    // if your docs are in a specific branch (defaults to 'master'):
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",
    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/mulgyeol/til" },
      { text: "Blog", link: "https://mulgyeolog.today/" },
    ],
    sidebar: [
      {
        title: "Algorithm",
        collapsable: true,
        children: getArticles("Algorithm"),
      },
      {
        title: "Front-End",
        collapsable: true,
        children: getArticles("Front-End"),
      },
      {
        title: "HTML",
        collapsable: true,
        children: getArticles("HTML"),
      },
      {
        title: "CSS",
        collapsable: true,
        children: getArticles("CSS"),
      },
      {
        title: "Javascript",
        collapsable: true,
        children: getArticles("Javascript"),
      },
      {
        title: "DevOps",
        collapsable: true,
        children: getArticles("DevOps"),
      },
    ],
    displayAllHeaders: false,
    lastUpdated: "Last Updated",
  },
  plugins: [
    ["@vuepress/back-to-top"],
    "@vuepress/active-header-links",
    ["@vuepress/medium-zoom"],
    ["@vuepress/pagination"],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ["@limdongjin/vuepress-plugin-sidebar-on-off"],
    [
      "@limdongjin/vuepress-plugin-simple-seo",
      {
        default_image: "/images/felog.png",
        root_url: "https://mulgyeol.github.io/TIL",
        default_site_name: "Mulgyeol TIL",
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  scripts: {
    "docs:dev": "vuepress dev",
    "docs:build": "vuepress build",
  },
};
