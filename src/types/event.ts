type AdditionalInformation = {
  organizer: string;
  place: string;
  seats: number;
  address: string;
};

export type TicketValues = {
  type: 'VIP' | 'normal' | 'cheap' | 'other';
  quantity: number;
  availableSeats: number;
  price: number;
};

export type Event = {
  id: string;
  name: string;
  date: string;
  description: string;
  category: NonNullable<
    'show' | 'concert' | 'exhibition' | 'performance' | 'other'
  >;
  additionalInformation: AdditionalInformation;
  totalAvailableTickets: number;
  tickets?: TicketValues[];
};

export type EventResponse = Record<string, Event>;
