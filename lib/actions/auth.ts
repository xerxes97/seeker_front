"use server";

import { cookies } from "@/lib/cookies";
import { api } from "@/lib/fetcher";

export type LoginState = {
  error?: string;
  success?: boolean;
  fieldErrors?: {
    email?: string;
    password?: string;
  };
};

export async function login(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const remember = formData.get("remember") === "on";

  const fieldErrors: LoginState["fieldErrors"] = {};

  if (!email || !email.includes("@")) {
    fieldErrors.email = "Ingresa un email válido";
  }
  if (!password || password.length < 6) {
    fieldErrors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  try {
    const res = await api.post<
      { email: string; password: string },
      { token: string; user: { name: string; email: string } }
    >("/auth/login", { email, password });

    if (!res.ok) {
      return { error: "Credenciales inválidas. Intenta de nuevo." };
    }

    await cookies.set("auth_token", res.data.token, {
      path: "/",
      secure: true,
      sameSite: "lax",
      expires: remember ? 30 * 24 * 60 * 60 * 1000 : undefined,
    });

    return { success: true };
  } catch {
    return { error: "Error de conexión. Verifica tu red e intenta de nuevo." };
  }
}

export async function logout(): Promise<void> {
  await cookies.remove("auth_token");
}
