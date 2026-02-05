'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
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
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Passenger>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    weight: 0,
    paymentMethod: 'Online',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Passenger, string>>>({});

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 200);
  };

  if (!isOpen && !isVisible) return null;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate brief network delay for better UX feedback
    await new Promise(resolve => setTimeout(resolve, 300));

    addBooking(flight.id, date, formData);
    setIsSubmitting(false);
    handleClose();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-slate-900/40 transition-opacity duration-200
          ${isClosing ? 'opacity-0' : 'opacity-100'}
        `}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`
          relative bg-white rounded-xl shadow-[var(--shadow-modal)] w-full max-w-md p-6
          transition-all duration-200
          ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-scale-in'}
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-heading text-slate-900">New Booking</h2>
          <button
            onClick={handleClose}
            className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-150"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6 p-4 bg-slate-50 rounded-xl">
          <p className="text-body text-slate-600">
            <span className="font-medium text-slate-900">{flight.name}</span>
          </p>
          <p className="text-caption text-slate-500 mt-1">
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
              placeholder="John"
            />
            <Input
              label="Last Name"
              value={formData.lastName}
              onChange={e => handleChange('lastName', e.target.value)}
              error={errors.lastName}
              placeholder="Doe"
            />
          </div>

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            error={errors.email}
            placeholder="john@example.com"
          />

          <Input
            label="Phone"
            type="tel"
            value={formData.phone}
            onChange={e => handleChange('phone', e.target.value)}
            error={errors.phone}
            placeholder="(555) 123-4567"
          />

          <Input
            label="Weight (lbs)"
            type="number"
            value={formData.weight || ''}
            onChange={e => handleChange('weight', parseInt(e.target.value) || 0)}
            error={errors.weight}
            placeholder="150"
          />

          <Select
            label="Payment Method"
            value={formData.paymentMethod}
            onChange={e => handleChange('paymentMethod', e.target.value)}
          >
            <option value="Online">Online</option>
            <option value="SECFS">SECFS</option>
            <option value="Medical">Medical</option>
          </Select>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1" loading={isSubmitting}>
              Add Booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
