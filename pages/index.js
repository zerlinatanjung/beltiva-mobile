import Head from 'next/head'
import Header from '../components/Header.tsx'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beltiva</title>
      </Head>

      <Header />
    </div>
  )
}
