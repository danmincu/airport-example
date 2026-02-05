export default function FlightsPage() {
  return (
    <div>
      <h1 className="text-display text-slate-900 mb-8">Flights</h1>
      <div className="bg-white rounded-xl shadow-[var(--shadow-card)] p-12 text-center">
        <svg
          className="w-16 h-16 text-slate-300 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
            transform="rotate(45 12 12)"
          />
        </svg>
        <p className="text-body text-slate-500">Flight management coming soon.</p>
        <p className="text-caption text-slate-400 mt-1">Manage routes, schedules, and aircraft.</p>
      </div>
    </div>
  );
}
