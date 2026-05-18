export type Skill = {
  name: string;
  value: string;
};

export type Profile = {
  id: string;
  user_id: string;
  name?: string;
  lastname?: string;
  skills?: string[];
  experience_years?: number;
  location?: string;
  department?: string;
  modality?: string[];
  salaryMin?: number | null;
  salaryMax?: number | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
};

export const DEFAULT_PROFILE: Profile = {
  id: "",
  user_id: "",
  name: "",
  lastname: "",
  skills: [],
  experience_years: 0,
  location: "",
  department: "",
  modality: [],
  salaryMin: null,
  salaryMax: null,
  created_at: "",
  updated_at: "",
  deleted_at: null,
};
