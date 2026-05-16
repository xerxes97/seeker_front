import AuthLayout from "@/components/auth/auth-layout";
import LoginForm from "@/components/auth/login-form";
import AuthFooter from "@/components/auth/auth-footer";

export default function LoginPage() {
  return (
    <AuthLayout
      form={
        <>
          <LoginForm />
          {/* <AuthFooter /> */}
        </>
      }
    />
  );
}
