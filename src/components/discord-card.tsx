import clsx from 'clsx'
import React from 'react'

import { declension } from '../utils'
import styles from './discord-card.module.css'

export interface IDiscordCardProps {
  className?: string
  name: string
  members: number
  image: string
  invite: string
}

export const DiscordCard: React.FC<IDiscordCardProps> = ({
  className,
  name,
  members,
  image,
  invite
}) => {
  const membersCount = Math.floor(members / 1000)

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.card__heading}>( ͡° ͜ʖ Вас пригласили на сервер</div>
      <img className={styles.card__image} src={image} alt={name} />
      <div className={styles.card__name}>{name}</div>
      <div className={styles.card__members}>
        {membersCount}K{' '}
        {declension(membersCount, 'участник', 'участника', 'участников')}
      </div>
      <a className={styles.card__button} href={invite} target="_blank">
        Вступить
      </a>
    </div>
  )
}
