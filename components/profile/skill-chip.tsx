"use client";

import IconButton from "@mui/material/IconButton";

type Props = {
  name: string;
  removable?: boolean;
  onRemove?: () => void;
};

export default function SkillChip({
  name,
  removable,
  onRemove,
}: Readonly<Props>) {
  return (
    <div className="group px-4 py-2 bg-surface-container-highest border border-outline-variant rounded-full flex items-center gap-2 hover:border-primary transition-colors cursor-default">
      <span className="font-label-sm text-label-sm text-on-surface">
        {name}
      </span>
      {removable && (
        <IconButton
          onClick={onRemove}
          size="small"
          sx={{
            opacity: 0,
            p: "2px",
            minWidth: "auto",
            color: "inherit",
            transition: "opacity 0.2s",
            ".group:hover &": { opacity: 1 },
          }}
        >
          <span className="material-symbols-outlined text-[14px]">close</span>
        </IconButton>
      )}
    </div>
  );
}
