"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/lib/actions/auth";
import Divider from "@/components/divider";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <main className="flex min-h-screen w-full">
      <section className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-surface-container-lowest/80 to-transparent" />
        <img
          className="absolute inset-0 object-cover w-full h-full opacity-60 scale-105"
          alt="Abstract tech visualization"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEHtRR3zBUIVb7uQ-1jpdpGmJE-Rkc8kl2NrdPw1gDr235rFhT5wDCVOKonNp5DshmMASX0kE2GycBkVBkXPH9TU-ox3IEEaYGV8nrmx9-dnjDxFOewMIyBe-bcQ76V2BuPQcCAx5tI6VYcSR6mppGPRccvFOjzMxSHhNGYu5Y2c65UmqRu-OMsdGjmLvD_eAnCwSD6kENirxiA0JiC0Fvptit6wrRkuSRsMU_mgES-6JFRjv3uQY9Q7UNIkrrDGcav92HYwZWHA"
        />
        <div className="relative z-20 flex flex-col justify-between p-margin-desktop w-full">
          <div>
            <h1 className="font-display-lg text-display-lg text-primary tracking-tighter">
              CareerArch
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mt-stack-md">
              Eleva tu carrera profesional con inteligencia predictiva y
              gestión de oportunidades de alto impacto.
            </p>
          </div>
          <div className="glass-effect p-stack-lg rounded-xl border border-outline-variant max-w-sm">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-stack-sm">
              Premium Insights
            </span>
            <p className="font-body-md text-body-md text-on-surface">
              &ldquo;La plataforma que transformó mi búsqueda pasiva en una
              estrategia de crecimiento agresiva.&rdquo;
            </p>
            <div className="mt-stack-md flex items-center gap-stack-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">
                  workspace_premium
                </span>
              </div>
              <div>
                <p className="font-label-md text-label-md">Alex Rivera</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Lead Developer @ FinTech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-2/5 flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="w-full max-w-md space-y-stack-lg">
          <div className="lg:hidden mb-stack-lg">
            <h1 className="font-headline-lg text-headline-lg text-primary font-bold">
              CareerArch
            </h1>
          </div>

          <div className="space-y-stack-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Bienvenido de nuevo
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ingresa tus credenciales para acceder a tu panel.
            </p>
          </div>

          {state.error && (
            <div className="p-stack-md bg-error-container/20 border border-error/30 rounded-lg font-body-sm text-body-sm text-on-surface-variant">
              {state.error}
            </div>
          )}

          {state.success && (
            <div className="p-stack-md bg-emerald-400/10 border border-emerald-400/30 rounded-lg font-body-sm text-body-sm text-emerald-400">
              Inicio de sesión exitoso. Redirigiendo...
            </div>
          )}

          <div className="grid grid-cols-2 gap-gutter">
            {[
              {
                label: "Google",
                icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0m1AwB-CtNArm7si8sRYT813xHeI02xx2zgTUoxga1_Og7F1mCIrOCqjrHasSLbJf6fe1FNPBLNnFj_jdqb2dBuRlhnCLgaVrECmNVs05CGTNrTSJJt7s_iRpMTBVynZjh1s0CK77My4AEFVZCmoqxIYZ7NhfyHV8FYxeS57ioRwTNRJALYwH8IDjFD48yaKaaOuFkwRtTN2UojuiEn3BXGZz7h7SzI2FlIoLaK-pjFu-eApD4wJakL9ZfbGoaiLy7HQdiObh4g",
              },
              { label: "GitHub", icon: "terminal" },
            ].map((btn) => (
              <button
                key={btn.label}
                type="button"
                className="flex items-center justify-center gap-stack-sm py-stack-md px-stack-md border border-outline-variant rounded-lg font-label-md text-label-md bg-surface-container-low hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                {btn.label === "Google" ? (
                  <img alt="Google Logo" className="w-5 h-5" src={btn.icon} />
                ) : (
                  <span className="material-symbols-outlined text-on-surface">
                    {btn.icon}
                  </span>
                )}
                {btn.label}
              </button>
            ))}
          </div>

          <Divider label="o continuar con email" />

          <form action={formAction} className="space-y-stack-md">
            <div className="space-y-stack-sm">
              <label
                className="font-label-md text-label-md text-on-surface-variant"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  mail
                </span>
                <input
                  className={`w-full bg-surface-container-lowest border rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                    state.fieldErrors?.email
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
                  className={`w-full bg-surface-container-lowest border rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                    state.fieldErrors?.password
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

            <div className="flex items-center gap-stack-sm pt-stack-sm">
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

            <button
              className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-headline-md text-[16px] font-semibold glow-hover transition-all duration-300 transform active:scale-[0.98] mt-stack-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={pending}
            >
              {pending ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </form>

          <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
            ¿No tienes una cuenta?{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Solicitar acceso
            </a>
          </p>
        </div>

        <footer className="absolute bottom-margin-desktop w-full max-w-md px-margin-mobile flex justify-between text-on-surface-variant font-label-sm text-label-sm opacity-60">
          <p>© 2024 CareerArch</p>
          <div className="flex gap-stack-md">
            <a className="hover:text-on-surface transition-colors" href="#">
              Privacidad
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Términos
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
