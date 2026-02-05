'use client';

import React from 'react';
import { DateRangePicker } from '@/components/bookings/DateRangePicker';
import { SeatsRemainingGrid } from '@/components/bookings/SeatsRemainingGrid';
import { FlightDetailsSection } from '@/components/bookings/FlightDetailsSection';

export default function BookingsPage() {
  return (
    <div>
      <h1 className="text-display text-slate-900 mb-8">Bookings</h1>
      <DateRangePicker />
      <SeatsRemainingGrid />
      <FlightDetailsSection />
    </div>
  );
}
