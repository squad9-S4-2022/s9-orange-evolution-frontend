import Head from 'next/head';
import { HomeCard } from '../components/HomeCard/HomeCard';
import styles from '../styles/Home.module.scss';
import { useCoursesContext } from '../context/CourseAPI';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [tracksData, setTracksData] = useState();
  const { getTracksData } = useCoursesContext();

  useEffect(() => {
    setLoading(false);
    setLoading(true);
    getTracksData().then(res => setTracksData(res));
    setLoading(false);
  }, [getTracksData]);


  return (
    <>
      <Head>
        <title>Home - Orange Evolution</title>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>O que você gostaria de aprender hoje?</h1>
        <p className={styles.description}>
          Siga por uma (ou mais) trilhas do Orange Evolution e dê o primeiro
          passo em busca de uma nova carreira. Com o mercado aquecido para as
          áreas de tecnologia, aqui na Orange Evolution você terá acesso ao
          maior e melhor guia para iniciar seus estudos nas área de:
          Desenvolvimento Full Stack, UX/UI Design e Quality Assurance (QA).
        </p>
      </header>

      <section className={styles.cardWrapper}>
        {loading
          ? null
          : tracksData?.filter(track => track.id !== '168ad148-ba08-44fa-bcdd-652c6745bc72').map(track => (
              <HomeCard
                key={track.id}
                url={`/img/${track.name}.png`}
                title={track.name}
                description={track.description}
                quantity={track.contents.length}
                hours={Number(track.duration)}
                path={`track/${track.name}`}
              />
            ))}
      </section>
    </>
  );
}
