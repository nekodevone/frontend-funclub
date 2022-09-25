import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import { Guild } from '@/constants'
import { declension } from '@/utils/declension'

import styles from './discord-card.module.css'

type WidgetInfo = {
  id: string
  name: string
  instant_invite: string
  presence_count: number
}

export interface IDiscordCardProps {
  className?: string
  guild: Guild
}

export const DiscordCard: React.FC<IDiscordCardProps> = ({
  className,
  guild
}) => {
  const [widgetInfo, setWidgetInfo] = useState<WidgetInfo>()

  useEffect(() => {
    const abortController = new AbortController()

    // prettier-ignore
    fetch(`https://discord.com/api/guilds/${guild.id}/widget.json`, {
      signal: abortController.signal
    })
      .then((response) => response.json())
      .then((data) => setWidgetInfo(data))

    return () => {
      abortController.abort()
    }
  }, [guild?.id])

  const membersCount = Math.floor(guild.members / 1000)
  const presenceCount = (widgetInfo?.presence_count ?? 0).toLocaleString('en', {
    notation: 'compact'
  })

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.card__heading}>( ͡° ͜ʖ Вас пригласили на сервер</div>
      <img
        className={styles.card__image}
        src={guild.imageUrl}
        alt={guild.name}
      />
      <div className={styles.card__name}>{guild.name}</div>
      <div className={styles.card__members}>
        <span>
          {membersCount}K{' '}
          {declension(membersCount, 'участник', 'участника', 'участников')}
        </span>
        <span>&nbsp;&middot;&nbsp;{presenceCount} в сети</span>
      </div>
      <a className={styles.card__button} href={guild.inviteUrl} target="_blank">
        Вступить
      </a>
    </div>
  )
}
