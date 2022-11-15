import styles from './Topics.module.scss';

export default function Topics({topics}) {
  return (
    <div className={styles.div_card}>
      <ul className={styles.list_card}>
        {topics.map(texto => (
          <li key={texto}>{texto}</li>
        ))}
      </ul>
    </div>
  );
}
