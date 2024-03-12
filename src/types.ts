export interface IDiscordGuild {
  id: string
  name: string
  members: number
  inviteUrl: string
  imageUrl: string
}

export interface IDiscordWidgetInfo {
  id: string
  name: string
  instant_invite: string
  presence_count: number
}
