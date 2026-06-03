import { SEARCH_FIELDS } from "../data/propertyFields.js";

export const filterProperties = (properties, query) => {
  if (!query) return properties;

  const lowerQuery = query.toLowerCase();

  return properties.filter((property) =>
    SEARCH_FIELDS.some((field) =>
      property[field]?.toString().toLowerCase().includes(lowerQuery)
    )
  );
};
