'use client';

import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

export function Select({ label, error, className = '', children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-caption font-medium text-slate-700">{label}</label>
      )}
      <select
        className={`
          px-3 py-2 border border-slate-300 rounded-lg
          transition-all duration-150 ease-out
          focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent
          focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:border-transparent
          bg-white
          ${error ? 'border-red-500 focus:ring-red-400' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </select>
      {error && <span className="text-caption text-red-500">{error}</span>}
    </div>
  );
}
