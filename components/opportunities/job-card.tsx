import Link from "next/link";
import MatchScore from "@/components/common/match-score";
import Tag from "@/components/common/tag";

export type Job = {
  id?: string;
  company: string;
  logo: string;
  title: string;
  location: string;
  tags: string[];
  skills: string[];
  match: number;
};

type Props = {
  job: Job;
};

export default function JobCard({ job }: Readonly<Props>) {
  return (
    <Link
      href={`/findings/${job.id ?? job.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="glass-card p-6 rounded-2xl flex flex-col group hover:ring-1 hover:ring-primary/40 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-[#1e1e1e] rounded-xl flex items-center justify-center border border-outline-variant">
          <img
            alt={`${job.company} Logo`}
            className="w-8 h-8 object-contain"
            src={job.logo}
          />
        </div>
        <MatchScore percentage={job.match} />
      </div>

      <div className="mb-4">
        <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
          {job.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {job.location}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-outline-variant/30 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-primary mt-1.5" />
          <div className="flex flex-wrap gap-1">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
          arrow_forward
        </span>
      </div>
    </Link>
  );
}
