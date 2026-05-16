"use client";

import IconButton from "@mui/material/IconButton";

export default function TopAppBar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant flex items-center justify-end px-margin-desktop z-40">
      <div className="flex items-center gap-stack-md mr-4">
        <IconButton sx={{ color: "text.secondary" }}>
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface" />
        </IconButton>
        <IconButton sx={{ color: "text.secondary" }}>
          <span className="material-symbols-outlined">apps</span>
        </IconButton>
        <div className="w-px h-6 bg-outline-variant mx-2" />
        <img
          alt="User profile"
          className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKoUGITwwm7SV80RRJ_aU68THIMg3i2LOLwiFQLq0bli279I5paYcOwpWiYHrWahOu1EiDVFLjS5hXTi_6XBfKEhAGmktQGEGVJg11QJHNXRmS0Y2gq8x3IMZElc7IfTXxezz2Cuikrk9voYJO_dAlqzvhMc4t91kLJqetBPNF6dufcETFIeDkyhamJnl2rQNFlRgUE657bWugMo3Rbn6mE_d1zy7cQdlsbB-Fxi9KIt4WKHjgpTi-mv_-VDGGiM7nYr-8RfF0w"
        />
      </div>
    </header>
  );
}
