import backgroundImage from '@/assets/images/background.jpg'
import { DiscordCard } from '@/components/discord-card/discord-card'
import { Layout } from '@/components/layout'
import { guilds } from '@/constants'

import styles from './index.module.css'

const Index: React.FC = () => {
  return (
    <Layout withHeader>
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
      <style jsx global>{`
        body {
          background-image: url(${backgroundImage.src});
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
        }
      `}</style>
    </Layout>
  )
}

export default Index
