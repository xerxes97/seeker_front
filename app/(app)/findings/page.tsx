import MatchScore from "@/components/common/match-score";
import FilterPills from "@/components/common/filter-pills";
import JobCard from "@/components/opportunities/job-card";
import Button from "@/components/common/button";
import type { Job } from "@/components/opportunities/job-card";

const jobs: Job[] = [
  {
    id: "senior-product-designer-vercel",
    company: "Vercel",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeLRv-9IL9mW4hNdPX53vXr0WFNS1xXYfzTXyhFywmyHmzOGogh-oq45flK3DA3VdLCa8lQTXCR_DU0lm2V9bJKMWsUBOjcWvCl4deegaEZ9Mcl1k1go55xKIh_H7GWtmecOQFl4T7jN6QJ_iEAEI99ot9N6N9Ufu0OeKcaQVFAR40PiNXeWVLfRmZ4uLpHuneqAQvSHRcCTVr_YmKo_Fl7qVO_I2zMD_WuiDGed6lpzIQDyeJEcA_Dp7-tuqqVRJwXM_vFu2eBw",
    title: "Senior Product Designer",
    location: "Vercel • Remote",
    tags: ["Senior", "Full-time", "$180k - $240k"],
    skills: ["React", "Figma", "Next.js"],
    match: 94,
  },
  {
    id: "staff-ux-engineer-stripe",
    company: "Stripe",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG6JjH_-GIW0rrySGy7ozYC-9l5Ojc7gUi5SPXrwqUAOaAAePc5l7LGVygdv8X-oNaEWTbftx08_Cbsqbxj7Z-uABq3sClOd11Ryona1_hRsFBin5P_sShoD45SqGKoKu4Kjd5ddhJ4MU3WiMjEgP6ANXqtUcO5HiSvLprdND-tRJ_bGIpRhNEpPZ4ZMEGVk3v-F58O0AuLoYcqP6ap1Lc_xdYyBkwc-94qSqJHpra5uRRXMdQF16YOK-icf6HV5Ilts_AR8pH0g",
    title: "Staff UX Engineer",
    location: "Stripe • San Francisco / Hybrid",
    tags: ["Staff", "Hybrid", "$210k - $290k"],
    skills: ["Typescript", "Systems"],
    match: 82,
  },
  {
    id: "design-systems-lead-figma",
    company: "Figma",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaVGJjZkzjLLEuG6CB17yfPAicdYg7SE1aESYZES-KRCYt27MXqQeR0PU301DbjRoTM4kQGhGiPK6O91d9KYGZ25l6bBRgaJv45vtR8RS4Vne0Uwll2syK5hrAZPt0b_MOGdlho5fKbwajoJavYG_ewwWCBNnILJMl8-gUVa62XYvyS8EiGJdZbkm_SQY1UDxeO9fU5oscHu0pcRwc-bYFolKZvvq0Coj0OnpRo8XJi9_jQg-zqsvGqX_4vT-tujZ4P-tfEM3Gfw",
    title: "Design Systems Lead",
    location: "Figma • Remote",
    tags: ["Senior+", "Remote", "$195k - $260k"],
    skills: ["Figma", "Tokens", "DevOps"],
    match: 96,
  },
  {
    id: "interface-designer-linear",
    company: "Linear",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZq4uTpPNRBc8E7vIVtK9uxTvnCDg9D2NV73gHFtkYLrU5tsJCZSeZEUz62Oe9TY-VmPb9jayCPf5oHXA79DvfQWuEYeoUk8pq6UboSOwp0Gw0zeIzDYgqnkBqgn0UccFHM1Ka5LHW20jmnYn7XPkD8AA-CmwnS9CYb-6zArfY-IeLYaaBihi1SpwGgzyHAQpdQM5ualw_yJYkQzcsFFONgcjniQvazxp0sBmojpmPctfq2PheCGwhoiPS9q1mQceaWZEwM45xBA",
    title: "Interface Designer",
    location: "Linear • Remote",
    tags: ["Middle/Senior", "Remote", "$140k - $200k"],
    skills: ["Product", "UI"],
    match: 88,
  },
  {
    id: "growth-product-designer-vercel",
    company: "Vercel",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-EzRuo3EdtbeowkB93VLoVnVo1y1rPyifvkYMJBREZmOilOMKaR1V_4Qipc2Llchi1rJ8KyCNuPqyHgyABJqGuQ-CDs9mbSTQDJUoWpCYSrJz7WdMGhGJAv_frfJFwt2P--0E4rLXyI3jPzs1zdawP-ANfzC8abQxlYSliEDmE3y1NJB7R0C7G0eVqAMssbQQYA8QOFlNfKUjUIRv3GkiC4EJE5BTGspyQTpKx_XCzkzE5FL9VIJPGf_pQtThxmu91ktWhTxKKA",
    title: "Growth Product Designer",
    location: "Vercel • Remote",
    tags: ["Senior", "Remote", "$170k - $220k"],
    skills: ["Metrics", "UX"],
    match: 75,
  },
];

const filterItems = [
  "All Tracks",
  "Remote Only",
  "Design Systems",
  "Big Tech",
  "Fintech",
  "Contract",
];

export default function FindingsPage() {
  return (
    <div className="p-margin-desktop min-h-screen p-6">
      {/* <Search /> */}
        <section className="mb-stack-lg">
          <div className="flex items-end justify-between mb-stack-md">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Findings Dashboard
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Based on your Senior Product Designer profile.
              </p>
            </div>
            <div className="flex items-center gap-stack-sm">
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                startIcon={
                  <span className="material-symbols-outlined text-[18px]">
                    tune
                  </span>
                }
              >
                Filtros
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={
                  <span className="material-symbols-outlined text-[18px]">
                    sort
                  </span>
                }
              >
                Relevancia
              </Button>
            </div>
          </div>

          {/* <FilterPills items={filterItems} active="All Tracks" /> */}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
    </div>
  );
}

const Search = () => {
  return (
    <div className="flex items-center gap-stack-md flex-1">
      <div className="relative w-full max-w-md group">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
          search
        </span>
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-2 pl-10 pr-4 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          placeholder="Search opportunities..."
          type="text"
        />
      </div>
    </div>
  );
};
