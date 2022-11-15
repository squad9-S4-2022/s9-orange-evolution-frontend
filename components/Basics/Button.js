import styles from './Basics.module.scss';

const Button = ({ label, onClick, width, white, ...props }) => {
  return (
    <div>
      <input
        type='button'
        value={label}
        onClick={onClick}
        style={{ width: `${width}` }}
        {...props}
        className={
          white ? `${styles.button} ${styles.whiteBtn}` : styles.button
        }
      />
    </div>
  );
};

export { Button };
