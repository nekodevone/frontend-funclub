import clsx from 'clsx'
import Head from 'next/head'
import { Fragment } from 'react'

import styles from './layout.module.css'

export interface ILayoutProps {
  className?: string
  title?: string
  type?: 'default' | 'fluid'
  children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({
  className,
  title,
  type = 'default',
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
        {children}
      </div>
    </Fragment>
  )
}
