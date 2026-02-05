'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Booking, Passenger, DailyFlightAvailability } from '@/types';
import { initialBookings } from '@/data/bookings';
import { flights } from '@/data/flights';
import { formatDate, getDateRange } from '@/utils/dateUtils';

interface BookingState {
  bookings: Booking[];
  selectedDate: string | null;
  selectedFlightId: string | null;
  dateRange: { start: string; end: string };
}

type BookingAction =
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'SELECT_DATE'; payload: string }
  | { type: 'SELECT_FLIGHT'; payload: string | null }
  | { type: 'SET_DATE_RANGE'; payload: { start: string; end: string } };

const today = new Date();
const initialDateRange = {
  start: formatDate(today),
  end: formatDate(new Date(today.getTime() + 13 * 24 * 60 * 60 * 1000)),
};

const initialState: BookingState = {
  bookings: initialBookings,
  selectedDate: formatDate(today),
  selectedFlightId: null,
  dateRange: initialDateRange,
};

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case 'SELECT_DATE':
      return {
        ...state,
        selectedDate: action.payload,
      };
    case 'SELECT_FLIGHT':
      return {
        ...state,
        selectedFlightId: action.payload,
      };
    case 'SET_DATE_RANGE':
      return {
        ...state,
        dateRange: action.payload,
      };
    default:
      return state;
  }
}

interface BookingContextType {
  state: BookingState;
  addBooking: (flightId: string, date: string, passenger: Passenger) => void;
  selectDate: (date: string) => void;
  selectFlight: (flightId: string | null) => void;
  setDateRange: (start: string, end: string) => void;
  getAvailability: (flightId: string, date: string) => number;
  getBookingsForFlight: (flightId: string, date: string) => Booking[];
  getDatesInRange: () => string[];
  getFlightAvailabilityGrid: () => DailyFlightAvailability[];
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const addBooking = (flightId: string, date: string, passenger: Passenger) => {
    const booking: Booking = {
      id: `b${Date.now()}`,
      flightId,
      date,
      passenger,
    };
    dispatch({ type: 'ADD_BOOKING', payload: booking });
  };

  const selectDate = (date: string) => {
    dispatch({ type: 'SELECT_DATE', payload: date });
  };

  const selectFlight = (flightId: string | null) => {
    dispatch({ type: 'SELECT_FLIGHT', payload: flightId });
  };

  const setDateRange = (start: string, end: string) => {
    dispatch({ type: 'SET_DATE_RANGE', payload: { start, end } });
  };

  const getBookingsForFlight = (flightId: string, date: string): Booking[] => {
    return state.bookings.filter(b => b.flightId === flightId && b.date === date);
  };

  const getAvailability = (flightId: string, date: string): number => {
    const flight = flights.find(f => f.id === flightId);
    if (!flight) return 0;
    const bookingsCount = getBookingsForFlight(flightId, date).length;
    return flight.totalSeats - bookingsCount;
  };

  const getDatesInRange = (): string[] => {
    const start = new Date(state.dateRange.start + 'T00:00:00');
    const end = new Date(state.dateRange.end + 'T00:00:00');
    const days = Math.ceil((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1;
    return getDateRange(start, days);
  };

  const getFlightAvailabilityGrid = (): DailyFlightAvailability[] => {
    const dates = getDatesInRange();
    const availability: DailyFlightAvailability[] = [];

    flights.forEach(flight => {
      dates.forEach(date => {
        availability.push({
          flightId: flight.id,
          date,
          seatsRemaining: getAvailability(flight.id, date),
        });
      });
    });

    return availability;
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        addBooking,
        selectDate,
        selectFlight,
        setDateRange,
        getAvailability,
        getBookingsForFlight,
        getDatesInRange,
        getFlightAvailabilityGrid,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
