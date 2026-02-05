'use client';

import React, { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { flights } from '@/data/flights';
import { PassengerTable } from './PassengerTable';
import { BookingModal } from './BookingModal';
import { Button } from '@/components/ui/Button';
import { formatDisplayDate } from '@/utils/dateUtils';

export function FlightDetailsSection() {
  const { state, getBookingsForFlight, getAvailability } = useBooking();
  const [expandedFlights, setExpandedFlights] = useState<Set<string>>(new Set(flights.map(f => f.id)));
  const [modalFlight, setModalFlight] = useState<string | null>(null);

  if (!state.selectedDate) {
    return (
      <div className="bg-white rounded-xl shadow-[var(--shadow-card)] p-12 text-center">
        <svg
          className="w-16 h-16 text-slate-300 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-body text-slate-500">Select a date to view flight details.</p>
        <p className="text-caption text-slate-400 mt-1">Click on any date in the grid above.</p>
      </div>
    );
  }

  const toggleFlight = (flightId: string) => {
    setExpandedFlights(prev => {
      const newSet = new Set(prev);
      if (newSet.has(flightId)) {
        newSet.delete(flightId);
      } else {
        newSet.add(flightId);
      }
      return newSet;
    });
  };

  const displayDate = formatDisplayDate(state.selectedDate);
  const selectedFlight = modalFlight ? flights.find(f => f.id === modalFlight) : null;

  return (
    <div className="space-y-4">
      <h2 className="text-heading text-slate-900">
        Flight Details for {displayDate.day}, {displayDate.date}
      </h2>

      {flights.map(flight => {
        const bookings = getBookingsForFlight(flight.id, state.selectedDate!);
        const availability = getAvailability(flight.id, state.selectedDate!);
        const isExpanded = expandedFlights.has(flight.id);

        return (
          <div key={flight.id} className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
            <div
              className="flex items-center justify-between px-4 py-4 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors duration-150"
              onClick={() => toggleFlight(flight.id)}
            >
              <div className="flex items-center gap-4">
                <button className="text-slate-400 hover:text-slate-600 transition-colors duration-150">
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div>
                  <h3 className="font-medium text-slate-900">{flight.name}</h3>
                  <p className="text-caption text-slate-500">
                    {flight.departureTime} • {flight.route} • {flight.aircraftType}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-body text-slate-600">
                    <span className="font-medium">{bookings.length}</span> / {flight.totalSeats} booked
                  </p>
                  <p className={`text-caption ${availability <= 3 && availability > 0 ? 'text-amber-600 font-medium' : availability === 0 ? 'text-slate-400' : 'text-slate-500'}`}>
                    {availability} seats remaining
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={e => {
                    e.stopPropagation();
                    setModalFlight(flight.id);
                  }}
                  disabled={availability === 0}
                >
                  New Booking
                </Button>
              </div>
            </div>

            {isExpanded && (
              <div className="border-t border-slate-200 animate-fade-in">
                <PassengerTable bookings={bookings} />
              </div>
            )}
          </div>
        );
      })}

      {selectedFlight && (
        <BookingModal
          isOpen={!!modalFlight}
          onClose={() => setModalFlight(null)}
          flight={selectedFlight}
          date={state.selectedDate}
        />
      )}
    </div>
  );
}
