type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return (
    <div
      className={`rounded-3xl border border-white/60 bg-linear-to-br from-brand-primary/14 via-white to-brand-accent/8 ${className}`.trim()}
    />
  );
}
