'use client';

import React, { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function DateRangePicker() {
  const { state, setDateRange } = useBooking();
  const [startDate, setStartDate] = useState(state.dateRange.start);
  const [endDate, setEndDate] = useState(state.dateRange.end);

  const handleSearch = () => {
    setDateRange(startDate, endDate);
  };

  return (
    <div className="flex items-end gap-4 mb-6">
      <Input
        label="From"
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
      />
      <Input
        label="To"
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
