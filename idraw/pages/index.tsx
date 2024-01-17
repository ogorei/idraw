import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      Hello world
    </div>
  )
}
