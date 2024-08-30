import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconButton } from '../components/buttons/icon-button/IconButton';
import { Container } from '../components/container/Container';
import { NotFoundContainer } from '../components/container/not-fonund-containerr/NotFoundContainer';
import EventView from '../components/event-view/EventView';
import { Form } from '../components/form/Form';
import { Loader } from '../components/loader/Loader';
import { Title } from '../components/title/Title';
import { useGetOneEventQuery } from '../feature/api/eventSlice';
import { selectEvent, setEvent } from '../feature/event/eventSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const EventPage: React.FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { eventId } = useParams() as { eventId: string };
  const { data: event, isLoading } = useGetOneEventQuery(eventId);
  const dispatch = useAppDispatch();
  const settledEvent = useAppSelector(selectEvent);

  const handleCanceled = () => {
    setIsEdit(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!event) {
    return <NotFoundContainer />;
  }

  const onEdit = () => {
    dispatch(setEvent({ ...event, id: eventId }));
    setIsEdit(true);
  };

  return (
    <Container classes={{ position: 'relative' }} maxWidth="tablet">
      <IconButton
        onClick={onEdit}
        classes={{ position: 'absolute', right: 5 }}
      />
      <Title tag="h2" text="View/Edit Event" />
      {isEdit ? (
        <Form onHandleCanceled={handleCanceled} currentEvent={settledEvent} />
      ) : (
        <EventView event={event} />
      )}
    </Container>
  );
};
