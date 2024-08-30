import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { eventApi } from '../feature/api/eventSlice';
import eventReducer from '../feature/event/eventSlice';

export const store = configureStore({
  reducer: {
    event: eventReducer,
    [eventApi.reducerPath]: eventApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
