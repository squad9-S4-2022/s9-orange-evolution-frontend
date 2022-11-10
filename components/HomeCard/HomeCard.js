/* eslint-disable @next/next/no-img-element */
import styles from './HomeCard.module.scss';
import { Button } from '../Basics/Button';
import Router from 'next/router';

const HomeCard = ({ url, title, description, quantity, hours, path }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <figure className={styles.imageWrapper}>
          <img src={url} alt='' className={styles.cover} />
          <hr className={styles.separator} />
        </figure>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.information}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.informationWrapper}>
            <div className={styles.shieldWrapper}>
              <div className={styles.informationShield}>
                <img src='/img/modules.svg' alt='' />
                <p className={styles.informationLabel}>{quantity} módulos</p>
              </div>
            </div>
            <div className={styles.shieldWrapper}>
              <div className={styles.informationShield}>
                <img src='/img/timer.svg' alt='' />
                <p className={styles.informationLabel}>
                  {hours} horas de conteúdo
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttonProgress}>
            <Button
              label='Acessar'
              onClick={() => {
                Router.push(`/${path}`);
              }}
            />
          </div>
        </div>
        <div className={styles.buttonProgress}>
          <Button
            label='Acessar'
            onClick={() => {
              Router.push(`/${path}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { HomeCard };
