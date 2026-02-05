'use client';

import React from 'react';
import { Booking } from '@/types';

interface PassengerTableProps {
  bookings: Booking[];
}

export function PassengerTable({ bookings }: PassengerTableProps) {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500">
        No passengers booked for this flight.
      </div>
    );
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-200">
          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">
            Passenger
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">
            Email
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">
            Phone
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">
            Weight
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">
            Payment
          </th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => (
          <tr
            key={booking.id}
            className="border-b border-slate-100 hover:bg-slate-50"
          >
            <td className="px-4 py-3 text-sm text-slate-900">
              {booking.passenger.firstName} {booking.passenger.lastName}
            </td>
            <td className="px-4 py-3 text-sm text-slate-600">
              {booking.passenger.email}
            </td>
            <td className="px-4 py-3 text-sm text-slate-600">
              {booking.passenger.phone}
            </td>
            <td className="px-4 py-3 text-sm text-slate-600">
              {booking.passenger.weight} lbs
            </td>
            <td className="px-4 py-3 text-sm">
              <span
                className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                  booking.passenger.paymentMethod === 'Online'
                    ? 'bg-blue-100 text-blue-700'
                    : booking.passenger.paymentMethod === 'SECFS'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {booking.passenger.paymentMethod}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
