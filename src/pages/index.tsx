import clsx from 'clsx'
import Link from 'next/link'

import { DiscordCard } from '@/components/discord-card'

import { Layout } from '../components/layout'
import styles from './index.module.css'

type Guild = {
  id: string
  name: string
  members: number
  image: string
  invite: string
}

const guilds: Guild[] = [
  {
    id: '433622753350778890',
    name: 'FUNCLUB',
    members: 19000,
    image:
      'https://cdn.discordapp.com/icons/433622753350778890/46ddb31938500eb21a4eda06eb0959be.png?size=128',
    invite: 'https://discord.gg/MQ2q4nCMYT'
  },
  {
    id: '891624095630909493',
    name: 'FUNCLUB SS13',
    members: 1000,
    invite: 'https://discord.gg/2WAsvv5B5v',
    image:
      'https://cdn.discordapp.com/icons/891624095630909493/8253ddbb47384fd772e6d51a9144ac01.png?size=128'
  },
  {
    id: '886375983786127420',
    name: 'FUNCLUB SCP:SL',
    members: 6000,
    invite: 'https://discord.gg/9VWehX3V7N',
    image:
      'https://cdn.discordapp.com/icons/886375983786127420/18f30f55b4164f57c425034b6e55c067.png?size=128'
  },
  {
    id: '903733187862200330',
    name: 'FUNCLUB SCP:CBM',
    members: 2000,
    invite: 'https://discord.gg/ZFPq2PXKTA',
    image:
      'https://cdn.discordapp.com/icons/903733187862200330/58f0957fb8f18499eaeab79db150496d.png?size=128'
  }
]

const Index: React.FC = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <div className={styles.header__logo}>FUNCLUB</div>
          <ul className={styles['header__nav-links']}>
            <li>
              <Link href="/donate" passHref>
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
              <Link href="https://station13.ru/" passHref>
                <a className={styles.header__link}>🚀 SS13</a>
              </Link>
            </li>
            <li>
              <Link href="https://hardrp.wordpress.com/" passHref>
                <a className={styles.header__link}>🐸 Hard RP</a>
              </Link>
            </li>
            <li>
              <Link href="https://funclubfrp.wordpress.com/" passHref>
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
            и каждая со своей изюминкой:
          </p>
        </div>
        <div className={styles.hero__servers}>
          {guilds.map((guild) => (
            <DiscordCard
              key={guild.id}
              name={guild.name}
              members={guild.members}
              invite={guild.invite}
              image={guild.image}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Index
