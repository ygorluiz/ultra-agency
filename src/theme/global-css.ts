import { defineGlobalStyles } from "@pandacss/dev"

export const globalCss = defineGlobalStyles({
  html: {
    lineHeight: 1.5,
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
    fontSize: "calc(100vw / 1728 * 10)",
  },
  body: {
    background: "white",
    color: "black",
    fontFamily: "apercu",
    minHeight: "100vh",
    width: "100%",
    letterSpacing: "-0.03em",

    fontSize: "clamp(16px, 1.6rem, 1.6rem)",
    _dark: {
      colorScheme: "dark",
    },
  },
  "*, *::before, *::after": {
    borderColor: "border.default",
    borderStyle: "solid",
    boxSizing: "border-box",
  },
  "*::placeholder": {
    opacity: 1,
    color: "fg.subtle",
  },
})
