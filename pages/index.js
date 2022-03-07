import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DEFT UI is under development.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to DEFT ui" />
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
