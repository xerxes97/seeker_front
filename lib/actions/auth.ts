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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
        credentials: "include",
      }
    );

    if (!res.ok) {
      return { error: "Usuario o contraseña no encontrados" };
    }

    return { success: true };
  } catch {
    return { error: "Error de conexión. Verifica tu red e intenta de nuevo." };
  }
}

export async function logout(): Promise<void> {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}
