"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#adc6ff",
      light: "#d8e2ff",
      dark: "#4d8eff",
      contrastText: "#002e6a",
    },
    secondary: {
      main: "#c0c1ff",
      light: "#e1e0ff",
      dark: "#3131c0",
      contrastText: "#1000a9",
    },
    error: {
      main: "#ffb4ab",
      light: "#ffdad6",
      dark: "#93000a",
      contrastText: "#690005",
    },
    background: {
      default: "#131313",
      paper: "#1c1b1b",
    },
    text: {
      primary: "#e5e2e1",
      secondary: "#c2c6d6",
    },
    divider: "#424754",
    action: {
      active: "#adc6ff",
      hover: "rgba(173, 198, 255, 0.08)",
      selected: "rgba(173, 198, 255, 0.16)",
      disabled: "rgba(229, 226, 225, 0.3)",
      disabledBackground: "rgba(229, 226, 225, 0.12)",
    },
  },
  typography: {
    fontFamily: '"Geist", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.01em",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 0 20px rgba(77, 142, 255, 0.3)",
          },
        },
        outlined: {
          borderColor: "#424754",
          "&:hover": {
            borderColor: "#adc6ff",
            backgroundColor: "rgba(173, 198, 255, 0.08)",
          },
        },
        sizeSmall: {
          padding: "8px 16px",
          fontSize: "12px",
        },
        sizeLarge: {
          padding: "16px 32px",
          fontSize: "16px",
        },
      },
      defaultProps: {
        disableRipple: false,
      },
    },
  },
});

export default theme;
