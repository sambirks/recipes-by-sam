import Head from "next/head"
import Link from "next/link"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Recipes By Sam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}