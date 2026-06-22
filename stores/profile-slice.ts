import type { StateCreator } from "zustand";
import { DEFAULT_PROFILE, type Profile } from "@/types/profile";
import { profileService } from "@/lib/services";

export interface ProfileSlice {
  profile: Profile;
  loading: boolean;
  uploading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  uploadCv: (file: File) => Partial<Profile>;
  clearProfile: () => void;
}

export const createProfileSlice: StateCreator<ProfileSlice> = (set, get) => ({
  profile: DEFAULT_PROFILE,
  loading: true,
  uploading: false,
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

  uploadCv: async (file) => {
    try {
      set({ uploading: true, error: null });
      const data = await profileService.uploadCv(file);
      if (!data) {
        set({ error: "Failed to upload CV" });
        return null;
      }
      set({ uploading: false, profile: { ...get().profile, ...data } });
      return data;
    } catch (error) {
      set({ uploading: false, error: "Failed to upload CV" });
      return null;
    }
  },

  clearProfile: () => set({ profile: DEFAULT_PROFILE, error: null }),
});
