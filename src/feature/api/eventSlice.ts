import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Event, EventResponse } from '../../types/event';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://events-e6dd4-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  tagTypes: ['Events'],
  endpoints: (builder) => ({
    getAllEvents: builder.query<[string, Event][], string>({
      query: (url) => `${url}.json`,
      transformResponse: (data: EventResponse) => Object.entries(data),
      providesTags: ['Events'],
    }),
    getOneEvent: builder.query<Event, string>({
      query: (id) => `events/${id}.json`,
      providesTags: ['Events'],
    }),
    createEvent: builder.mutation<Event, Omit<Event, 'id'>>({
      query: (event) => ({ url: 'events.json', method: 'POST', body: event }),
      invalidatesTags: ['Events'],
    }),
    updateEvent: builder.mutation<Event, Partial<Event> & { id: string }>({
      query: ({ id, ...event }) => ({
        url: `events/${id}.json`,
        method: 'PATCH',
        body: event,
      }),
      invalidatesTags: ['Events'],
    }),
    deleteEvent: builder.mutation<
      { success: boolean; id: Pick<Event, 'id'> },
      string
    >({
      query: (id) => ({ url: `events/${id}.json`, method: 'DELETE' }),
      invalidatesTags: ['Events'],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetOneEventQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventApi;
