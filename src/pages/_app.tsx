import '@/styles/global.css'

import { AppProps } from 'next/app'
import Script from 'next/script'
import React, { Fragment } from 'react'

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />

      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-18SQLXWR6J" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-18SQLXWR6J');
        `}
      </Script>

      {/* Yandex Metrika */}
      <Script>
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(92731043, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
          });
      `}
      </Script>
    </Fragment>
  )
}

export default App
