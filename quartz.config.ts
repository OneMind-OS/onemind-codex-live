import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "One Mind Codex",
    pageTitleSuffix: " | OneMind",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "onemind-codex.pages.dev",
    ignorePatterns: ["private", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: { name: "Orbitron", weights: [700, 800, 900] },
        header: "Space Grotesk",
        body: { name: "Inter", weights: [400, 500, 600], includeItalic: true },
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f0f2f5",
          lightgray: "#d8dce3",
          gray: "#7a828e",
          darkgray: "#2d333b",
          dark: "#0a0e14",
          secondary: "#E63946",
          tertiary: "#00D9FF",
          highlight: "rgba(230, 57, 70, 0.08)",
          textHighlight: "#00D9FF33",
        },
        darkMode: {
          light: "#0a0e14",
          lightgray: "#151b24",
          gray: "#4a5568",
          darkgray: "#c8d0dc",
          dark: "#e8edf4",
          secondary: "#E63946",
          tertiary: "#00D9FF",
          highlight: "rgba(0, 217, 255, 0.08)",
          textHighlight: "#E6394633",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
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
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
