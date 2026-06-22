import { api } from "../fetcher";
import type { Profile } from "@/types/profile";

export class ProfileService {
  async get(): Promise<Profile | null> {
    const res = await api.get<Profile>("/user-profile");
    if (!res.ok) return null;
    return res.data;
  }

  async update(data: Partial<Profile>): Promise<Profile | null> {
    const res = await api.put<Partial<Profile>, Profile>("/user-profile", data);
    if (!res.ok) return null;
    return res.data;
  }

  async uploadCv(file: File): Promise<Partial<Profile> | null> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post<any, Profile>(
      `/user-profile/cv`,
      formData
    );

    return res.ok ? res.data : null;
  }
}

export const profileService = new ProfileService();
