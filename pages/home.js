import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import { HomeCard } from '../components/HomeCard/HomeCard';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Orange Evolution</title>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>O que você gostaria de aprender hoje?</h1>
        <p className={styles.description}>
          Card description. Lorem ipsum dolor sit amet, consectetur elit adi,
          sed do eiusm tem incididunt ut. Lorem ips dolor sit. Lorem ipsum dolor
          sit amet, consectetur.
        </p>
      </header>

      <section className={styles.cardWrapper}>
        <HomeCard
          url='/img/fullstack.png'
          title='Desenvolvimento FullStack'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
        Lorem ipsum dolor sit amet, consectetur.'
          quantity='22'
          hours='254'
          path='track/fullstack'
        />

        <HomeCard
          url='/img/uiux.png'
          title='UX/UI Design'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
              Lorem ipsum dolor sit amet, consectetur.'
          quantity='15'
          hours='195'
          path='track/uxuidesign'
        />
        <HomeCard
          url='/img/qa.png'
          title='Quality Assurance (QA)'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
              Lorem ipsum dolor sit amet, consectetur.'
          quantity='12'
          hours='74'
          path='track/qualityassurance'
        />
      </section>
    </>
  );
}