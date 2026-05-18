export type Skill = {
  name: string;
  level: "expert" | "intermediate" | "basic";
};

export type Profile = {
  name: string;
  lastname: string;
  location: string;
  experience_years: number;
  modality: string[];
  skills: Skill[];
};
