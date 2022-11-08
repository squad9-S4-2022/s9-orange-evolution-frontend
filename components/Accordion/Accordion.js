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
          <div className={styles.groupWrapper}>
            <img src='/img/completed.svg' alt='' className={styles.icon} />
            <div className={styles.group1}>
              <header className={styles.header}>
                <p className={styles.header__title}>HTML Attribute</p>
                <p className={styles.header__subtitle}>
                  - Tempo estimado: 16 min.
                </p>
              </header>
              <div className={styles.topics}>
                <p>Assunto abordado: </p>
                <pre>
                  <code> &lt;input&gt;; &lt;form&gt;; &lt;body&gt;</code>
                </pre>
              </div>
            </div>
            <div className={styles.group2}>
              <Button label='Glossário' />
            </div>
          </div>

          <div className={styles.type_button}>
            <TypeShield label='artigo' />
            <Button label='Iniciar' />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.groupWrapper}>
            <img src='/img/todo.svg' alt='' className={styles.icon} />
            <div className={styles.group1}>
              <header className={styles.header}>
                <p className={styles.header__title}>HTML Attribute</p>
                <p className={styles.header__subtitle}>
                  - Tempo estimado: 16 min.
                </p>
              </header>
              <div className={styles.topics}>
                <p>Assunto abordado: </p>
                <pre>
                  <code> &lt;input&gt;; &lt;form&gt;; &lt;body&gt;</code>
                </pre>
              </div>
            </div>
            <div className={styles.group2}>
              <Button label='Glossário' />
            </div>
          </div>

          <div className={styles.type_button}>
            <TypeShield label='video' />
            <Button label='Iniciar' />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.groupWrapper}>
            <img src='/img/todo.svg' alt='' className={styles.icon} />
            <div className={styles.group1}>
              <header className={styles.header}>
                <p className={styles.header__title}>HTML Attribute</p>
                <p className={styles.header__subtitle}>
                  - Tempo estimado: 16 min.
                </p>
              </header>
              <div className={styles.topics}>
                <p>Assunto abordado: </p>
                <pre>
                  <code> &lt;input&gt;; &lt;form&gt;; &lt;body&gt;</code>
                </pre>
              </div>
            </div>
            <div className={styles.group2}>
              <Button label='Glossário' />
            </div>
          </div>

          <div className={styles.type_button}>
            <TypeShield label='podcast' />
            <Button label='Iniciar' />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.groupWrapper}>
            <img src='/img/todo.svg' alt='' className={styles.icon} />
            <div className={styles.group1}>
              <header className={styles.header}>
                <p className={styles.header__title}>HTML Attribute</p>
                <p className={styles.header__subtitle}>
                  - Tempo estimado: 16 min.
                </p>
              </header>
              <div className={styles.topics}>
                <p>Assunto abordado: </p>
                <pre>
                  <code> &lt;input&gt;; &lt;form&gt;; &lt;body&gt;</code>
                </pre>
              </div>
            </div>
            <div className={styles.group2}>
              <Button label='Glossário' />
            </div>
          </div>

          <div className={styles.type_button}>
            <TypeShield label='curso' />
            <Button label='Iniciar' />
          </div>
        </div>
      </details>
    </>
  );
};

export { Accordion };
