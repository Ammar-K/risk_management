import * as Plugin from "./quartz/plugins";
/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config = {
    configuration: {
        pageTitle: "مالا يسع المهندس جهله: إدارة المخاطر",
        enableSPA: true,
        enablePopovers: true,
        analytics: {
            provider: "plausible",
        },
        locale: "ar-SA",
        baseUrl: "quartz.jzhao.xyz",
        ignorePatterns: ["private", "templates", ".obsidian"],
        defaultDateType: "created",
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: true,
            typography: {
                header: "Almarai",
                body: "Rubik",
                code: "IBM Plex Mono",
            },
            colors: {
                lightMode: {
                    light: "#faf8f8",
                    lightgray: "#e5e5e5",
                    gray: "#b8b8b8",
                    darkgray: "#4e4e4e",
                    dark: "#2b2b2b",
                    secondary: "#284b63",
                    tertiary: "#84a59d",
                    highlight: "rgba(143, 159, 169, 0.15)",
                },
                darkMode: {
                    light: "#222831", // Gunmetal
                    lightgray: "#393E46", // Onyx
                    gray: "#00ADB5", // Verdigris
                    darkgray: "#EAEAEA", // Platinum
                    dark: "#FF2E63", // Folly
                    secondary: "#7b97aa",
                    tertiary: "#84a59d",
                    highlight: "rgba(143, 159, 169, 0.15)",
                },
            },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "filesystem"],
            }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
            Plugin.Description(),
            Plugin.Latex({ renderEngine: "katex" }),
        ],
        filters: [Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.NotFoundPage(),
        ],
    },
};
export default config;