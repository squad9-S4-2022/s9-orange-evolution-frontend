import { Button } from '../Basics/Button';
import { TypeShield } from '../TypeShield/TypeShield';
import styles from './Accordion.module.scss';

const Accordion = () => {
  return (
    <>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <p>
            <span>04</span>
            <span>Primeiros códigos</span>
          </p>
          <img src='/img/more.svg' alt='' />
        </summary>
        <div className={styles.item}>
          <div>
            <header className={styles.header}>
              <p className={styles.header__title}>HTML Attribute</p>
              <p className={styles.header__subtitle}>- Tempo estimado: 16 min.</p>
            </header>
            <div>
              <p>Assunto abordado: </p>
              <pre>
                <code>&lt;input&gt;; &lt;form&gt;; &lt;body&gt;</code>
              </pre>
            </div>
          </div>

          <div>
            <Button label='Glossário' />
          </div>

          <div className={styles.type_button}>
            <TypeShield label='artigo' />
            <Button label='Iniciar' />
          </div>
        </div>
        <div className={styles.item}>lorem</div>
        <div className={styles.item}>lorem</div>
      </details>
    </>
  );
};

export { Accordion };
