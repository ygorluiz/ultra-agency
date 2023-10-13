import { Inter } from "next/font/google"
import localFont from "next/font/local"





export const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
export const MonaSans = localFont({
  src: [
    {
      path: "./MonaSans/Mona-Sans-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./MonaSans/Mona-Sans-UltraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./MonaSans/Mona-Sans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./MonaSans/Mona-Sans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./MonaSans/Mona-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MonaSans/Mona-Sans-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./MonaSans/Mona-Sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./MonaSans/Mona-Sans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./MonaSans/Mona-Sans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./MonaSans/Mona-Sans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "./MonaSans/Mona-Sans-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./MonaSans/Mona-Sans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./MonaSans/Mona-Sans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./MonaSans/Mona-Sans-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./MonaSans/Mona-Sans-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./MonaSans/Mona-Sans-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-mona-sans",
  display: "swap",
})
export const Apercu = localFont({
  src: [
    {
      path: "./Apercu/apercu-pro-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Apercu/apercu-pro-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Apercu/apercu-pro-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Apercu/apercu-pro-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Apercu/apercu-pro-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Apercu/apercu-pro-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Apercu/apercu-pro-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Apercu/apercu-pro-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
  display: "swap",
})
