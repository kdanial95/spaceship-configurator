import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ConfiguratorContext from '../context/configuratorContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ConfiguratorContext>
          <Component {...pageProps} />
      </ConfiguratorContext>
  )
}

export default MyApp
