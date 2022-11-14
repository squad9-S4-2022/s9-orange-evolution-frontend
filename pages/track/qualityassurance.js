import { Accordion } from '../../components/Accordion/Accordion';
import { GlossaryModal } from '../../components/CustomModal/GlossaryModal';
import { RedirectionModal } from '../../components/CustomModal/RedirectionModal';
import { TrackHeader } from '../../components/TrackHeader/TrackHeader';
import { useState } from 'react';
import Head from 'next/head';

const topics = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras efficitur purus ut elementum vulputate.',
  'Etiam sollicitudin dolor diam, at dignissim mi sollicitudin.',
  'Sed egestas condimentum efficitur.',
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

const QualityAssurance = () => {
  const [openGlossaryModal, setOpenGlossaryModal] = useState(false);
  const [openRedirectionModal, setOpenRedirectionModal] = useState(false);

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
  return (
    <>
      <Head>
        <title>Trilha Quality Assurance - Orange Evolution</title>
      </Head>
      <TrackHeader
        backgroundImageUrl='/img/fullstack_track.png'
        headerTitle='Quality Assurance'
        descriptionCardImageUrl='/img/fullstack_description.png'
        completeness='50'
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
    </>
  );
};

export default QualityAssurance;
