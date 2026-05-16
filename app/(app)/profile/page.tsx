import ProfileHeader from "@/components/profile/profile-header";
import SkillManager from "@/components/profile/skill-manager";
import ModalityPicker from "@/components/profile/modality-picker";
import SectionCard from "@/components/common/section-card";
import IconButton from "@mui/material/IconButton";
import { MODALITY } from "@/constants/modality";

export default function ProfilePage() {
  return (
    <div className="p-margin-desktop min-h-screen p-6">
      <div className="max-w-container-max mx-auto">
        <ProfileHeader
          name="Elias P. Henderson"
          role="Senior Cloud Solutions Architect • San Francisco, CA"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBn6SVsS7sEjym0_beWOlbu9Sd6qTpjgCDUsaUse7a-xXIkrrgAil5Lw9MAZ9AJdqDh_iINDDfRr0wHvtXBP5LkxOYXjzmJJrp0G2qJu-YS_kyvwSfy-6INHDNhPSYIe81ExBM5LCvHutr5fII4syV9S31DOCgasqoCRBOSQkd4_tE8EorXuXwkAqd34OHLSE9NARDe8YiaHAPp4oPI6erNmZqRhpQ05OCBPK-0NH33P0wS8n3h_6qqOEQO9F0P439nWLr-MP5JMg"
          statuses={["Active Candidate", "Open to Offers"]}
        />

        <div className="grid grid-cols-12 gap-6">
          {/* CV Upload */}
          <SectionCard
            variant="bento"
            className="col-span-12 lg:col-span-12 min-h-[320px] flex flex-col items-center justify-center text-center group cursor-pointer mt-6"
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
              <IconButton size="small" sx={{ color: "var(--color-error, #ffb4ab)" }}>
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </IconButton>
            </div>
          </SectionCard>

          {/* Salary */}
          {/* <SectionCard
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
            </SectionCard> */}

          {/* Work Preferences */}
          <SectionCard
            variant="bento"
            className="col-span-12 lg:col-span-5 flex flex-col gap-stack-lg p-6"
          >
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-6">
              Work Preferences
            </h3>
            <ModalityPicker options={MODALITY} defaultSelected={["Remote"]} />
          </SectionCard>

          {/* Skills */}
          <SectionCard
            variant="bento"
            className="col-span-12 lg:col-span-7 p-6"
          >
            <SkillManager
              initialSkills={[
                { name: "Kubernetes", level: "expert" },
                { name: "AWS Architecture", level: "expert" },
                { name: "Terraform", level: "expert" },
                { name: "Python", level: "intermediate" },
                { name: "System Design", level: "intermediate" },
                { name: "Go (Golang)", level: "intermediate" },
                { name: "PostgreSQL", level: "basic" },
              ]}
            />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

