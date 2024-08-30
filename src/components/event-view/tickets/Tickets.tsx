import { TicketValues } from '../../../types/event';
import { Title } from '../../title/Title';
import { EventItem } from '../event-item/EventItem';

type Props = {
  tickets: TicketValues[];
};
export const Tickets: React.FC<Props> = ({ tickets }) => {
  const ticketsWithId = tickets.map((ticket) => ({
    ...ticket,
    id: crypto.randomUUID(),
  }));

  return (
    <div>
      <Title tag="h3" text="tickets" />
      {ticketsWithId.map(({ id, type, quantity, availableSeats, price }) => (
        <div key={id}>
          <EventItem eventKey="type" eventValue={type} />
          <EventItem eventKey="quantity" eventValue={quantity.toString()} />
          <EventItem
            eventKey="availableSeats"
            eventValue={availableSeats.toString()}
          />
          <EventItem eventKey="price" eventValue={price.toString()} />
        </div>
      ))}
    </div>
  );
};
