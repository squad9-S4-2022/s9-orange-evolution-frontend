import styles from './Basics.module.scss';

const Button = ({label, onClick, width,...props}) => {
    return (
        <div>


            <input
                type='button'
                value={label}
                onClick={onClick}
                style={{width: `${width}`}}
                {...props}
                className={styles.button}
            />
        </div>
    );

};

export {Button};
