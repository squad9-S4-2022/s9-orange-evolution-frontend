import Head from 'next/head';
import { HomeCard } from '../components/HomeCard/HomeCard';
import Registration from '../components/Registration/Registration';
import styles from '../styles/Home.module.scss';
import Login from '../components/Login/Login';

export default function Home() {
  return (
    <>
      <Registration />
      <Head>
        <title>Home - Orange Evolution</title>
      </Head>
    </>
  );
}
