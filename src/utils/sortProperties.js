import { NUMERIC_FIELDS } from "../data/propertyFields.js";

export const sortProperties = (properties, { field, direction }) => {
  if (!field) return properties;

  return [...properties].sort((a, b) => {
    const aVal = NUMERIC_FIELDS.includes(field) ? Number(a[field]) : a[field];
    const bVal = NUMERIC_FIELDS.includes(field) ? Number(b[field]) : b[field];

    if (aVal < bVal) return direction === "asc" ? -1 : 1;
    if (aVal > bVal) return direction === "asc" ? 1 : -1;
    return 0;
  });
};
