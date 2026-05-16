import Tag from "@/components/common/tag";
import Button from "@/components/common/button";
import IconButton from "@mui/material/IconButton";

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
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            bottom: 4,
            right: 4,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            "&:hover": { bgcolor: "primary.dark" },
            boxShadow: 3,
          }}
        >
          <span className="material-symbols-outlined text-[18px]">edit</span>
        </IconButton>
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
        <Button variant="outlined" color="inherit">
          Public View
        </Button>
        <Button variant="contained" color="primary">
          Save Profile
        </Button>
      </div>
    </section>
  );
}
