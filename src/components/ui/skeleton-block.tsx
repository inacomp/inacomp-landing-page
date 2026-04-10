type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-linear-to-br from-slate-200/80 via-slate-100 to-white ${className}`.trim()}
    />
  );
}
