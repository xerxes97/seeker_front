import Tag from "./tag";

type Props = {
  name: string;
  role: string;
  avatar: string;
  statuses?: string[];
};

export default function ProfileHeader({
  name,
  role,
  avatar,
  statuses,
}: Props) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-stack-lg mb-margin-desktop">
      <div className="relative group">
        <div className="h-32 w-32 rounded-full overflow-hidden border-2 border-primary p-1 bg-surface-container">
          <img
            alt={`${name} avatar`}
            className="h-full w-full rounded-full object-cover"
            src={avatar}
          />
        </div>
        <button className="absolute bottom-1 right-1 bg-primary text-on-primary p-2 rounded-full shadow-lg active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[18px]">edit</span>
        </button>
      </div>

      <div className="text-center md:text-left flex-1">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          {name}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {role}
        </p>
        {statuses && (
          <div className="flex gap-stack-sm mt-stack-md justify-center md:justify-start">
            {statuses.map((s) => (
              <Tag key={s} variant={s.includes("Open") ? "primary" : "default"}>
                {s}
              </Tag>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-stack-md">
        <button className="px-stack-lg py-3 border border-outline-variant rounded-xl font-label-md text-label-md hover:bg-surface-container-high transition-colors">
          Public View
        </button>
        <button className="px-stack-lg py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity">
          Save Profile
        </button>
      </div>
    </section>
  );
}
