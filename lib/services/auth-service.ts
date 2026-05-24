import { api, type FetcherResponse } from "../fetcher";

export class AuthService {
  async login(email: string, password: string, remember: boolean): Promise<FetcherResponse<{ user?: { email: string; name?: string }; message?: string }>> {
    return api.post<
      { email: string; password: string; remember: boolean },
      { user?: { email: string; name?: string }; message?: string }
    >("/auth/login", { email, password, remember });
  }

  async register(email: string, password: string): Promise<boolean> {
    const res = await api.post<{ email: string; password: string }, { user?: { email: string } }>(
      "/auth/register",
      { email, password },
    );
    return res.ok;
  }

  async logout(): Promise<void> {
    await api.post("/auth/logout");
  }
}

export const authService = new AuthService();
