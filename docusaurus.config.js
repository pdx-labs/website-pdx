// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "PDX",
    tagline:
        "Prompt Engineering and Dev-Ops toolkit for applications powered by language models (LLMs)",
    favicon: "img/favicon.png",

    // Set the production url of your site here
    url: "https://pdxlabs.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "pdx-labs", // Usually your GitHub org/user name.
    projectName: "pdx", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    plugins: [
        // Plugin for TailwindCSS
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    sidebarCollapsible: false,
                    editUrl: "https://github.com/pdx-labs/website-pdx",
                },
                blog: {
                    blogTitle: "PDX Blog",
                    blogDescription:
                        "Blogs of PDX containing tutorials and insights.",
                    showReadingTime: true,
                    editUrl: "https://github.com/pdx-labs/website-pdx",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                gtag: {
                    trackingID: "G-KTJQ86VEGR",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "img/socialcard.png",
            navbar: {
                // title: "P D X",
                logo: {
                    alt: "PDX",
                    src: "img/logo-dark.svg",
                    srcDark: "img/logo-light.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "right",
                        label: "Documentation",
                    },
                    { to: "/blog", label: "Blog", position: "right" },
                    {
                        href: "https://github.com/pdx-labs/pdx",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                links: [
                    // {
                    //     title: "Docs",
                    //     items: [
                    //         {
                    //             label: "Tutorial",
                    //             to: "/docs/getting-started/introduction",
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: "Community",
                    //     items: [
                    //         {
                    //             label: "Discord",
                    //             href: "",
                    //         },
                    //         {
                    //             label: "Twitter",
                    //             href: "",
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: "More",
                    //     items: [
                    //         {
                    //             label: "Blog",
                    //             to: "/blog",
                    //         },
                    //         {
                    //             label: "GitHub",
                    //             href: "",
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} PDX.`,
            },
            prism: {
                theme: darkCodeTheme,
                darkTheme: lightCodeTheme,
            },
        }),
};

module.exports = config;
