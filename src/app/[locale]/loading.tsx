export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center bg-luxury-bg dark:bg-luxury-darkBg"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-brand/20 border-t-brand dark:border-gold/20 dark:border-t-gold animate-spin" />
        <p className="text-xs uppercase tracking-[0.3em] text-luxury-muted dark:text-luxury-darkMuted">
          Loading
        </p>
      </div>
    </div>
  );
}
