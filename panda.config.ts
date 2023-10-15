import { defineConfig } from "@pandacss/dev"

import { breakpoints } from "@theme/breakpoints"
import { conditions } from "@theme/conditions"
import { globalCss } from "@theme/global-css"
import { keyframes } from "@theme/keyframes"
import { semanticTokens } from "@theme/semantic-tokens"
import { textStyles } from "@theme/text-styles"
import { tokens } from "@theme/tokens"

export default defineConfig({
  preflight: true,
  presets: [],
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      breakpoints,
      keyframes,
      semanticTokens,
      textStyles,
      tokens,
    },
  },
  jsxFramework: "react",
  outdir: "styled-system",
  conditions,
  globalCss,
})
