import styles from '../../styles/Tracks.module.scss';
import { Accordion } from '../../components/Accordion/Accordion';
import { Button } from '../../components/Basics/Button';
import Topics from '../../components/Topics/Topics';

const topics = [
  'Fundamentos de HTML, CSS e Javascript',
  'Introdução a Bancos de Dados e Linguagem SQL',
  'Git e Github para iniciantes',
  'Qual é a diferença entre HTTP e HTTPS?',
];

const content = [
  {
    name: 'O que é HTML?',
    courses: [
      {
        courseName: 'HTML attribute',
        estimatedTime: '14 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: true,
        type: 'artigo',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '15 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'video',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'podcast',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'curso',
      },
    ],
  },
  {
    name: 'Aprendendo na prática',
    courses: [
      {
        courseName: 'HTML attribute',
        estimatedTime: '14 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: true,
        type: 'artigo',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '15 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'video',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'podcast',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'curso',
      },
    ],
  },
  {
    name: 'Conceito XYZ',
    courses: [
      {
        courseName: 'HTML attribute',
        estimatedTime: '14 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: true,
        type: 'artigo',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '15 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'video',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'podcast',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'curso',
      },
    ],
  },
  {
    name: 'Primeiros Códigos',
    courses: [
      {
        courseName: 'HTML attribute',
        estimatedTime: '14 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: true,
        type: 'artigo',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '15 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'video',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'podcast',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'curso',
      },
    ],
  },
  {
    name: 'Introdução à CSS',
    courses: [
      {
        courseName: 'HTML attribute',
        estimatedTime: '14 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: true,
        type: 'artigo',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '15 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'video',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'podcast',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'curso',
      },
    ],
  },
  {
    name: 'Introdução à JavaScript',
    courses: [
      {
        courseName: 'HTML attribute',
        estimatedTime: '14 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: true,
        type: 'artigo',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '15 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'video',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'podcast',
      },
      {
        courseName: 'HTML attribute',
        estimatedTime: '16 minutos',
        coveredTopics: '<input>; <form>; <body>',
        isOriginal: false,
        type: 'curso',
      },
    ],
  },
];

const FullStack = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__titleContainer}>
          <h1 className={styles.header__titleContainer_title}>
            Desenvolvimento Full Stack
          </h1>
          <hr className={styles.header__titleContainer_divider} />
        </div>
        <Button label='Continuar os estudos' />
      </header>

      <div className={styles.description}>
        <div className={styles.description__card}>
          <img
            src='/img/fullstack_description.png'
            alt=''
            srcset=''
            className={styles.description__card_image}
          />
          <div className={styles.description__card_text}>
            <p className={styles.description__card_title}>
              Desenvolvimento Full Stack
            </p>
            <p className={styles.description__card_description}>
              Card description. Lorem ipsum dolor sit amet, consectetur elit
              adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit. Card
              description. Lorem ipsum dolor sit amet, consectetur elit adi, sed
              do eiusm tem incididunt ut. Lorem ips dolor sit.
            </p>
            <div className={styles.progressBar}>
              <label htmlFor='progressBar'>25% completo</label>
              <progress id='progressBar' value='25' max='100' />
            </div>
          </div>
        </div>

        <Topics topics={topics} />
      </div>

      <Accordion content={content} />
    </>
  );
};

export default FullStack;
