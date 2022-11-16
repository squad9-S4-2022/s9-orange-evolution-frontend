import { useState } from 'react';
import { Accordion } from '../../components/Accordion/Accordion';
import { TrackHeader } from '../../components/TrackHeader/TrackHeader';
import { GlossaryModal } from '../../components/CustomModal/GlossaryModal';
import { RedirectionModal } from '../../components/CustomModal/RedirectionModal';
import Head from 'next/head';
import { EditContentModal } from '../../components/CustomModal/EditContentModal';
import { EditGlossaryModal } from '../../components/CustomModal/EditGlossaryModal';

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
  const [openGlossaryModal, setOpenGlossaryModal] = useState(false);
  const [openRedirectionModal, setOpenRedirectionModal] = useState(false);
  const [openEditContentModal, setOpenEditContentModal] = useState(false);
  const [openEditGlossaryModal, setOpenEditGlossaryModal] = useState(false);

  function openGlossary() {
    setOpenGlossaryModal(true);
  }

  function closeGlossary() {
    setOpenGlossaryModal(false);
  }

  function openRedirection() {
    setOpenRedirectionModal(true);
  }

  function closeRedirection() {
    setOpenRedirectionModal(false);
  }

  function openEditContent() {
    setOpenEditContentModal(true);
  }

  function closeEditContent() {
    setOpenEditContentModal(false);
  }

  function openEditGlossary() {
    openEditGlossaryModal(true);
  }

  function closeEditGlossary() {
    openEditGlossaryModal(false);
  }

  return (
    <>
      <Head>
        <title>Trilha Full Stack - Orange Evolution</title>
      </Head>
      <TrackHeader
        backgroundImageUrl='/img/fullstack_track.png'
        headerTitle='Desenvolvimento Full Stack'
        descriptionCardImageUrl='/img/fullstack_description.png'
        completeness='25'
        topics={topics}
      />

      <Accordion
        content={content}
        openGlossaryModal={openGlossary}
        openRedirectionModal={openRedirection}
      />

      <GlossaryModal isOpen={openGlossaryModal} requestClose={closeGlossary} />

      <RedirectionModal
        isOpen={openRedirectionModal}
        requestClose={closeRedirection}
      />

      <EditContentModal
        isOpen={openEditContentModal}
        requestClose={closeEditContent}
      />

      <EditGlossaryModal
        isOpen={openEditGlossaryModal}
        requestClose={closeEditGlossary}
      />
    </>
  );
};

export default FullStack;
