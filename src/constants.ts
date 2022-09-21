import mainGuildImage from '@/assets/images/guilds/main.png'
import scpcbmGuildImage from '@/assets/images/guilds/scp-cbm.png'
import scpslGuildImage from '@/assets/images/guilds/scp-sl.png'
import ss13GuildImage from '@/assets/images/guilds/ss13.png'

export type Guild = {
  id: string
  name: string
  members: number
  inviteUrl: string
  imageUrl: string
}

/**
 * Ссылки для переадресации
 */
export const redirectLinks: Record<string, string> = {
  // Все донаты
  donate:
    'https://docs.google.com/document/d/1UXNTbQmOncB2Cd-X0ld6mjF4iSySNWAEmm9rtTFW5Qk/edit',
  // Донаты SCP:SL
  buy: 'https://docs.google.com/document/d/1kuLrLCTu4NLXZIFYY3OO-EEedQDKAROizsnjbLpDTos/edit',
  // Discord
  discord: 'https://discord.com/invite/MQ2q4nCMYT'
}

/**
 * Список наших серверов
 */
export const guilds: Guild[] = [
  {
    id: '433622753350778890',
    name: 'FUNCLUB',
    members: 19000,
    inviteUrl: 'https://discord.gg/MQ2q4nCMYT',
    imageUrl: mainGuildImage.src
  },
  {
    id: '891624095630909493',
    name: 'FUNCLUB SS13',
    members: 1000,
    inviteUrl: 'https://discord.gg/2WAsvv5B5v',
    imageUrl: ss13GuildImage.src
  },
  {
    id: '886375983786127420',
    name: 'FUNCLUB SCP:SL',
    members: 6000,
    inviteUrl: 'https://discord.gg/9VWehX3V7N',
    imageUrl: scpslGuildImage.src
  },
  {
    id: '903733187862200330',
    name: 'FUNCLUB SCP:CBM',
    members: 2000,
    inviteUrl: 'https://discord.gg/ZFPq2PXKTA',
    imageUrl: scpcbmGuildImage.src
  }
]
