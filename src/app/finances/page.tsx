export default function FinancesPage() {
  return (
    <div>
      <h1 className="text-display text-slate-900 mb-8">Finances</h1>
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-body text-slate-500">Financial reports coming soon.</p>
        <p className="text-caption text-slate-400 mt-1">View revenue, expenses, and analytics.</p>
      </div>
    </div>
  );
}
