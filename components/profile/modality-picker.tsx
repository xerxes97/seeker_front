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

  const toggle = (value: string) => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    setSelected(next);
    onChange?.(next);
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {options.map((opt) => {
        const active = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
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
