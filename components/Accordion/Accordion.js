import { useEffect, useState } from 'react';
import { useCoursesContext } from '../../context/CourseAPI';
import { Button } from '../Basics/Button';
import { Checkbox } from '../Basics/Checkbox';
import { TypeShield } from '../TypeShield/TypeShield';
import styles from './Accordion.module.scss';

const Accordion = ({
  content,
  deleteContent,
  openGlossaryModal,
  openRedirectionModal,
  openEditGlossaryModal,
  openEditModal
}) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [tracksData, setTracksData] = useState();
  const { getTracksData } = useCoursesContext();

  useEffect(() => {
    setLoading(false);
    setLoading(true);
    getTracksData().then(res => setTracksData(res));
    setLoading(false);
  }, [getTracksData]);


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
                  {isAdmin ? (
                    <img
                      src='/img/trashbin.svg'
                      alt='Lixeira'
                      className={styles.trashbin}
                      onClick={deleteContent}
                    />
                  ) : (
                    <Checkbox courseName={course.courseName} />
                  )}

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
                  <div className={styles.glossaryControl}>
                    <Button label='Glossário' onClick={openGlossaryModal} />
                    {isAdmin && (
                      <img
                        src='/img/edit.svg'
                        alt='Editar'
                        onClick={openEditGlossaryModal}
                        className={styles.editButton}
                      />
                    )}
                  </div>

                  <div className={styles.buttonControl}>
                    <TypeShield label={course.type} />
                    <Button label={isAdmin ? 'Editar' :'Iniciar'} onClick={isAdmin? openEditModal :openRedirectionModal} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};

export { Accordion };
