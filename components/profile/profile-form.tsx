"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@/components/common/button";
import SectionCard from "@/components/common/section-card";
import ModalityPicker from "@/components/profile/modality-picker";
import SkillManager from "@/components/profile/skill-manager";
import { MODALITY } from "@/constants/modality";
import type { Skill } from "@/components/profile/skill-manager";

export default function ProfileForm() {
  const [name, setName] = useState("Elias");
  const [lastname, setLastname] = useState("Henderson");
  const [location, setLocation] = useState("San Francisco, CA");
  const [experienceYears, setExperienceYears] = useState("10");
  const [modality, setModality] = useState<string[]>(["remote"]);
  const [skills, setSkills] = useState<Skill[]>([
    { name: "Kubernetes", level: "expert" },
    { name: "AWS Architecture", level: "expert" },
    { name: "Terraform", level: "expert" },
    { name: "Python", level: "intermediate" },
    { name: "System Design", level: "intermediate" },
    { name: "Go (Golang)", level: "intermediate" },
    { name: "PostgreSQL", level: "basic" },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      name,
      lastname,
      location,
      experience_years: Number(experienceYears),
      modality,
      skills,
    };
    console.log("Profile payload:", payload);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SectionCard variant="bento" className="p-6">
        <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-6">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "var(--color-surface-container-lowest, #1c1b1b)",
              },
            }}
          />
          <TextField
            label="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "var(--color-surface-container-lowest, #1c1b1b)",
              },
            }}
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "var(--color-surface-container-lowest, #1c1b1b)",
              },
            }}
          />
          <TextField
            label="Years of Experience"
            value={experienceYears}
            onChange={(e) => setExperienceYears(e.target.value)}
            variant="outlined"
            size="small"
            type="number"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "var(--color-surface-container-lowest, #1c1b1b)",
              },
            }}
          />
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard variant="bento" className="p-6">
          <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-6">
            Work Preferences
          </h3>
          <ModalityPicker
            options={MODALITY}
            defaultSelected={modality}
            onChange={setModality}
          />
        </SectionCard>

        <SectionCard variant="bento" className="p-6">
          <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-6">
            Verified Skills
          </h3>
          <SkillManager
            initialSkills={skills}
            onChange={setSkills}
          />
        </SectionCard>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Save Profile
        </Button>
      </div>
    </form>
  );
}
