import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createProfileSlice, type ProfileSlice } from "./profile-slice";
import { createAuthSlice, type AuthSlice } from "./auth-slice";
import { createUISlice, type UISlice } from "./ui-slice";

export type AppStore = ProfileSlice & AuthSlice & UISlice;

export const useStore = create<AppStore>()(
  persist(
    (...a) => ({
      ...createProfileSlice(...a),
      ...createAuthSlice(...a),
      ...createUISlice(...a),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({
        profile: state.profile,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
