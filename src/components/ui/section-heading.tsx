type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-brand-indigo">
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
    </div>
  );
}
