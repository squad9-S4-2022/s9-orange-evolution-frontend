import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar'
import { HomeCard } from '../components/HomeCard/HomeCard';

export default function Home() {
  return (
    <>
    <Navbar />
      <Head>
        <title>Home</title>
      </Head>
      <div style={{ display: 'flex', gap: '10px', padding: '15px' }}>
        <HomeCard
          url='https://source.unsplash.com/random/'
          title='Desenvolvimento FullStack'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
        Lorem ipsum dolor sit amet, consectetur.'
          quantity='22'
          hours='254'
        />

        <HomeCard
          url='https://source.unsplash.com/random/'
          title='UX/UI Design'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
              Lorem ipsum dolor sit amet, consectetur.'
          quantity='15'
          hours='195'
        />
        <HomeCard
          url='https://source.unsplash.com/random/'
          title='Quality Assurance (QA)'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
              Lorem ipsum dolor sit amet, consectetur.'
          quantity='12'
          hours='74'
        />
      </div>
      <Footer />
    </>
  );
}
