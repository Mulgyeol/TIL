var path = require("path");
let { getArticles } = require(path.resolve(".vuepress/utils"));

module.exports = {
  title: "TIL - Mulgyeol",
  description: "Today I Learned",
  email: "Mulgyeol@gmail.com",
  base: "/til/",
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
        title: "Java",
        collapsable: true,
        children: getArticles("java"),
      },
      {
        title: "Algorithms",
        collapsable: true,
        children: getArticles("algorithms"),
      },
      {
        title: "GIT",
        collapsable: true,
        children: getArticles("git"),
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
        default_image: "/images/main-image-min.jpg",
        root_url: "https://limdongjin.github.io",
        default_site_name: "limdongjin TIL",
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
};
