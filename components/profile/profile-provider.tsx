"use client";

import { useEffect } from "react";
import { useStore } from "@/stores";

export default function ProfileProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const fetchProfile = useStore((s) => s.fetchProfile);
  const profile = useStore((s) => s.profile);

  useEffect(() => {
    if (!profile.id) {
      fetchProfile();
    }
  }, [fetchProfile, profile.id]);

  return <>{children}</>;
}
