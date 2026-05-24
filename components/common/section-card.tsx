type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "bento";
  glow?: boolean;
  hover?: boolean;
};

export default function SectionCard({
  children,
  className = "",
  variant = "glass",
  glow,
  hover,
}: Props) {
  const base =
    variant === "glass"
      ? "glass-panel p-stack-lg rounded-xl"
      : "bg-surface-container-low rounded-xl border border-outline-variant p-stack-lg";

  const glowClass = glow ? "match-glow relative overflow-hidden" : "";
  const hoverClass = hover
    ? "hover:border-primary/50 hover:ring-1 hover:ring-primary/40 transition-all duration-300"
    : "";

  return (
    <section className={`${base} ${glowClass} ${hoverClass} ${className}`}>
      {children}
    </section>
  );
}
