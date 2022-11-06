import Head from 'next/head';
import { HomeCard } from '../components/HomeCard/HomeCard';

export default function Home() {
  return (
    <>
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
          percentage='25'
        />

        <HomeCard
          url='https://source.unsplash.com/random/'
          title='UX/UI Design'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
              Lorem ipsum dolor sit amet, consectetur.'
          quantity='15'
          percentage='50'
        />
        <HomeCard
          url='https://source.unsplash.com/random/'
          title='Quality Assurance (QA)'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
              Lorem ipsum dolor sit amet, consectetur.'
          quantity='12'
          percentage='75'
        />
      </div>
    </>
  );
}
