export interface Flight {
  id: string;
  name: string;           // "Northbound - AM C-GEVO"
  route: string;          // "YAV-YBV-YAV"
  direction: 'northbound' | 'southbound';
  departureTime: string;  // "9:00 AM"
  aircraftType: string;   // "Cessna 185"
  totalSeats: number;     // 9
}

export interface Passenger {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  weight: number;         // in lbs
  paymentMethod: 'Online' | 'SECFS' | 'Medical';
}

export interface Booking {
  id: string;
  flightId: string;
  date: string;           // ISO date YYYY-MM-DD
  passenger: Passenger;
}

export interface DailyFlightAvailability {
  flightId: string;
  date: string;
  seatsRemaining: number;
}
