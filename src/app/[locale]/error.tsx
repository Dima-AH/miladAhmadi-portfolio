"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-32 bg-luxury-bg dark:bg-luxury-darkBg text-center">
      <h2 className="font-display text-4xl text-luxury-text dark:text-luxury-darkText mb-4">
        Something went wrong
      </h2>
      <p className="text-luxury-muted dark:text-luxury-darkMuted mb-8 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 rounded-full bg-brand text-ivory dark:bg-gold dark:text-brand text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  );
}
