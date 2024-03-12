import { DiscordCard } from '@/components/discord-card'
import { guilds } from '@/constants'

import { IDiscordWidgetInfo } from '@/types'
import classes from './page.module.css'

export default async function Page() {
  const widgetInfo = await Promise.all(
    guilds.map(async (guild) => {
      const response = await fetch(`https://discord.com/api/guilds/${guild.id}/widget.json`)
      const data = await response.json()

      return data as IDiscordWidgetInfo
    })
  )

  const widgetInfoByGuildId = widgetInfo.reduce((acc, widget) => {
    acc[widget.id] = widget
    return acc
  }, {} as Record<string, IDiscordWidgetInfo>)

  return (
    <main className={classes.hero}>
      <div className={classes.hero__heading}>
        <h1>Самое разнообразное сообщество во Вселенной</h1>
        <p>
          Ежедневные ивенты и десятки активных серверов по самым разным играм, и каждый со своей
          изюминкой:
        </p>
      </div>
      <div className={classes.hero__servers}>
        {guilds.map((guild, i) => (
          <DiscordCard key={guild.id} guild={guild} widget={widgetInfoByGuildId[guild.id]} />
        ))}
      </div>
    </main>
  )
}
