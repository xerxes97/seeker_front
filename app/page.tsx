import AuthLayout from "@/components/auth/auth-layout";
import AuthForms from "@/components/auth/auth-forms";

export default function LoginPage() {
  return (
    <AuthLayout
      form={<AuthForms />}
    />
  );
}
