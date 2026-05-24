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
    if (res.ok) {
      const setCookies = res.headers.getSetCookie();
      if (setCookies.length > 0) {
        const { cookies: nextCookies } = await import("next/headers");
        const cookieStore = await nextCookies();

        for (const cookieStr of setCookies) {
          const [nameValue, ...attrParts] = cookieStr.split("; ");
          const [name, ...rest] = nameValue.split("=");
          const value = rest.join("=");

          const opts: {
            httpOnly?: boolean;
            secure?: boolean;
            sameSite?: "strict" | "lax" | "none";
            path?: string;
            maxAge?: number;
            expires?: Date;
          } = {};

          for (const attr of attrParts) {
            const [k, ...vRest] = attr.split("=");
            const key = k.toLowerCase();
            const val = vRest.join("=");
            switch (key) {
              case "max-age": opts.maxAge = parseInt(val, 10); break;
              case "expires": opts.expires = new Date(val); break;
              case "path": opts.path = val; break;
              case "secure": opts.secure = true; break;
              case "httponly": opts.httpOnly = true; break;
              case "samesite": opts.sameSite = val?.toLowerCase() as "strict" | "lax" | "none" | undefined; break;
            }
          }

          cookieStore.set(name, value, opts);
        }
      }
      return { success: true };
    }
    return { error: "Usuario o contraseña no encontrados" };
  } catch {
    return { error: "Error de conexión. Verifica tu red e intenta de nuevo." };
  }
}

export async function register(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const fieldErrors: LoginState["fieldErrors"] = {};

  if (!email?.includes("@")) {
    fieldErrors.email = "Ingresa un email válido";
  }
  if (!password || password.length < 6) {
    fieldErrors.password = "Debe tener al menos 6 caracteres";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  try {
    const res = await authService.register(email, password);
    if (res) {
      return { success: true };
    }
    return { error: "No se pudo registrar. Intenta de nuevo." };
  } catch {
    return { error: "Error de conexión. Verifica tu red e intenta de nuevo." };
  }
}
