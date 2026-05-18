"use client";

import { useState, useRef } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SkillChip from "@/components/profile/skill-chip";
import Button from "@/components/common/button";

export type Skill = {
  name: string;
  value: string;
};

const SUGGESTED_SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "Kubernetes",
  "AWS",
  "Terraform",
  "Figma",
  "PostgreSQL",
  "Go",
  "Docker",
  "GraphQL",
  "System Design",
  "UX Research",
];

type Props = {
  initialSkills?: Skill[];
  onChange?: (skills: Skill[]) => void;
};

export default function SkillManager({ initialSkills = [], onChange }: Readonly<Props>) {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addSkill = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (skills.some((s) => s.value.toLowerCase() === trimmed.toLowerCase())) return;
    const next = [...skills, { name: trimmed, value: trimmed }];
    setSkills(next);
    onChange?.(next);
    setOpen(false);
    inputRef.current?.blur();
  };

  const removeSkill = (value: string) => {
    const next = skills.filter((s) => s.value !== value);
    setSkills(next);
    onChange?.(next);
  };

  const availableOptions = SUGGESTED_SKILLS.filter(
    (s) => !skills.some((sk) => sk.value.toLowerCase() === s.toLowerCase()),
  );

  return (
    <>
      <Autocomplete
        freeSolo
        disableClearable
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={availableOptions}
        inputValue={inputValue}
        onInputChange={(_, v) => {
          setInputValue(v);
          if (v) setOpen(true);
        }}
        onChange={(_, v) => {
          if (typeof v === "string" && v.trim()) {
            addSkill(v);
            setInputValue("");
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputValue.trim()) {
            e.preventDefault();
            addSkill(inputValue);
            setInputValue("");
          }
        }}
        renderInput={(params) => {
          const { slotProps: sp, ...rest } = params;
          return (
            <TextField
              {...rest}
              inputRef={inputRef}
              placeholder="Search or type a skill and press Enter..."
              variant="outlined"
              size="small"
              slotProps={{
                ...sp,
                input: {
                  ...((sp?.input as Record<string, unknown>) || {}),
                  endAdornment: (
                    <Button
                      size="small"
                      variant="text"
                      color="primary"
                      sx={{ minWidth: "auto", p: "4px 8px", fontSize: "12px" }}
                      onClick={() => {
                        if (inputValue.trim()) {
                          addSkill(inputValue);
                          setInputValue("");
                        }
                      }}
                    >
                      Add
                    </Button>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "var(--color-surface-container-lowest, #1c1b1b)",
                  borderRadius: "9999px",
                  paddingLeft: "16px",
                },
              }}
            />
          );
        }}
      />

      <div className="flex flex-wrap gap-4 mt-6">
        {skills.map((skill) => (
          <SkillChip
            key={skill.value}
            name={skill.name}
            removable
            onRemove={() => removeSkill(skill.value)}
          />
        ))}
      </div>

      {skills.length === 0 && (
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-4 text-center">
          No skills added yet. Start typing above.
        </p>
      )}

      <div className="mt-8 p-4 bg-primary-container/10 border border-primary/20 rounded-xl flex items-center gap-4">
        <span className="material-symbols-outlined text-primary">
          auto_awesome
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          We&apos;ve identified 3 additional skills from your CV.{" "}
          <button
            type="button"
            className="text-primary font-medium hover:underline transition-opacity cursor-pointer"
          >
            Add them to your profile.
          </button>
        </p>
      </div>
    </>
  );
}
