import { GoHomeLink } from '../../links/go-home/GoHomeLink';
import { Title } from '../../title/Title';
import { Container } from '../Container';
import styles from './error-container.module.scss';

export const ErrorContainer: React.FC = () => {
  return (
    <Container>
      <div className={styles['error-container']}>
        <div className={styles['error-container__items']}>
          <Title text="Oops! Something went wrong" />
          <GoHomeLink />
        </div>
      </div>
    </Container>
  );
};
