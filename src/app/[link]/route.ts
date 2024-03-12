import { redirectLinks } from '@/constants'
import { RedirectType, redirect } from 'next/navigation'

export async function GET(request: Request, { params }: { params: { link: string } }) {
  const redirectLink = redirectLinks[params.link]

  redirect(redirectLink ?? '/', RedirectType.replace)
}
