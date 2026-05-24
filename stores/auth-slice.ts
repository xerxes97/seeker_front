import type { StateCreator } from "zustand";
import { authService } from "@/lib/services";

export type AuthUser = {
  email: string;
  name?: string;
} | null;

export interface AuthSlice {
  user: AuthUser;
  isAuthenticated: boolean;
  setUser: (user: AuthUser) => void;
  logout: () => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set, get: any) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({ user, isAuthenticated: !!user }),

  logout: async () => {
    await authService.logout();
    get().clearProfile?.();
    set({ user: null, isAuthenticated: false });
  },
});
