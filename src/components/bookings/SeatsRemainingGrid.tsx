'use client';

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { flights } from '@/data/flights';
import { formatDisplayDate, isToday } from '@/utils/dateUtils';

export function SeatsRemainingGrid() {
  const { state, selectDate, getAvailability, getDatesInRange } = useBooking();
  const dates = getDatesInRange();

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Seats Remaining</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600 sticky left-0 bg-slate-50 min-w-[200px]">
                Flight
              </th>
              {dates.map(date => {
                const display = formatDisplayDate(date);
                const today = isToday(date);
                const isSelected = state.selectedDate === date;

                return (
                  <th
                    key={date}
                    className={`px-2 py-3 text-center min-w-[70px] cursor-pointer transition-colors ${
                      today || isSelected ? 'bg-amber-400' : 'hover:bg-slate-100'
                    }`}
                    onClick={() => selectDate(date)}
                  >
                    <div className="text-xs text-slate-500">{display.day}</div>
                    <div className={`text-sm font-medium ${today || isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                      {display.date}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight.id} className="border-t border-slate-100">
                <td className="px-4 py-3 text-sm text-slate-900 sticky left-0 bg-white">
                  <div className="font-medium">{flight.name}</div>
                  <div className="text-slate-500 text-xs">{flight.departureTime}</div>
                </td>
                {dates.map(date => {
                  const availability = getAvailability(flight.id, date);
                  const isSelected = state.selectedDate === date;
                  const isLow = availability <= 3 && availability > 0;
                  const isFull = availability === 0;

                  return (
                    <td
                      key={`${flight.id}-${date}`}
                      className={`px-2 py-3 text-center cursor-pointer transition-colors ${
                        isSelected ? 'bg-amber-100' : ''
                      }`}
                      onClick={() => selectDate(date)}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                          isFull
                            ? 'bg-red-100 text-red-700'
                            : isLow
                            ? 'bg-emerald-400 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {availability}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
