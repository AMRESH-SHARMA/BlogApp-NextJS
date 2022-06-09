import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log(styles)
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Build in next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to <a>Hunting Coder</a>
        </h1>

        <div className={styles.imagewrap}>
          <Image className={styles.myImg} src="/homeimg.avif" width={237} height={158} />
        </div>

        <p className={styles.description}>
          Hunting coder by a{' '}
          <code className={styles.code}>Hunting Coder</code>
        </p>
{/*------------------------------------------------------------blogs */}
        <div className="blogs">

          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to  learn</h3>
            <p>js is lang</p>
          </div>
          <div className="blogItem">
            <h3>How to  learn</h3>
            <p>js is lang</p>
          </div>
          <div className="blogItem">
            <h3>How to  learn</h3>
            <p>js is lang</p>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
