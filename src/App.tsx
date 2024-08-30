import styles from './App.module.scss';
import { Container } from './components/container/Container';
import { EventsList } from './components/events-list/EventsList';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <div className={styles[styles.app]}>
      <Header />
      <Container>
        <main className={styles.app__main}>
          <EventsList />
        </main>
      </Container>
    </div>
  );
};
