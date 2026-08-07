export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--mint)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="var(--mint)" />
      <path
        d="M12 24a11.3 11.3 0 0 1 16 0M15.5 27.5a6.4 6.4 0 0 1 9 0"
        stroke="var(--mint-foreground)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="20" cy="31" r="2.1" fill="var(--mint-foreground)" />
      <circle cx="20" cy="12" r="3.4" fill="url(#logo-mark)" />
    </svg>
  );
}
