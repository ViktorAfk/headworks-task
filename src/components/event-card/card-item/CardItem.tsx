import styles from './card-item.module.scss';

type Props = {
  cardKey: string;
  cardValue: string;
};
export const CardItem: React.FC<Props> = ({ cardKey, cardValue }) => {
  return (
    <div className={styles['card-item']}>
      <p className={styles['card-item__key']}>{cardKey}</p>
      <p className={styles['card-item__value']}>{cardValue}</p>
    </div>
  );
};
