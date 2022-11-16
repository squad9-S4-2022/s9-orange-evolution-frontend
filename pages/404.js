import { Button } from '../components/Basics/Button';
import Router from 'next/router';
import styles from '../styles/404.module.scss';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada - Orange Evolution</title>
      </Head>
      <section className={styles.wrapper}>
        <img src='/img/404bg.webp' alt='' className={styles.bg} />
        <img src='/img/error.svg' alt='' className={styles.image} />
        <p className={styles.text}>
          Oops! Ainda estamos espremendo esta laranja
        </p>
        <Button label='Voltar' onClick={() => Router.back()} />
      </section>
    </>
  );
};

export default Custom404;
