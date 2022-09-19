import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Layout } from '../components/layout'

const links: Record<string, string> = {
  donate: 'https://docs.google.com/document/d/1UXNTbQmOncB2Cd-X0ld6mjF4iSySNWAEmm9rtTFW5Qk/edit',
  buy: 'https://docs.google.com/document/d/1kuLrLCTu4NLXZIFYY3OO-EEedQDKAROizsnjbLpDTos/edit',
  discord: 'https://discord.com/invite/MQ2q4nCMYT'
}

export const Link: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(links[router.query.link as string] ?? '/')
  }, [router?.query.link])

  return <Layout title="Переадресация">🐒</Layout>
}

export default Link
