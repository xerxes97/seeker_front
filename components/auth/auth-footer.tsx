export default function AuthFooter() {
  return (
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
  );
}
