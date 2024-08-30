import { createHashRouter } from 'react-router-dom';
import { App } from './App';
import { CreateEvent } from './pages/CreateEvent';
import { ErrorPage } from './pages/ErrorPage';
import { EventPage } from './pages/EventPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'events/:eventId',
    element: <EventPage />,
  },
  {
    path: 'create',
    element: <CreateEvent />,
  },
]);
