"use client";

type Variant = "default" | "primary" | "secondary" | "error" | "success";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  icon?: string;
  removable?: boolean;
  onRemove?: () => void;
};

const variantStyles: Record<Variant, string> = {
  default:
    "bg-surface-container text-on-surface-variant border-outline-variant/30",
  primary:
    "bg-primary-container/20 text-primary border-primary/30",
  secondary:
    "bg-secondary-container/20 text-secondary border-secondary/30",
  error: "bg-surface-container-lowest text-on-surface-variant border-error/30",
  success: "bg-emerald-400/10 text-emerald-400 border-emerald-400/30",
};

export default function Tag({
  children,
  variant = "default",
  icon,
  removable,
  onRemove,
}: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-label-sm text-label-sm border ${variantStyles[variant]}`}
    >
      {icon && (
        <span
          className="material-symbols-outlined text-[14px]"
          style={
            variant === "primary" || variant === "error"
              ? { fontVariationSettings: "'FILL' 1" }
              : undefined
          }
        >
          {icon}
        </span>
      )}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-0.5 hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-[14px]">close</span>
        </button>
      )}
    </span>
  );
}
