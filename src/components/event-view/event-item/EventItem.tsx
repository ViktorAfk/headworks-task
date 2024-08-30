import styles from './event-item.module.scss';

type Props = {
  eventKey: string;
  eventValue: string;
  classes?: React.CSSProperties;
};
export const EventItem: React.FC<Props> = ({
  eventKey,
  eventValue,
  classes,
}) => {
  return (
    <div style={classes} className={styles['event-item']}>
      <p className={styles['event-item__key']}>{eventKey}</p>
      <p className={styles['event-item__value']}>{eventValue}</p>
    </div>
  );
};
