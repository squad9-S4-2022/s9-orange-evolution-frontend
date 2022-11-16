import styles from './Basics.module.scss';

const Button = ({ label, onClick, width, bgcolor, white, ...props }) => {
  return (
    <div>
      <input
        type='button'
        value={label}
        onClick={onClick}
        style={{ width: `${width}`, backgroundColor: `${bgcolor}` }}
        {...props}
        className={
          white ? `${styles.button} ${styles.whiteBtn}` : styles.button
        }
      />
    </div>
  );
};

export { Button };
