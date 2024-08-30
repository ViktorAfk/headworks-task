import { useNavigate } from 'react-router-dom';
import { Button } from '../../buttons/Button';
import { GoHomeLink } from '../../links/go-home/GoHomeLink';
import { Title } from '../../title/Title';
import { Container } from '../Container';
import styles from './not-found.module.scss';

export const NotFoundContainer: React.FC = () => {
  const navigate = useNavigate();

  const reset = () => {
    navigate(0);
  };

  return (
    <Container>
      <div className={styles['not-found']}>
        <Title text="Oops! Something went wrong, event not found!" />
        <div className={styles['not-found__items']}>
          <GoHomeLink />
          <Button medium action onClick={reset}>
            Reload page
          </Button>
        </div>
      </div>
    </Container>
  );
};
