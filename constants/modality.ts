export type ModalityOption = {
  icon: string;
  label: string;
  value: string;
};

export const MODALITY: ModalityOption[] = [
  { icon: "laptop_mac", label: "Remote", value: "remote" },
  { icon: "corporate_fare", label: "Hybrid", value: "hybrid" },
  { icon: "apartment", label: "On-site", value: "onsite" },
  { icon: "public", label: "Global Relo", value: "global_relo" },
];
