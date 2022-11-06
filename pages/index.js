import Head from 'next/head';
import { HomeCard } from '../components/HomeCard/HomeCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeCard
        url='https://source.unsplash.com/random/'
        title='Desenvolvimento FullStack'
        description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
        Lorem ipsum dolor sit amet, consectetur.'
        percentage='25'
      />
    </>
  );
}
