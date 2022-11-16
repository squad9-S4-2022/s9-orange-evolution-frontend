import styles from './TrackHeader.module.scss';
import { Button } from '../Basics/Button';
import Topics from '../Topics/Topics';
import { useState } from 'react';

const TrackHeader = ({
  backgroundImageUrl,
  headerTitle,
  descriptionCardImageUrl,
  description,
  completeness,
  topics,
  openAddNewContentModal,
}) => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className={styles.header__titleContainer}>
          <h1 className={styles.header__titleContainer_title}>{headerTitle}</h1>
          <hr className={styles.header__titleContainer_divider} />
        </div>
        <div className={styles.buttonControl}>
          <Button
            label={isAdmin ? 'Editar Trilha' : 'Continuar os estudos'}
            width='13.25rem'
            onClick={isAdmin ? openAddNewContentModal : null}
          />
        </div>
      </header>

      <div className={styles.description}>
        <div className={styles.description__card}>
          <img
            src={descriptionCardImageUrl}
            alt=''
            srcset=''
            className={styles.description__card_image}
          />
          <div className={styles.description__card_text}>
            <p className={styles.description__card_title}>{headerTitle}</p>
            <p className={styles.description__card_description}>
              Card description. Lorem ipsum dolor sit amet, consectetur elit
              adi, sed do eiusm tem incididunt ut. Lorem ips dolor sit. Card
              description. Lorem ipsum dolor sit amet, consectetur elit adi, sed
              do eiusm tem incididunt ut. Lorem ips dolor sit.
            </p>
            <div className={styles.progressBar}>
              <label htmlFor='progressBar'>{completeness}% completo</label>
              <progress id='progressBar' value={completeness} max='100' />
            </div>
          </div>
        </div>

        <Topics topics={topics} />
      </div>
    </>
  );
};

export { TrackHeader };
