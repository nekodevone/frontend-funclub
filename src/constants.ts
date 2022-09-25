import mainGuildImage from '@/assets/images/guilds/main.png'
import scpcbmGuildImage from '@/assets/images/guilds/scp-cbm.png'
import scpslGuildImage from '@/assets/images/guilds/scp-sl.png'
import ss13GuildImage from '@/assets/images/guilds/ss13.png'
import { AriaAttributes } from 'react'

export type Guild = {
  id: string
  name: string
  members: number
  inviteUrl: string
  imageUrl: string
}
export type Rules = {
  id: number
  ListRuls: string
  server: any[]
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

// Эксопрт Правил
export const rules: Rules[] = [
  {id: 23, ListRuls: "SS13", server: [
    {id: 21321321321, ServerName: "SS13 rule", url: "https://wiki.station13.ru/Rules"},
  ]},
  {id: 2323, ListRuls: "SCP:SL", server: [
    {id: 4, ServerName: "CAOTIC / HELL", url: "https://docs.google.com/document/d/1M8WZAWPVqHUwp9jIKpvM8WTib-ZwJyTqFfuLmemSjKg/edit"},
    {id: 2, ServerName: "LIGTH RP",  url: "https://docs.google.com/document/d/1Z3-SddIOMDoLUNCVajfh6yViA6EGIEsdsjiZ8-wPKhQ/edit#"},
    {id: 1, ServerName: "MEDIUM RP", url: "https://docs.google.com/document/d/1vcDZfZIsIc4CPWwgoEzdiY29Jk1imJ58AOhYcfcZg2I/edit#heading=h.lrrrcktzkkc3"},
    {id: 3, ServerName: "HARD RP", url: "https://hardrp.wordpress.com/category/%d0%bf%d1%80%d0%b0%d0%b2%d0%b8%d0%bb%d0%b0-%d0%bf%d1%80%d0%be%d0%b5%d0%ba%d1%82%d0%b0/"},
    {id: 5, ServerName: "FULL RP", url: "https://funclubfrp.wordpress.com/not-rules/"},
  ]
  },
  {id: 262, ListRuls: "SCP:CB", server: [
    {id: 1324, ServerName: "MEDIUM RP", url: "https://docs.google.com/document/d/1QrIvg1v4_SqqGFc6exhqWpcYE5BUMa0fizo9vNbaCQk/edit?sharingaction=ownershiptransfer"},
    {id: 124, ServerName: "SOFT RP", url: "https://docs.google.com/document/d/1G7_OLkTAJXTa4kwLehPinwXkTYJtXgJTJzWoa7TlAA0/edit"},
  ]
}
]