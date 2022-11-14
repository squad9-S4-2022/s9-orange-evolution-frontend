import React from 'react';
import styles from './CustomModal.module.scss';
import Modal from 'react-modal';

import { Button } from '../Button/Button';

/*
Examples and documentation can be found here:
https://github.com/reactjs/react-modal
*/

Modal.setAppElement('#__next');

const CustomModal = ({
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
      closeTimeoutMS={500}
    >
      <h2 className={styles.Modal__title}>{title}</h2>
      <p className={styles.Modal__description}>{description}</p>
      <div className={styles.Modal__buttonControl}>
        <Button
          label="CANCELAR"
          type="textOnlyPrimary"
          width="7.13rem"
          onClick={cancelButtonFunction}
        ></Button>
        <Button
          label="CONFIRMAR"
          type="textOnlySecondary"
          width="7.13rem"
          onClick={confirmButtonFunction}
        ></Button>
      </div>
    </Modal>
  );
};

export default CustomModal;
