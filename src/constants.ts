import mainGuildImage from '@/assets/images/guilds/main.png'
import scpcbmGuildImage from '@/assets/images/guilds/scp-cbm.png'
import scpslGuildImage from '@/assets/images/guilds/scp-sl.png'
import ss13GuildImage from '@/assets/images/guilds/ss13.png'

type Guild = {
  id: string
  name: string
  members: number
  inviteUrl: string
  image: string
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
    image: mainGuildImage.src
  },
  {
    id: '891624095630909493',
    name: 'FUNCLUB SS13',
    members: 1000,
    inviteUrl: 'https://discord.gg/2WAsvv5B5v',
    image: ss13GuildImage.src
  },
  {
    id: '886375983786127420',
    name: 'FUNCLUB SCP:SL',
    members: 6000,
    inviteUrl: 'https://discord.gg/9VWehX3V7N',
    image: scpslGuildImage.src
  },
  {
    id: '903733187862200330',
    name: 'FUNCLUB SCP:CBM',
    members: 2000,
    inviteUrl: 'https://discord.gg/ZFPq2PXKTA',
    image: scpcbmGuildImage.src
  }
]
