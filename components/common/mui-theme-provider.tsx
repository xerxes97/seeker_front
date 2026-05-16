"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/mui-theme";

type Props = {
  children: React.ReactNode;
};

export default function MuiThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
