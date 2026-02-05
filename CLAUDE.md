# Amik Aviation - Airport Seat Reservation System

## Overview
A Next.js + React application for managing small airport seat reservations with flight management, customer tracking, and booking capabilities.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context + useReducer
- **Data**: In-memory mock data (resets on refresh)

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Redirects to /bookings
│   ├── bookings/page.tsx   # Main bookings page (fully implemented)
│   ├── flights/page.tsx    # Placeholder
│   ├── customers/page.tsx  # Placeholder
│   └── finances/page.tsx   # Placeholder
├── components/
│   ├── layout/             # Layout components (Sidebar, MainLayout)
│   ├── bookings/           # Booking-related components
│   └── ui/                 # Reusable UI components (Button, Input)
├── context/
│   └── BookingContext.tsx  # State management for bookings
├── data/
│   ├── flights.ts          # Mock flight data
│   └── bookings.ts         # Mock booking data
├── types/
│   └── index.ts            # TypeScript interfaces
└── utils/
    └── dateUtils.ts        # Date formatting helpers
```

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features
- **Seats Remaining Grid**: Visual matrix showing seat availability per flight/date
- **Date Range Picker**: Filter availability by date range
- **Flight Details**: Expandable sections showing passenger lists
- **Booking Modal**: Form to add new passenger bookings
- **Navigation**: Sidebar with links to all sections

## Design Notes
- Sidebar uses custom dark color (`#1e1e2d`)
- Accent color is amber/gold (`#f4c430`)
- Today's date and selected dates highlighted in amber
- Low availability (≤3 seats) shown in green
- Full flights shown in red
