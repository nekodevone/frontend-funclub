import clsx from 'clsx'
import Head from 'next/head'
import { Fragment } from 'react'

import { Header } from './header'
import styles from './layout.module.css'

export interface ILayoutProps {
  className?: string
  headerClassname?: string
  title?: string
  type?: 'default' | 'fluid'
  withHeader?: boolean
  children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({
  className,
  title,
  type = 'default',
  withHeader,
  headerClassname,
  children
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title ? `${title} - FUNCLUB` : 'FUNCLUB'}</title>
      </Head>
      <div
        className={clsx(
          styles.container,
          type === 'fluid' && styles.container_fluid,
          className
        )}
      >
        {withHeader && <Header className={headerClassname} />}
        {children}
      </div>
    </Fragment>
  )
}
