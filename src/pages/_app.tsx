import "@/styles/global.css"

import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component></Component>
}

export default App