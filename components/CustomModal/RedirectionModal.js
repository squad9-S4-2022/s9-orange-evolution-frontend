import styles from './CustomModal.module.scss';
import Modal from 'react-modal';
import { Button } from '../Basics/Button';

/*
Examples and documentation can be found here:
https://github.com/reactjs/react-modal
*/

Modal.setAppElement('#__next');

const RedirectionModal = ({ isOpen, requestClose, width, style, ...props }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={requestClose}
      className={styles.modal__redirect}
      overlayClassName={{
        base: styles.modal__redirect__overlay,
        afterOpen: styles.modal__redirect__overlay_afterOpen,
        beforeClose: styles.modal__redirect__overlay_beforeClose,
      }}
      closeTimeoutMS={500}>
      <div className={styles.modal__redirect_container}>
        <h2 className={styles.modal__redirect_title}>Conteúdo Parceiro</h2>
        <img
          src='/img/close.svg'
          alt=''
          srcset=''
          className={styles.modal__redirect_close}
          onClick={requestClose}
        />
        <div className={styles.modal__redirect_info}>
          <h3 className={styles.modal__redirect_subtitle}>
            Abrir conteúdo de um dos nossos parceiros?
          </h3>
          <p className={styles.modal__redirect_description}>
            Este conteúdo está hospedado no site de um dos nossos parceiros,
            para ter acesso, você precisará ser redirecionado.
          </p>
        </div>

        <div className={styles.modal__redirect_buttonControl}>
          <Button
            label='Voltar para a trilha'
            width='13.063rem'
            onClick={requestClose}
            white
          />
          <Button
            label='Acessar conteúdo'
            width='13.063rem'
            onClick={requestClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export { RedirectionModal };
