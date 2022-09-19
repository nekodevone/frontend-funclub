import '@/styles/global.css'

import { AppProps } from 'next/app'
import React from 'react'

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
