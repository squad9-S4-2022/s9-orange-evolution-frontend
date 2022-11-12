import Head from 'next/head';
import {Accordion} from '../components/Accordion/Accordion';
import {HomeCard} from '../components/HomeCard/HomeCard';
import {Checkbox} from "../components/Basics/Checkbox";

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

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>


            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px'}}>
                <Checkbox />
                {/* <HomeCard
          url='https://source.unsplash.com/random/'
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
          path='track/uiuxdesign'
        />
        <HomeCard
          url='/img/qa.png'
          title='Quality Assurance (QA)'
          description='Card description. Lorem ipsum dolor sit amet, consectetur elit adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit.
              Lorem ipsum dolor sit amet, consectetur.'
          quantity='12'
          hours='74'
        /> */}

                <Accordion content={content}/>
            </div>
        </>
    );

}
