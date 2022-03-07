import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DEFT UI is under development.</title>
      </Head>

      <main>
        <Header title="Welcome to DEFT ui" />
        <p className="description">
          Deft ui is under development. We will bring exiting themes, templates, plugins, extensions soon.
    
        </p>
    <h4>Thank you</h4>
      </main>

    </div>
  )
}
