import type { ThemeManifest } from "@venore/theme-sdk";

// Tema esportivo do Venore Docks (contrato 8.0.0): só declara o que difere do kit — tokens
// (theme.css), layout e navegação. Regiões, templates e estados vêm do kit, que já passa no harness
// de acessibilidade/SSR do core.
//  - Celular primeiro: gaveta de navegação por padrão; a navegação inferior tipo app (bottom-bar)
//    fica como opção em /admin/themes/customize (o harness SSR do core valida o padrão drawer).
//  - Tipografia: Inter no texto, Space Grotesk nos títulos (números largos e legíveis).
export const gamesManifest: ThemeManifest = {
  key: "games",
  name: "Games",
  version: "0.1.0",
  themeContractVersion: "8.0.0",
  brandAesthetics: { mode: "png", size: 88, scrolledSize: 76, position: "left", color: "#1d4ed8" },
  colorModes: ["light", "dark"],
  layout: { preset: "topbar", presetChoices: ["topbar", "rail"], headerNavVisibleFrom: "lg" },
  responsive: { mobileNav: "drawer", mobileNavChoices: ["drawer", "bottom-bar"], contextualBarMobile: "top-collapsible" },
  fonts: { sans: "inter", display: "space-grotesk", choices: { display: ["space-grotesk", "manrope", "inter"] } },
  palette: { allowCustom: true },
  seo: { themeColor: "from-tokens", structuredData: { home: "Organization" } },
};
