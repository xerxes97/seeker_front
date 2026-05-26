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

  async uploadCv(file: File): Promise<boolean> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? ""}/user-profile/cv`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    return res.ok;
  }
}

export const profileService = new ProfileService();
