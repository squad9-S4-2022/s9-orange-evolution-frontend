import { Button } from '../Basics/Button';
import { TypeShield } from '../TypeShield/TypeShield';
import styles from './Accordion.module.scss';

const Accordion = ({ content }) => {
  return (
    <div className={styles.wrapper}>
      {console.log(content.name)}
      {content.map((element, index) => (
        <details className={styles.details} key={content.name}>
          <summary className={styles.summary}>
            <p className={styles.title}>
              <span className={styles.title__index}>
                {`0${index + 1}`.slice(-2)}
              </span>
              <span className={styles.title__name}>{element.name}</span>
            </p>
            <img src='/img/more.svg' alt='' className={styles.summary__icon} />
          </summary>
          {element.courses?.map((course, index) => (
            <div className={styles.item} key={`${course.courseName}${index}`}>
              {console.log(course)}
              <div className={styles.groupWrapper}>
                <img src='/img/completed.svg' alt='' className={styles.icon} />
                <div className={styles.group1}>
                  <header className={styles.header}>
                    <p className={styles.header__title}>{course.courseName}</p>
                    <p className={styles.header__subtitle}>
                      - Tempo estimado: {course.estimatedTime}.
                    </p>
                  </header>
                  <div className={styles.topics}>
                    <p>Assunto abordado: {course.coveredTopics}</p>
                  </div>
                </div>
                <div className={styles.group2}>
                  <Button label='Glossário' />
                </div>
              </div>

              <div className={styles.type_button}>
                <TypeShield label={course.type} />
                <Button label='Iniciar' />
              </div>
            </div>
          ))}
        </details>
      ))}
      {/* <details className={styles.details}>
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
      </details> */}
    </div>
  );
};

export { Accordion };
