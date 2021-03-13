import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ThemeToggle from '../components/ThemeToggle'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Recipes-By-Sam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    </Layout>
  )
}

