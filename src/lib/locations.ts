export const locations = [
  { value: "level-7-mx-global", label: "Level 7 – MX Global" },
  { value: "level-27-cuscapi", label: "Level 27 – Cuscapi" },
  { value: "level-28-cuscapi", label: "Level 28 – Cuscapi" },
  { value: "level-30-cardbiz", label: "Level 30 – Cardbiz" },
  { value: "level-31-excel-force", label: "Level 31 – Excel Force" },
  { value: "level-37-zetrix", label: "Level 37 – HR, Admin and Training (Zetrix)" },
  { value: "level-38-agmo", label: "Level 38 – Agmo" },
  { value: "level-39-agmo", label: "Level 39 – Agmo" },
  { value: "level-42-global-haltech", label: "Level 42 – Global Haltech" },
];

export const getLocationLabel = (value: string): string => {
  const location = locations.find((loc) => loc.value === value);
  return location ? location.label : value;
};

