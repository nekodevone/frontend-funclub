import clsx from 'clsx'
import Link from 'next/link'

import { DiscordCard } from '@/components/discord-card/discord-card'
import { Layout } from '@/components/layout'
import { guilds} from '@/constants'

import styles from './index.module.css'
import { useState } from 'react'
import List from '@/components/list/list'
import BurgerMenu from '@/components/burgerMenu/burgerMenu'

const Index: React.FC = () => {
  const [burger, setBurger] = useState<boolean>(false)

  return (
    <Layout>
      {burger && <BurgerMenu burger={burger} setBurger={setBurger}/>}
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
            <List/>
          </ul>
          {!burger && <svg onClick={() => { setBurger(true) }}  className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="30px" height="25px" viewBox="0 0 30 25" fill="white"><defs></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><rect width="30" height="5" rx="2" /><rect y="10" width="30" height="5" rx="2" /><rect y="20" width="30" height="5" rx="2" /></g></g></svg> }
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
