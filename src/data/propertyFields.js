export const SEARCH_FIELDS = ["title", "location", "type", "office", "reference"];

export const NUMERIC_FIELDS = ["price", "area", "rooms"];

export const SPEC_FIELDS = [
  { label: "Superficie", field: "area", format: (v) => `${v} m²` },
  { label: "Habitaciones", field: "rooms" },
  { label: "Baños", field: "bathrooms" },
  { label: "Clase", field: "class" },
  { label: "Emisiones", field: "emissions" },
  { label: "Construcción", field: "construction" },
  { label: "Conservación", field: "conservation" },
];
