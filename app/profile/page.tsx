import Sidebar from "@/components/sidebar";
import TopAppBar from "@/components/top-app-bar";
import ProfileHeader from "@/components/profile-header";
import SkillChip from "@/components/skill-chip";
import SectionCard from "@/components/section-card";

export default function ProfilePage() {
  return (
    <>
      <Sidebar />
      <TopAppBar />
      <main className="ml-64 mt-16 p-margin-desktop min-h-screen">
        <div className="max-w-container-max mx-auto">
          <ProfileHeader
            name="Elias P. Henderson"
            role="Senior Cloud Solutions Architect • San Francisco, CA"
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBn6SVsS7sEjym0_beWOlbu9Sd6qTpjgCDUsaUse7a-xXIkrrgAil5Lw9MAZ9AJdqDh_iINDDfRr0wHvtXBP5LkxOYXjzmJJrp0G2qJu-YS_kyvwSfy-6INHDNhPSYIe81ExBM5LCvHutr5fII4syV9S31DOCgasqoCRBOSQkd4_tE8EorXuXwkAqd34OHLSE9NARDe8YiaHAPp4oPI6erNmZqRhpQ05OCBPK-0NH33P0wS8n3h_6qqOEQO9F0P439nWLr-MP5JMg"
            statuses={["Active Candidate", "Open to Offers"]}
          />

          <div className="grid grid-cols-12 gap-gutter">
            {/* CV Upload */}
            <SectionCard
              variant="bento"
              className="col-span-12 lg:col-span-8 min-h-[320px] flex flex-col items-center justify-center text-center group cursor-pointer"
              hover
            >
              <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center mb-stack-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  cloud_upload
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">
                Upload your CV
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-stack-lg">
                Drag and drop your latest PDF or DOCX file. Our AI will
                automatically parse your skills and match you to top-tier roles.
              </p>
              <div className="px-stack-lg py-stack-md border-2 border-dashed border-outline-variant rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">
                  description
                </span>
                <span className="font-label-md text-label-md">
                  Henderson_CV_2024.pdf
                </span>
                <button className="text-error hover:opacity-70 transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              </div>
            </SectionCard>

            {/* Salary */}
            <SectionCard
              variant="bento"
              className="col-span-12 lg:col-span-4 flex flex-col gap-stack-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                  Salary Range
                </h3>
                <span className="material-symbols-outlined text-primary">
                  payments
                </span>
              </div>
              <div className="flex flex-col gap-stack-md flex-1 justify-center">
                <div className="flex justify-between items-end">
                  <span className="font-headline-lg text-headline-lg text-primary">
                    $185k{" "}
                    <span className="text-body-sm font-normal text-on-surface-variant">
                      / yr
                    </span>
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">
                    Target Min.
                  </span>
                </div>
                <input
                  className="w-full"
                  max="300000"
                  min="100000"
                  step="5000"
                  type="range"
                  defaultValue={185000}
                />
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 italic">
                  Based on your experience, this is in the 85th percentile for
                  your role.
                </p>
              </div>
            </SectionCard>

            {/* Work Preferences */}
            <SectionCard
              variant="bento"
              className="col-span-12 lg:col-span-5 flex flex-col gap-stack-lg"
            >
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                Work Preferences
              </h3>
              <div className="grid grid-cols-2 gap-stack-md">
                {[
                  {
                    icon: "laptop_mac",
                    label: "Remote",
                    note: "Primary Choice",
                    active: true,
                  },
                  {
                    icon: "corporate_fare",
                    label: "Hybrid",
                    note: "Secondary Choice",
                    active: false,
                  },
                  {
                    icon: "apartment",
                    label: "On-site",
                    note: "Not Preferred",
                    active: false,
                  },
                  {
                    icon: "public",
                    label: "Global Relo",
                    note: "Available",
                    active: false,
                  },
                ].map((pref) => (
                  <button
                    key={pref.label}
                    className={`flex flex-col items-start p-stack-md rounded-xl transition-all cursor-pointer ${
                      pref.active
                        ? "border-2 border-primary bg-primary-container/10 text-on-surface"
                        : "border border-outline-variant bg-surface hover:bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined mb-2 ${pref.active ? "text-primary" : ""}`}
                      style={
                        pref.active
                          ? { fontVariationSettings: "'FILL' 1" }
                          : undefined
                      }
                    >
                      {pref.icon}
                    </span>
                    <span className="font-label-md text-label-md">
                      {pref.label}
                    </span>
                    <span className="text-[10px] text-outline uppercase mt-1">
                      {pref.note}
                    </span>
                  </button>
                ))}
              </div>
            </SectionCard>

            {/* Skills */}
            <SectionCard
              variant="bento"
              className="col-span-12 lg:col-span-7"
            >
              <div className="flex items-center justify-between mb-stack-lg">
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                  Verified Skills
                </h3>
                <button className="text-primary hover:underline font-label-md text-label-md flex items-center gap-1 transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-[16px]">
                    add
                  </span>
                  Add Skill
                </button>
              </div>

              <div className="flex flex-wrap gap-stack-sm">
                {[
                  { name: "Kubernetes", level: "expert" as const },
                  { name: "AWS Architecture", level: "expert" as const },
                  { name: "Terraform", level: "expert" as const },
                  { name: "Python", level: "intermediate" as const },
                  { name: "System Design", level: "intermediate" as const },
                  { name: "Go (Golang)", level: "intermediate" as const },
                  { name: "PostgreSQL", level: "basic" as const },
                ].map((skill) => (
                  <SkillChip
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    removable
                  />
                ))}
              </div>

              <div className="mt-stack-lg p-stack-md bg-primary-container/10 border border-primary/20 rounded-xl flex items-center gap-stack-md">
                <span className="material-symbols-outlined text-primary">
                  auto_awesome
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  We&apos;ve identified 3 additional skills from your CV.{" "}
                  <button className="text-primary font-medium hover:underline transition-opacity cursor-pointer">
                    Add them to your profile.
                  </button>
                </p>
              </div>
            </SectionCard>
          </div>
        </div>
      </main>
    </>
  );
}
