"use client";

type Props = {
  items: string[];
  active?: string;
  onSelect?: (item: string) => void;
};

export default function FilterPills({ items, active, onSelect }: Props) {
  return (
    <div className="flex gap-stack-sm overflow-x-auto pb-2">
      {items.map((item) => (
        <span
          key={item}
          onClick={() => onSelect?.(item)}
          className={`px-4 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap cursor-pointer transition-colors ${
            item === active
              ? "bg-primary text-on-primary"
              : "bg-surface-container-high text-on-surface-variant border border-outline-variant hover:text-on-surface"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
