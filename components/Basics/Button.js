import styles from './Basics.module.scss';

const Button = ({label, onClick, ...props}) => {
    return (
        <div>


            <input
                type='button'
                value={label}
                onClick={onClick}
                {...props}
                className={styles.button}
            />
        </div>
    );

};

export {Button};
