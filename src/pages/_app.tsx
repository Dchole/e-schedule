import "@fontsource/roboto"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"

import Head from "next/head"
import { AppProps } from "next/app"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import theme from "@/lib/theme"
import Layout from "@/components/Layout"

const cache = createCache({ key: "css", prepend: true })
cache.compat = true

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>E-Schedule</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
