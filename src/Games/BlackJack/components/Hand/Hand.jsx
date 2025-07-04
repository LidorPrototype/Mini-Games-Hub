import styles from './Hand.module.css';
import Card from '../Card/Card';

const Hand = ({ title, cards }) => {
  const getTitle = () => {
    if (cards.length > 0) {
      return (
        <h1 className={styles.title}>{title}</h1>
      );
    }
  }
  return (
    <div className={styles.handContainer}>
      {getTitle()}
      <div className={styles.cardContainer}>
        {cards.map((card, index) => {
          return (
            <Card key={index} value={card.value} suit={card.suit} hidden={card.hidden} />
          );
        })}
      </div>
    </div>
  );
}

export default Hand;