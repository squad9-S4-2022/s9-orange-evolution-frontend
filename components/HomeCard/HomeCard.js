/* eslint-disable @next/next/no-img-element */
import styles from './HomeCard.module.scss';
import { Button } from '../Basics/Button';

const HomeCard = ({ url, title, description, quantity, percentage }) => {
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
        <div className={styles.moduleButton}>
          <img src='/img/modules.svg' alt='' />
          <p className={styles.moduleLabel}>{quantity} módulos</p>
        </div>
        <div className={styles.buttonProgress}>
          <Button label='Acessar' />
          <label className={styles.percentageLabel}>
            {percentage}% completo{' '}
            <progress value={percentage} max='100'></progress>
          </label>
        </div>
      </div>
    </div>
  );
};

export { HomeCard };
