export default function CustomersPage() {
  return (
    <div>
      <h1 className="text-display text-slate-900 mb-8">Customers</h1>
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="text-body text-slate-500">Customer management coming soon.</p>
        <p className="text-caption text-slate-400 mt-1">Track passengers and their booking history.</p>
      </div>
    </div>
  );
}
