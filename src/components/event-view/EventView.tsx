import { parseDate } from '../../helpers/parseDate';
import { Event } from '../../types/event';
import { Message } from '../message/Message';
import { Title } from '../title/Title';
import { EventItem } from './event-item/EventItem';
import { Tickets } from './tickets/Tickets';

type Props = {
  event: Event;
};

const EventView: React.FC<Props> = ({ event }) => {
  const {
    name,
    description,
    date,
    totalAvailableTickets,
    category,
    additionalInformation,
    tickets,
  } = event;

  const { organizer, place, address, seats } = additionalInformation;
  const optimizedDate = parseDate(date);

  return (
    <article style={{ position: 'relative' }}>
      <EventItem eventKey="name" eventValue={name} />
      <EventItem eventKey="description" eventValue={description} />
      <EventItem eventKey="date" eventValue={optimizedDate} />
      <EventItem
        eventKey="available tickets"
        eventValue={totalAvailableTickets.toString()}
      />
      <EventItem eventKey="category" eventValue={category} />

      <Title tag="h3" text="Additional information" />

      <EventItem eventKey="organizer" eventValue={organizer} />
      <EventItem eventKey="place" eventValue={place} />
      <EventItem eventKey="address" eventValue={address} />
      <EventItem eventKey="seats" eventValue={seats.toString()} />

      {tickets && tickets.length > 0 ? (
        <Tickets tickets={tickets} />
      ) : (
        <Message
          text=" There are no tickets. To add one, please press on edit icon in the
          top-right corner"
        />
      )}
    </article>
  );
};

export default EventView;
