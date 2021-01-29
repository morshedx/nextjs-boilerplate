// src/pages/_app.js
import { ThemeProvider } from 'theme-ui'
// import Router from 'next/router'
import theme from 'utils/theme'
// import NProgress from 'nprogress' //nprogress module
// import 'nprogress/nprogress.css' //styles of nprogress

//Binding events.
// Router.events.on('routeChangeStart', () => NProgress.start())
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
