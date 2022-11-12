import styles from './TypeShield.module.scss';

const TypeShield = ({ label }) => {
  function classChange(label) {
    switch (label) {
      case 'artigo':
        return `${styles.shield} ${styles.artigo}`;
      case 'video':
        return `${styles.shield} ${styles.video}`;
      case 'podcast':
        return `${styles.shield} ${styles.podcast}`;
      case 'curso':
        return `${styles.shield} ${styles.curso}`;
    }
  }

  return (
    <div className={`${classChange(label)}`}>
      <p>{label.charAt(0).toUpperCase() + label.slice(1)}</p>
    </div>
  );
};

export { TypeShield };
