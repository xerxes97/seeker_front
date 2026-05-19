"use client";

import { useState } from "react";
import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";

export default function AuthForms() {
  const [isRegister, setIsRegister] = useState(false);

  if (isRegister) {
    return <RegisterForm onToggle={() => setIsRegister(false)} />;
  }

  return <LoginForm onToggle={() => setIsRegister(true)} />;
}
