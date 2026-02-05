import { Flight } from '@/types';

export const flights: Flight[] = [
  {
    id: 'nb-am',
    name: 'Northbound - AM C-GEVO',
    route: 'YAV-YBV-YAV',
    direction: 'northbound',
    departureTime: '9:00 AM',
    aircraftType: 'Cessna 185',
    totalSeats: 9,
  },
  {
    id: 'nb-pm',
    name: 'Northbound - PM C-GEVO',
    route: 'YAV-YBV-YAV',
    direction: 'northbound',
    departureTime: '2:00 PM',
    aircraftType: 'Cessna 185',
    totalSeats: 9,
  },
  {
    id: 'sb-am',
    name: 'Southbound - AM C-GEVO',
    route: 'YBV-YAV-YBV',
    direction: 'southbound',
    departureTime: '10:30 AM',
    aircraftType: 'Cessna 185',
    totalSeats: 9,
  },
  {
    id: 'sb-pm',
    name: 'Southbound - PM C-GEVO',
    route: 'YBV-YAV-YBV',
    direction: 'southbound',
    departureTime: '3:30 PM',
    aircraftType: 'Cessna 185',
    totalSeats: 9,
  },
];

export function getFlightById(id: string): Flight | undefined {
  return flights.find(f => f.id === id);
}
