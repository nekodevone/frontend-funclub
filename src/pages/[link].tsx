import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Layout } from '@/components/layout'
import { redirectLinks } from '@/constants'

export const Link: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router?.query?.link) {
      return
    }

    router.push(redirectLinks[router.query.link as string] ?? '/')
  }, [router])

  return <Layout title="Переадресация">🐒</Layout>
}

export default Link
