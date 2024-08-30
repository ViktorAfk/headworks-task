import { Link } from 'react-router-dom';
import styles from './go-home.module.scss';

export const GoHomeLink: React.FC = () => {
  return (
    <Link className={styles['go-home']} to={'/'}>
      GO HOME
    </Link>
  );
};
