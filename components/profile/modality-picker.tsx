"use client";

import { useState } from "react";
import type { ModalityOption } from "@/constants/modality";

type Props = {
  options: ModalityOption[];
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
};

export default function ModalityPicker({ options, defaultSelected = [], onChange }: Readonly<Props>) {
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label];
      onChange?.(next);
      return next;
    });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {options.map((opt) => {
        const active = selected.includes(opt.label);
        return (
          <button
            key={opt.label}
            type="button"
            onClick={() => toggle(opt.label)}
            className={`flex flex-col items-center p-4 rounded-xl transition-all cursor-pointer justify-center border-2 ${
              active
                ? "border-primary bg-primary-container/10 text-on-surface"
                : "border-transparent bg-surface hover:bg-surface-container-high text-on-surface-variant"
            }`}
          >
            <span
              className={`material-symbols-outlined mb-2 ${active ? "text-primary" : ""}`}
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {opt.icon}
            </span>
            <span className="font-label-md text-label-md">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
