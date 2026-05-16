"use client";

import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonProps = MuiButtonProps & {
  loading?: boolean;
};

export default function Button({
  children,
  loading,
  disabled,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  return (
    <MuiButton
      {...props}
      disabled={disabled || loading}
      startIcon={
        loading ? (
          <span className="material-symbols-outlined text-[18px] animate-spin">
            progress_activity
          </span>
        ) : (
          startIcon
        )
      }
      endIcon={endIcon}
    >
      {children}
    </MuiButton>
  );
}
