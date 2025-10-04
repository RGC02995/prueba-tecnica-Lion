export const filterProperties = (properties, query) => {
  if (!query) return properties;

  const lowerQuery = query.toLowerCase();

  return properties.filter((property) =>
    Object.values(property).some((value) =>
      value.toString().toLowerCase().includes(lowerQuery)
    )
  );
};
