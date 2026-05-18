import { api } from "../fetcher";

export class AuthService {
  async login(email: string, password: string, remember: boolean): Promise<boolean> {
    const res = await api.post<{ email: string; password: string; remember: boolean }, { user?: { email: string; name?: string } }>(
      "/auth/login",
      { email, password, remember },
    );
    return res.ok;
  }

  async logout(): Promise<void> {
    await api.post("/auth/logout");
  }
}

export const authService = new AuthService();
