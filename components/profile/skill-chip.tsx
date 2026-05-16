"use client";

type Level = "expert" | "intermediate" | "basic";

type Props = {
  name: string;
  level?: Level;
  removable?: boolean;
  onRemove?: () => void;
};

const levelColors: Record<Level, string> = {
  expert: "bg-emerald-400",
  intermediate: "bg-primary",
  basic: "bg-outline",
};

export default function SkillChip({
  name,
  level = "intermediate",
  removable,
  onRemove,
}: Props) {
  return (
    <div className="group px-4 py-2 bg-surface-container-highest border border-outline-variant rounded-full flex items-center gap-2 hover:border-primary transition-colors cursor-default">
      <span className="font-label-sm text-label-sm text-on-surface">
        {name}
      </span>
      <span className={`h-2 w-2 rounded-full ${levelColors[level]}`} />
      {removable && (
        <button
          onClick={onRemove}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span className="material-symbols-outlined text-[14px]">close</span>
        </button>
      )}
    </div>
  );
}
