import React from 'react';
import { useDeleteEventMutation } from '../../feature/api/eventSlice';
import { parseDate } from '../../helpers/parseDate';
import { Event } from '../../types/event';
import { Button } from '../buttons/Button';
import { ViewEventLink } from '../links/Links';
import styles from './EventCard.module.scss';
import { CardItem } from './card-item/CardItem';

type Props = {
  event: Pick<
    Event,
    'name' | 'totalAvailableTickets' | 'description' | 'id' | 'date'
  >;
};

export const EventCard: React.FC<Props> = ({ event }) => {
  const [deleteEvent, { isLoading }] = useDeleteEventMutation();
  const { name, totalAvailableTickets, description, id, date } = event;
  const eventDate = parseDate(date);

  return (
    <article className={styles['event-card']}>
      <div className={styles['event-card__container']}>
        <div className={styles['event-card__container']}>
          <h2 className={styles['event-card__header']}>{name}</h2>
          <p className={styles['event-card__description']}>{description}</p>
          <div>
            <CardItem cardKey="date" cardValue={eventDate} />
            <CardItem
              cardKey="Total available tickets"
              cardValue={totalAvailableTickets.toString()}
            />
          </div>
        </div>
        <div className={styles['event-card__buttons']}>
          <ViewEventLink disabled={isLoading} eventId={id} />
          <Button
            onClick={() => {
              deleteEvent(id);
            }}
            disabled={isLoading}
            cancel
            small
          >
            delete
          </Button>
        </div>
      </div>
    </article>
  );
};
