/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from './Basics.module.scss';

const Checkbox = ({ courseName }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label htmlFor='' className={styles.checkbox}>
        <input
          type='checkbox'
          checked={checked}
          value={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          style={{ display: 'none' }}
        />
        <img
          src={checked ? '/img/checkbox-checked.svg' : '/img/checkbox.svg'}
          alt=''
          srcset=''
          key={checked}
          onClick={() => {
            setChecked(!checked);
            console.log(`${courseName} checked!`);
          }}
        />
      </label>
    </>
  );
};

export { Checkbox };
