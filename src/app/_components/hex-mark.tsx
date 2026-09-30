// A single honeycomb cell, after the hex cells in Malab's sign. Not their logo.
export function HexMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 1.5 21.1 6.75v10.5L12 22.5 2.9 17.25V6.75Z" fill="currentColor" />
    </svg>
  );
}
