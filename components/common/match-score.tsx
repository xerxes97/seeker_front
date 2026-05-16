type Props = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
};

export default function MatchScore({
  percentage,
  size = 48,
  strokeWidth = 3,
  label,
}: Readonly<Props>) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          className="text-surface-container-highest"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        <circle
          className="text-primary"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute font-label-sm text-label-sm font-bold text-primary">
        {label ?? `${percentage}%`}
      </span>
    </div>
  );
}
