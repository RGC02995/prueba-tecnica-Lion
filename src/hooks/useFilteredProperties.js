import { useState, useEffect } from "react";

export const useFilteredProperties = (properties, query) => {
  const [filtered, setFiltered] = useState(properties);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {}, [properties, query]);

  return { filtered, loading, error };
};
