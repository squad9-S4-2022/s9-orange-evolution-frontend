import { Button } from '../Basics/Button';
import { Checkbox } from '../Basics/Checkbox';
import { TypeShield } from '../TypeShield/TypeShield';
import styles from './Accordion.module.scss';

const Accordion = ({ content, openGlossaryModal, openRedirectionModal }) => {
  return (
    <div className={styles.wrapper}>
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
          <div className={styles.itemGroup}>
            {element.courses?.map((course, index) => (
              <div className={styles.item} key={`${course.courseName}${index}`}>
                <div className={styles.groupWrapperMobile}>
                  <div className={styles.headerMobile}>
                    <Checkbox courseName={course.courseName} />
                    <p className={styles.headerMobile__title}>
                      {course.courseName}
                    </p>
                    <p className={styles.headerMobile__subtitle}>
                      - Tempo estimado: {course.estimatedTime}.
                    </p>
                  </div>
                  <div className={styles.mobileTopics}>
                    <p>Assunto abordado: {course.coveredTopics}</p>
                  </div>

                  <div className={styles.mobileButtonControl}>
                    <Button label='Glossário' onClick={openGlossaryModal} />
                    <TypeShield label={course.type} />
                    <Button label='Iniciar' onClick={openRedirectionModal} />
                  </div>
                </div>

                <div className={styles.groupWrapper}>
                  <Checkbox courseName={course.courseName} />
                  <div className={styles.info}>
                    <div className={styles.header}>
                      <p className={styles.header__title}>
                        {course.courseName}
                      </p>
                      <p className={styles.header__subtitle}>
                        - Tempo estimado: {course.estimatedTime}.
                      </p>
                    </div>

                    <div className={styles.topics}>
                      <p>
                        <span>Assunto abordado:</span> {course.coveredTopics}
                      </p>
                    </div>
                  </div>
                  <Button label='Glossário' onClick={openGlossaryModal} />

                  <div className={styles.buttonControl}>
                    <TypeShield label={course.type} />
                    <Button label='Iniciar' onClick={openRedirectionModal} />
                  </div>
                </div>
              </div>

              // <div className={styles.item} key={`${course.courseName}${index}`}>
              //   <div className={styles.groupWrapper}>
              //     <div className={styles.checkboxDesktop}>
              //       <Checkbox courseName={course.courseName} />
              //     </div>
              //     <div className={styles.group1}>
              //       <div className={styles.checkboxMobile}>
              //         <Checkbox courseName={course.courseName} />
              //       </div>
              //       <div>
              //         <header className={styles.header}>
              //           <p className={styles.header__title}>
              //             {course.courseName}
              //           </p>
              //           <p className={styles.header__subtitle}>
              //             - Tempo estimado: {course.estimatedTime}.
              //           </p>
              //         </header>
              //         <div className={styles.topics}>
              //           <p>Assunto abordado: {course.coveredTopics}</p>
              //         </div>
              //       </div>
              //     </div>
              //     <div className={styles.group2}>
              //       <Button label='Glossário' onClick={openGlossaryModal} />
              //     </div>
              //   </div>

              //   <div className={styles.type_button}>
              //     <div className={styles.group2mobile}>
              //       <Button label='Glossário' onClick={openGlossaryModal} />
              //     </div>
              //     <TypeShield label={course.type} />
              //     <Button label='Iniciar' onClick={openRedirectionModal} />
              //   </div>
              // </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};

export { Accordion };
