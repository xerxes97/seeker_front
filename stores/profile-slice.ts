import type { StateCreator } from "zustand";
import { DEFAULT_PROFILE, type Profile } from "@/types/profile";
import { profileService } from "@/lib/services";

export interface ProfileSlice {
  profile: Profile;
  loading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  clearProfile: () => void;
}

export const createProfileSlice: StateCreator<ProfileSlice> = (set) => ({
  profile: DEFAULT_PROFILE,
  loading: true,
  error: null,

  fetchProfile: async () => {
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

  clearProfile: () => set({ profile: DEFAULT_PROFILE, error: null }),
});
