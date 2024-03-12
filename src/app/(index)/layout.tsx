import Header from '@/containers/header'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import classes from './layout.module.css'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className={clsx(classes.layout, classes.layout__container)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
