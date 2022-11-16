import styles from './CustomModal.module.scss';
import Modal from 'react-modal';
import { Button } from '../Basics/Button';

/*
Examples and documentation can be found here:
https://github.com/reactjs/react-modal
*/

Modal.setAppElement('#__next');

const EditContentModal = ({ isOpen, requestClose, width, style, ...props }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={requestClose}
      className={styles.modal__editContent}
      overlayClassName={{
        base: styles.modal__editContent__overlay,
        afterOpen: styles.modal__editContent__overlay_afterOpen,
        beforeClose: styles.modal__editContent__overlay_beforeClose,
      }}
      closeTimeoutMS={500}>
      <div className={styles.editContent}>
        <header className={styles.editContent__header}>
          <h2>Editar conteúdo</h2>
          <img src='/img/close.svg' alt='' onClick={requestClose} />
        </header>
        <div className={styles.editContent__content}>
          <div className={styles.editContent__input}>
            <label htmlFor='title' className={styles.editContent__input_label}>
              Título
            </label>
            <input
              type='text'
              id='title'
              placeholder='Adicione o título da aula aqui.'
              className={styles.editContent__input_proper}
            />
          </div>
          <div className={styles.editContent__input}>
            <label htmlFor='url' className={styles.editContent__input_label}>
              URL
            </label>
            <input
              type='text'
              id='url'
              placeholder='https://'
              className={styles.editContent__input_proper}
            />
          </div>
          <div className={styles.editContent__input}>
            <label htmlFor='topics' className={styles.editContent__input_label}>
              URL
            </label>
            <textarea
              id='topics'
              placeholder='Escreva o assunto abordado aqui'
              className={`${styles.editContent__input_proper} ${styles.editContent__input_textarea}`}
            />
          </div>
          <div className={styles.editContent__twoCols}>
            <div className={styles.editContent__input}>
              <label
                htmlFor='duration'
                className={styles.editContent__input_label}>
                Duração
              </label>
              <input
                type='number'
                id='duration'
                placeholder='Duração'
                className={styles.editContent__input_proper}
              />
            </div>

            <div className={styles.editContent__input}>
              <label
                htmlFor='originalContent'
                className={styles.editContent__input_label}>
                Conteúdo Orange
              </label>
              <input
                type='checkbox'
                name='originalContent'
                id='originalContent'
              />
            </div>
          </div>

          <p className={styles.editContent__type_label}>Tipo de conteúdo:</p>
          <div className={styles.editContent__type}>
            <div className={styles.editContent__type_element}>
              <input type='checkbox' name='article' id='article' />
              <label htmlFor='article'>Artigo</label>
            </div>
            <div className={styles.editContent__type_element}>
              <input type='checkbox' name='course' id='course' />
              <label htmlFor='course'>Curso</label>
            </div>
            <div className={styles.editContent__type_element}>
              <input type='checkbox' name='video' id='video' />
              <label htmlFor='video'>Vídeo</label>
            </div>
            <div className={styles.editContent__type_element}>
              <input type='checkbox' name='podcast' id='podcast' />
              <label htmlFor='podcast'>Podcast</label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.editContent__buttonControl}>
        <Button white label='Voltar para a trilha' width="9.25rem" onClick={requestClose} />
        <Button label='Salvar' bgcolor='#FFA629' width="9.25rem" onClick={requestClose} />
      </div>
    </Modal>
  );
};

export { EditContentModal };
