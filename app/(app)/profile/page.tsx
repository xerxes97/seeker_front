import ProfileHeader from "@/components/profile/profile-header";
import ProfileForm from "@/components/profile/profile-form";
import SectionCard from "@/components/common/section-card";
import IconButton from "@mui/material/IconButton";

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

        <div className="mt-6">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

