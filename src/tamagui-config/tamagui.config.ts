import { createTamagui } from "tamagui";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import interFont from "./fonts";
const appConfig = createTamagui({
  shouldAddPrefersColorThemes: true,
  fonts: { heading: interFont, body: interFont },
  shorthands,
  themes,
  tokens,
});

export type AppConfig = typeof appConfig;
export default appConfig;
