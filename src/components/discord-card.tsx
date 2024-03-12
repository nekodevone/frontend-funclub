import clsx from 'clsx'

import { IDiscordGuild, IDiscordWidgetInfo } from '@/types'
import { declension } from '@/utils/declension'

import classes from './discord-card.module.css'

export interface IDiscordCardProps {
  className?: string
  guild: IDiscordGuild
  widget: IDiscordWidgetInfo
}

export async function DiscordCard({ className, guild, widget }: IDiscordCardProps) {
  const membersCount = Math.floor(guild.members / 1000)
  const presenceCount = (widget.presence_count ?? 0).toLocaleString('en', {
    notation: 'compact'
  })

  return (
    <div className={clsx(classes.card, className)}>
      <div className={classes.card__heading}>( ͡° ͜ʖ Вас пригласили на сервер</div>
      <img className={classes.card__image} src={guild.imageUrl} alt={guild.name} />
      <div className={classes.card__name}>{guild.name}</div>
      <div className={classes.card__members}>
        <span title={`Не меньше ${guild.members}`}>
          {membersCount}K {declension(membersCount, 'участник', 'участника', 'участников')}
        </span>
        <span title={String(widget.presence_count ?? 0)}>
          &nbsp;&middot;&nbsp;{presenceCount} в сети
        </span>
      </div>
      <a className={classes.card__button} href={guild.inviteUrl} target="_blank">
        Вступить
      </a>
    </div>
  )
}
