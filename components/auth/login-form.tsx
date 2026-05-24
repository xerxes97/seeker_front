"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/lib/services";
import { useStore } from "@/stores";
import Alert from "@/components/common/alert";
import Button from "@/components/common/button";

type Props = {
  onToggle?: () => void;
};

type FieldErrors = { email?: string; password?: string };

export default function LoginForm({ onToggle }: Readonly<Props>) {
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const remember = formData.get("remember") === "on";

    const validation: FieldErrors = {};
    if (!email?.includes("@")) validation.email = "Ingresa un email válido";
    if (!password || password.length < 6) validation.password = "La contraseña debe tener al menos 6 caracteres";

    if (Object.keys(validation).length > 0) {
      setFieldErrors(validation);
      setPending(false);
      return;
    }

    try {
      const ok = await authService.login(email, password, remember);
      if (ok) {
        useStore.getState().fetchProfile();
        router.push("/findings");
      } else {
        setError("Usuario o contraseña no encontrados");
      }
    } catch {
      setError("Error de conexión. Verifica tu red e intenta de nuevo.");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <div className="space-y-stack-sm">
        <h1 className="font-headline-md text-headline-md text-on-surface">
          Bienvenido de nuevo
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Ingresa tus credenciales para acceder a tu panel.
        </p>
      </div>

      {error && <Alert variant="error" message={error} />}

      {/* Social login (Google/GitHub) no soportado actualmente */}

      <form onSubmit={handleSubmit} className="space-y-stack-md mt-6">
        <div className="space-y-stack-sm mb-4">
          <label
            className="font-label-md text-label-md text-on-surface-variant"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative mb-4">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              mail
            </span>
            <input
              className={`w-full bg-surface-container-lowest border rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${fieldErrors.email
                  ? "border-error"
                  : "border-outline-variant"
                }`}
              id="email"
              name="email"
              placeholder="nombre@empresa.com"
              type="email"
              defaultValue=""
            />
          </div>
          {fieldErrors.email && (
            <p className="font-body-sm text-body-sm text-error ml-1">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="space-y-stack-sm">
          <div className="flex justify-between items-center">
            <label
              className="font-label-md text-label-md text-on-surface-variant"
              htmlFor="password"
            >
              Contraseña
            </label>
            <a
              className="font-label-sm text-label-sm text-primary hover:underline transition-opacity"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              lock
            </span>
            <input
              className={`w-full bg-surface-container-lowest border rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${fieldErrors.password
                  ? "border-error"
                  : "border-outline-variant"
                }`}
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              defaultValue=""
            />
          </div>
          {fieldErrors.password && (
            <p className="font-body-sm text-body-sm text-error ml-1">
              {fieldErrors.password}
            </p>
          )}
        </div>

        <div className="flex items-center gap-stack-sm pt-stack-sm mt-4">
          <input
            className="w-4 h-4 rounded border-outline-variant bg-surface-container-lowest text-primary-container focus:ring-primary"
            id="remember"
            name="remember"
            type="checkbox"
          />
          <label
            className="font-body-sm text-body-sm text-on-surface-variant"
            htmlFor="remember"
          >
            Recordar mi sesión por 30 días
          </label>
        </div>

        <Button
          fullWidth
          type="submit"
          loading={pending}
          disabled={pending}
          size="large"
          sx={{
            mt: "16px",
            backgroundColor: "#4d8eff",
            color: "#00285d",
            fontWeight: 600,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#4d8eff",
              boxShadow: "0 0 20px rgba(77, 142, 255, 0.3)",
            },
          }}
        >
          {pending ? "Iniciando sesión..." : "Iniciar sesión"}
        </Button>
      </form>

       <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-2">
        ¿No tienes una cuenta?{" "}
        <button
          type="button"
          onClick={onToggle}
          className="text-primary font-semibold hover:underline bg-transparent border-none cursor-pointer"
        >
          Registrate
        </button>
      </p>
    </>
  );
}
