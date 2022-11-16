import React from 'react';
import styles from './CustomModal.module.scss';
import Modal from 'react-modal';

import { Button } from '../Basics/Button';

import backArrow from '../../public/img/back-arrow.svg';

/*
Examples and documentation can be found here:
https://github.com/reactjs/react-modal
*/

Modal.setAppElement('#__next');

const fullStackGlossary = [
  {
    id: '01',
    title: 'Front-End',
    content:
      'Front-end é o desenvolvimento da parte visual de um sites e aplicações web, por meio do uso de HTML, CSS e JavaScript.',
  },
  {
    id: '02',
    title: 'HTML',
    content:
      'HTML (Hypertext Markup Language) é uma linguagem de marcação de hipertexto. Com ele é possível construir páginas web estáticas através de tags, como a de parágrafos, imagens, formulários e etc.',
  },
  {
    id: '03',
    title: 'CSS',
    content:
      'CSS (Cascading Style Sheets) é um mecanismo utilizado para dar estilo a elementos da página web. Através dele definimos como as tags HTML devem aparecer na tela.',
  },
  {
    id: '04',
    title: 'JavaScript',
    content:
      'JavaScript é a linguagem de programação do front-end, que permite implementar funcionalidades mais complexas em páginas web, como atualizações em tempo real, mapas interativos e muitas outras.',
  },
];

const GlossaryModal = ({
  isOpen,
  requestClose,
  title,
  description,
  cancelButtonFunction,
  confirmButtonFunction,
  width,
  style,
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={requestClose}
      className={styles.Modal}
      overlayClassName={{
        base: styles.Modal__overlay,
        afterOpen: styles.Modal__overlay_afterOpen,
        beforeClose: styles.Modal__overlay_beforeClose,
      }}
      closeTimeoutMS={500}>
      <div className={styles.content}>
        <h2 className={styles.content__title}>Glossário</h2>
        <img
          src='/img/close.svg'
          alt=''
          className={styles.content__close}
          onClick={requestClose}
        />
        <table className={styles.table}>
          <tbody>
            {fullStackGlossary.map(element => (
              <tr key={element.id} className={styles.content__row}>
                <td className={styles.content__row_title}>{element.title}</td>
                <td className={styles.content__row_content}>
                  {element.content}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.content__button}>
          <Button
            label='Voltar para a aula'
            width='26.75rem'
            onClick={requestClose}
            bgcolor="#FFA82E"
          />
        </div>
      </div>
    </Modal>
  );
};

export { GlossaryModal };
