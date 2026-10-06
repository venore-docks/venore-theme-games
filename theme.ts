import { defineTheme } from "@venore/theme-sdk/define";
import { gamesManifest } from "./manifest";
import { GAMES_COLOR_PALETTES } from "./color-palettes";

// Contrato 8: layout/regiões do kit + tokens próprios (theme.css). O registro do host importa o
// default deste arquivo.
export default defineTheme({
  manifest: gamesManifest,
  layout: "topbar",
  colorPalettes: GAMES_COLOR_PALETTES,
});
