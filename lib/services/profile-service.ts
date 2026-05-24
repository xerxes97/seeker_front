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
}

export const profileService = new ProfileService();
