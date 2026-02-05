'use client';

import React from 'react';
import { Booking } from '@/types';

interface PassengerTableProps {
  bookings: Booking[];
}

export function PassengerTable({ bookings }: PassengerTableProps) {
  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-500">
        <svg
          className="w-12 h-12 text-slate-300 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="text-body">No passengers booked for this flight.</p>
        <p className="text-caption text-slate-400 mt-1">Add a booking to get started.</p>
      </div>
    );
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-200">
          <th className="px-4 py-3 text-left text-caption font-medium text-slate-600">
            Passenger
          </th>
          <th className="px-4 py-3 text-left text-caption font-medium text-slate-600">
            Email
          </th>
          <th className="px-4 py-3 text-left text-caption font-medium text-slate-600">
            Phone
          </th>
          <th className="px-4 py-3 text-left text-caption font-medium text-slate-600">
            Weight
          </th>
          <th className="px-4 py-3 text-left text-caption font-medium text-slate-600">
            Payment
          </th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => (
          <tr
            key={booking.id}
            className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-150"
          >
            <td className="px-4 py-3 text-body text-slate-900">
              {booking.passenger.firstName} {booking.passenger.lastName}
            </td>
            <td className="px-4 py-3 text-body text-slate-600">
              {booking.passenger.email}
            </td>
            <td className="px-4 py-3 text-body text-slate-600">
              {booking.passenger.phone}
            </td>
            <td className="px-4 py-3 text-body text-slate-600">
              {booking.passenger.weight} lbs
            </td>
            <td className="px-4 py-3">
              <span
                className={`
                  inline-flex px-2 py-1 text-micro font-medium rounded-md
                  ${
                    booking.passenger.paymentMethod === 'Online'
                      ? 'bg-slate-100 text-slate-700'
                      : booking.passenger.paymentMethod === 'SECFS'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-green-100 text-green-700'
                  }
                `}
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
