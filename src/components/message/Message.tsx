import styles from './message.module.scss';

type Props = {
  text: string;
};
export const Message: React.FC<Props> = ({ text }) => {
  return <p className={styles.message}>{text}</p>;
};
