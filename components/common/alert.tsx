type Props = {
  variant: "error" | "success";
  message: string;
};

const styles = {
  error:
    "bg-error-container/20 border-error/30 text-on-surface-variant",
  success: "bg-emerald-400/10 border-emerald-400/30 text-emerald-400",
};

export default function Alert({ variant, message }: Props) {
  return (
    <div
      className={`p-stack-md border rounded-lg font-body-sm text-body-sm ${styles[variant]}`}
    >
      {message}
    </div>
  );
}
