import clsx from 'clsx'
import Link from 'next/link'

import { DiscordCard } from '@/components/discord-card'
import { Layout } from '@/components/layout'
import { guilds } from '@/constants'

import styles from './index.module.css'

const Index: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <Link href="/">
            <a className={styles.header__logo}>FUNCLUB</a>
          </Link>
          <ul className={styles['header__nav-links']}>
            <li>
              <Link href="/donate">
                <a
                  className={clsx(
                    styles.header__link,
                    styles.header__link_shop
                  )}
                >
                  💰 Донаты
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://station13.ru/">
                <a className={styles.header__link}>🚀 SS13</a>
              </Link>
            </li>
            <li>
              <Link href="https://hardrp.wordpress.com/">
                <a className={styles.header__link}>🐸 Hard RP</a>
              </Link>
            </li>
            <li>
              <Link href="https://funclubfrp.wordpress.com/">
                <a className={styles.header__link}> 💀 Full RP</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.hero}>
        <div className={styles.hero__heading}>
          <h1>Самое разнообразное сообщество во Вселенной</h1>
          <p>
            Ежедневные ивенты и десятки активных серверов по самым разным играм,
            и каждый со своей изюминкой:
          </p>
        </div>
        <div className={styles.hero__servers}>
          {guilds.map((guild) => (
            <DiscordCard key={guild.id} guild={guild} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Index
