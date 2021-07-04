import Head from 'next/head'
// import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
