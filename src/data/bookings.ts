import { Booking } from '@/types';
import { formatDate } from '@/utils/dateUtils';

// Generate some sample bookings
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const dayAfter = new Date(today);
dayAfter.setDate(dayAfter.getDate() + 2);

export const initialBookings: Booking[] = [
  // Today's bookings for Northbound AM
  {
    id: 'b1',
    flightId: 'nb-am',
    date: formatDate(today),
    passenger: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@email.com',
      phone: '555-0101',
      weight: 180,
      paymentMethod: 'Online',
    },
  },
  {
    id: 'b2',
    flightId: 'nb-am',
    date: formatDate(today),
    passenger: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@email.com',
      phone: '555-0102',
      weight: 145,
      paymentMethod: 'SECFS',
    },
  },
  {
    id: 'b3',
    flightId: 'nb-am',
    date: formatDate(today),
    passenger: {
      firstName: 'Michael',
      lastName: 'Williams',
      email: 'mwilliams@email.com',
      phone: '555-0103',
      weight: 195,
      paymentMethod: 'Medical',
    },
  },
  // Today's bookings for Southbound AM
  {
    id: 'b4',
    flightId: 'sb-am',
    date: formatDate(today),
    passenger: {
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily.b@email.com',
      phone: '555-0104',
      weight: 130,
      paymentMethod: 'Online',
    },
  },
  {
    id: 'b5',
    flightId: 'sb-am',
    date: formatDate(today),
    passenger: {
      firstName: 'David',
      lastName: 'Davis',
      email: 'ddavis@email.com',
      phone: '555-0105',
      weight: 170,
      paymentMethod: 'Online',
    },
  },
  // Tomorrow's bookings
  {
    id: 'b6',
    flightId: 'nb-am',
    date: formatDate(tomorrow),
    passenger: {
      firstName: 'Jennifer',
      lastName: 'Miller',
      email: 'jmiller@email.com',
      phone: '555-0106',
      weight: 140,
      paymentMethod: 'SECFS',
    },
  },
  {
    id: 'b7',
    flightId: 'nb-pm',
    date: formatDate(tomorrow),
    passenger: {
      firstName: 'Robert',
      lastName: 'Wilson',
      email: 'rwilson@email.com',
      phone: '555-0107',
      weight: 200,
      paymentMethod: 'Online',
    },
  },
  {
    id: 'b8',
    flightId: 'sb-pm',
    date: formatDate(tomorrow),
    passenger: {
      firstName: 'Lisa',
      lastName: 'Anderson',
      email: 'landerson@email.com',
      phone: '555-0108',
      weight: 135,
      paymentMethod: 'Medical',
    },
  },
  // Day after tomorrow
  {
    id: 'b9',
    flightId: 'nb-am',
    date: formatDate(dayAfter),
    passenger: {
      firstName: 'James',
      lastName: 'Taylor',
      email: 'jtaylor@email.com',
      phone: '555-0109',
      weight: 185,
      paymentMethod: 'Online',
    },
  },
  {
    id: 'b10',
    flightId: 'nb-am',
    date: formatDate(dayAfter),
    passenger: {
      firstName: 'Patricia',
      lastName: 'Thomas',
      email: 'pthomas@email.com',
      phone: '555-0110',
      weight: 150,
      paymentMethod: 'SECFS',
    },
  },
  {
    id: 'b11',
    flightId: 'nb-am',
    date: formatDate(dayAfter),
    passenger: {
      firstName: 'Christopher',
      lastName: 'Jackson',
      email: 'cjackson@email.com',
      phone: '555-0111',
      weight: 190,
      paymentMethod: 'Online',
    },
  },
  {
    id: 'b12',
    flightId: 'nb-am',
    date: formatDate(dayAfter),
    passenger: {
      firstName: 'Nancy',
      lastName: 'White',
      email: 'nwhite@email.com',
      phone: '555-0112',
      weight: 125,
      paymentMethod: 'Online',
    },
  },
  {
    id: 'b13',
    flightId: 'nb-am',
    date: formatDate(dayAfter),
    passenger: {
      firstName: 'Daniel',
      lastName: 'Harris',
      email: 'dharris@email.com',
      phone: '555-0113',
      weight: 175,
      paymentMethod: 'Medical',
    },
  },
  {
    id: 'b14',
    flightId: 'nb-am',
    date: formatDate(dayAfter),
    passenger: {
      firstName: 'Karen',
      lastName: 'Martin',
      email: 'kmartin@email.com',
      phone: '555-0114',
      weight: 155,
      paymentMethod: 'Online',
    },
  },
];
