import { authService } from "@/lib/services";

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

  if (!email?.includes("@")) {
    fieldErrors.email = "Ingresa un email válido";
  }
  if (!password || password.length < 6) {
    fieldErrors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  try {
    const res = await authService.login(email, password, remember);
    if (res) {
      return { success: true };
    }
    return { error: "Usuario o contraseña no encontrados" };
  } catch {
    return { error: "Error de conexión. Verifica tu red e intenta de nuevo." };
  }
}
