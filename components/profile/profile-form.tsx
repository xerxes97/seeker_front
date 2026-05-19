"use client";

import { useState, useCallback, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@/components/common/button";
import SectionCard from "@/components/common/section-card";
import ModalityPicker from "@/components/profile/modality-picker";
import SkillManager from "@/components/profile/skill-manager";
import { MODALITY } from "@/constants/modality";
import type { Skill } from "@/components/profile/skill-manager";
import { useStore } from "@/stores";

type FormState = {
  name: string;
  lastname: string;
  location: string;
  experience_years: string;
  modality: string[];
  skills: Skill[];
};

const initialForm = (profile: ReturnType<typeof useStore.getState>["profile"]): FormState => ({
  name: profile.name ?? "",
  lastname: profile.lastname ?? "",
  location: profile.location ?? "",
  experience_years: String(profile.experience_years ?? ""),
  modality: profile.modality ?? [],
  skills: (profile.skills ?? []).map((s: any) => {
    if (typeof s === "string") return { name: s, value: s };
    return { name: s.name ?? String(s), value: s.value ?? s.name ?? String(s) };
  }),
});

export default function ProfileForm() {
  const profile = useStore((s) => s.profile);
  const loading = useStore((s) => s.loading);
  const updateProfile = useStore((s) => s.updateProfile);
  const [form, setForm] = useState<FormState>(() => initialForm(profile));
  const [syncKey, setSyncKey] = useState(0);

  useEffect(() => {
    if (!loading && profile.id) {
      setForm(initialForm(profile));
      setSyncKey((k) => k + 1);
    }
  }, [loading, profile.id]);

  const setField = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile({
      name: form.name,
      lastname: form.lastname,
      location: form.location,
      experience_years: Number(form.experience_years),
      modality: form.modality,
      skills: form.skills.map((s) => s.value),
    });
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
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
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
            value={form.lastname}
            onChange={(e) => setField("lastname", e.target.value)}
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
            value={form.location}
            onChange={(e) => setField("location", e.target.value)}
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
            value={form.experience_years}
            onChange={(e) => setField("experience_years", e.target.value)}
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
            defaultSelected={form.modality}
            onChange={(v) => setField("modality", v)}
          />
        </SectionCard>

        <SectionCard variant="bento" className="p-6">
          <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-6">
            Verified Skills
          </h3>
          <SkillManager
            key={syncKey}
            initialSkills={form.skills}
            onChange={(v) => setField("skills", v)}
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
