"use client";

import { useActionState, useEffect } from "react";
import { register as registerAction, type LoginState } from "@/lib/actions/auth";
import Alert from "@/components/common/alert";
import Button from "@/components/common/button";

type Props = {
  onToggle: () => void;
};

const initialState: LoginState = {};

export default function RegisterForm({ onToggle }: Readonly<Props>) {
  const [state, formAction, pending] = useActionState(registerAction, initialState);

  useEffect(() => {
    if (state.success) {
      onToggle();
    }
  }, [state.success, onToggle]);

  return (
    <>
      <div className="space-y-stack-sm">
        <h1 className="font-headline-md text-headline-md text-on-surface">
          Crear cuenta
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Ingresa tus datos para registrarte.
        </p>
      </div>

      {state.error && <Alert variant="error" message={state.error} />}

      <form action={formAction} className="space-y-stack-md mt-6">
        <div className="space-y-stack-sm mb-4">
          <label
            className="font-label-md text-label-md text-on-surface-variant"
            htmlFor="reg-email"
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
              id="reg-email"
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
          <label
            className="font-label-md text-label-md text-on-surface-variant"
            htmlFor="reg-password"
          >
            Contraseña
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              lock
            </span>
            <input
              className={`w-full bg-surface-container-lowest border rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${state.fieldErrors?.password
                  ? "border-error"
                  : "border-outline-variant"
                }`}
              id="reg-password"
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
          {pending ? "Creando cuenta..." : "Crear cuenta"}
        </Button>
      </form>

      <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-2">
        ¿Ya tienes una cuenta?{" "}
        <button
          type="button"
          onClick={onToggle}
          className="text-primary font-semibold hover:underline bg-transparent border-none cursor-pointer"
        >
          Inicia sesión
        </button>
      </p>
    </>
  );
}
