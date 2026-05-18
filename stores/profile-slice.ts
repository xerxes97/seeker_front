import type { StateCreator } from "zustand";
import type { Profile } from "@/types/profile";
import { profileService } from "@/lib/services";

export interface ProfileSlice {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  clearProfile: () => void;
}

export const createProfileSlice: StateCreator<ProfileSlice> = (set) => ({
  profile: null,
  loading: false,
  error: null,

  fetchProfile: async () => {
    set({ loading: true, error: null });
    const profile = await profileService.get();
    if (profile) {
      set({ profile, loading: false });
    } else {
      set({ error: "Failed to load profile", loading: false });
    }
  },

  updateProfile: async (data) => {
    const profile = await profileService.update(data);
    if (profile) {
      set({ profile });
    }
  },

  clearProfile: () => set({ profile: null, error: null }),
});
