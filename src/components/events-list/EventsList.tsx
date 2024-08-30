import React from 'react';
import { useGetAllEventsQuery } from '../../feature/api/eventSlice';
import { EventCard } from '../event-card/EventCard';
import { Loader } from '../loader/Loader';
import { Message } from '../message/Message';
import styles from './events-list.module.scss';

export const EventsList: React.FC = () => {
  const { data: events, isLoading } = useGetAllEventsQuery('events');

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles['event-list']}>
      {!events || events.length < 1 ? (
        <Message text="There are no events. Please create event" />
      ) : (
        events.map(([name, event]) => (
          <EventCard key={name} event={{ ...event, id: name }} />
        ))
      )}
    </div>
  );
};
