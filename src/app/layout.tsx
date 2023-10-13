import { Apercu, InterFont, MonaSans } from "@theme/fonts"

import "@theme/global.css"

import { ThemeProvider } from "@providers/ThemeProvider"

export const metadata = {
  title: "QuickStarter",
  description: "Boilerplate to panda-css",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${InterFont.variable} ${Apercu.variable} ${MonaSans.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
