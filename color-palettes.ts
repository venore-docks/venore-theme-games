import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Variações de cor pro catálogo de paletas do admin (/admin/themes/customize): a cor da escola/
// competição troca o hue da primária e do acento, mantendo luminância/croma (e o contraste
// validado no theme.css).
export const GAMES_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.5 0.2 262)",
      primaryForeground: "oklch(0.99 0.005 262)",
      accent: "oklch(0.6 0.19 40)",
      accentForeground: "oklch(0.99 0.01 40)",
      ring: "oklch(0.5 0.2 262)",
    },
    dark: {
      primary: "oklch(0.74 0.15 255)",
      primaryForeground: "oklch(0.18 0.04 262)",
      accent: "oklch(0.74 0.16 50)",
      accentForeground: "oklch(0.18 0.04 50)",
      ring: "oklch(0.74 0.15 255)",
    },
  },
  THEME_HUE_PRESETS,
);
