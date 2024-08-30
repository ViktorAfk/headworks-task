import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Event } from '../../types/event';

interface EventState {
  value: Event | null;
}

const initialState: EventState = {
  value: null,
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent: (state, action: PayloadAction<Event>) => {
      state.value = action.payload;
    },
  },
});

export const { setEvent } = eventSlice.actions;

export const selectEvent = (state: RootState) => state.event.value;
export default eventSlice.reducer;
