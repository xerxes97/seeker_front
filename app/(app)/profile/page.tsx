"use client";

import { useStore } from "@/stores";
import ProfileHeader from "@/components/profile/profile-header";
import ProfileForm from "@/components/profile/profile-form";
import CvUpload from "@/components/profile/cv-upload";

export default function ProfilePage() {
  const profile = useStore((s) => s.profile);
  console.log("profileData", profile);

  return (
    <div className="p-margin-desktop min-h-screen p-6">
      <div className="max-w-container-max mx-auto">
        <ProfileHeader
          name={`${profile.name ?? ""} ${profile.lastname ?? ""}`.trim() || "Sin nombre"}
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBn6SVsS7sEjym0_beWOlbu9Sd6qTpjgCDUsaUse7a-xXIkrrgAil5Lw9MAZ9AJdqDh_iINDDfRr0wHvtXBP5LkxOYXjzmJJrp0G2qJu-YS_kyvwSfy-6INHDNhPSYIe81ExBM5LCvHutr5fII4syV9S31DOCgasqoCRBOSQkd4_tE8EorXuXwkAqd34OHLSE9NARDe8YiaHAPp4oPI6erNmZqRhpQ05OCBPK-0NH33P0wS8n3h_6qqOEQO9F0P439nWLr-MP5JMg"
        />

        <CvUpload />

        <div className="mt-6">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

