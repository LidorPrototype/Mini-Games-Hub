import styles from './Status.module.css';

const Status = ({ message, balance }) => {
  return (
    <div className={styles.statusContainer}>
      <div className={styles.status}>
        <h1 className={styles.value}>{message}</h1>
      </div>
      <div className={styles.balance}>
        <h1 className={styles.value}>${balance}</h1>
      </div>
    </div>
  );
}

export default Status;