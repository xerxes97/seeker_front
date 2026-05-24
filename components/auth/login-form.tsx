"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, type LoginState } from "@/lib/actions/auth";
import { useStore } from "@/stores";
import Alert from "@/components/common/alert";
import Button from "@/components/common/button";

const initialState: LoginState = {};

type Props = {
  onToggle?: () => void;
};

export default function LoginForm({ onToggle }: Readonly<Props>) {
  const [state, formAction, pending] = useActionState(login, initialState);
  const router = useRouter();

  useEffect(() => {
    console.log(state);
    if (state.success) {
      useStore.getState().fetchProfile();
      // router.push("/findings");
    }
  }, [state.success, router]);

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

      {state.error && <Alert variant="error" message={state.error} />}

      {/* Social login (Google/GitHub) no soportado actualmente */}

      <form action={formAction} className="space-y-stack-md mt-6">
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
              className={`w-full bg-surface-container-lowest border rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${state.fieldErrors?.email
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
          {state.fieldErrors?.email && (
            <p className="font-body-sm text-body-sm text-error ml-1">
              {state.fieldErrors.email}
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
              className={`w-full bg-surface-container-lowest border rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${state.fieldErrors?.password
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
          {state.fieldErrors?.password && (
            <p className="font-body-sm text-body-sm text-error ml-1">
              {state.fieldErrors.password}
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
