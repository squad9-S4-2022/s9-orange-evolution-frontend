/* eslint-disable @next/next/no-img-element */
import styles from './HomeCard.module.scss';
import { Button } from '../Basics/Button';

const HomeCard = ({ url, title, description, quantity, hours }) => {
  return (
    <div className={styles.container}>
      <figure>
        <img src={url} alt='' className={styles.cover} />
      </figure>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.information}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>

        <div className={styles.informationWrapper}>
          <div className={styles.informationShield}>
            <img src='/img/modules.svg' alt='' />
            <p className={styles.informationLabel}>{quantity} módulos</p>
          </div>
          <div className={styles.informationShield}>
            <img src='/img/timer.svg' alt='' />
            <p className={styles.informationLabel}>{hours} horas de conteúdo</p>
          </div>
        </div>
        <div className={styles.buttonProgress}>
          <Button label='Acessar' />
        </div>
      </div>
    </div>
  );
};

export { HomeCard };
