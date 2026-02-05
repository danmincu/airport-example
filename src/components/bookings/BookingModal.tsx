'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useBooking } from '@/context/BookingContext';
import { Passenger } from '@/types';
import { Flight } from '@/types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  flight: Flight;
  date: string;
}

export function BookingModal({ isOpen, onClose, flight, date }: BookingModalProps) {
  const { addBooking } = useBooking();
  const [formData, setFormData] = useState<Passenger>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    weight: 0,
    paymentMethod: 'Online',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Passenger, string>>>({});

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Passenger, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (formData.weight <= 0) {
      newErrors.weight = 'Weight must be greater than 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    addBooking(flight.id, date, formData);
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      weight: 0,
      paymentMethod: 'Online',
    });
    setErrors({});
  };

  const handleChange = (field: keyof Passenger, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-slate-900">New Booking</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4 p-3 bg-slate-50 rounded">
          <p className="text-sm text-slate-600">
            <span className="font-medium">{flight.name}</span>
            <br />
            {date} at {flight.departureTime}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={formData.firstName}
              onChange={e => handleChange('firstName', e.target.value)}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              value={formData.lastName}
              onChange={e => handleChange('lastName', e.target.value)}
              error={errors.lastName}
            />
          </div>

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            error={errors.email}
          />

          <Input
            label="Phone"
            type="tel"
            value={formData.phone}
            onChange={e => handleChange('phone', e.target.value)}
            error={errors.phone}
          />

          <Input
            label="Weight (lbs)"
            type="number"
            value={formData.weight || ''}
            onChange={e => handleChange('weight', parseInt(e.target.value) || 0)}
            error={errors.weight}
          />

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">Payment Method</label>
            <select
              className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              value={formData.paymentMethod}
              onChange={e => handleChange('paymentMethod', e.target.value)}
            >
              <option value="Online">Online</option>
              <option value="SECFS">SECFS</option>
              <option value="Medical">Medical</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Add Booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
