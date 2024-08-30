import React from 'react';
import { CreateEventLink } from '../links/Links';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles['links-container']}>
        <CreateEventLink />
      </div>
    </header>
  );
};
