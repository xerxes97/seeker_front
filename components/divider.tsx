type Props = {
  label?: string;
};

export default function Divider({ label }: Props) {
  return (
    <div className="relative flex items-center py-stack-sm">
      <div className="flex-grow border-t border-outline-variant" />
      {label && (
        <span className="flex-shrink mx-stack-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          {label}
        </span>
      )}
      <div className="flex-grow border-t border-outline-variant" />
    </div>
  );
}
