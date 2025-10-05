import { useState, useEffect } from "react";
import properties from "../data/properties.json";

export const useProperties = () => {
  const [allProperties, setAllProperties] = useState([]);

  // Cargamos las propiedades iniciales + las guardadas en localStorage
  useEffect(() => {
    const stored = localStorage.getItem("propiedades");
    const extras = stored ? JSON.parse(stored) : [];
    setAllProperties([...properties, ...extras]);
  }, []);

  // Función para añadir nueva propiedad
  const addProperty = (newProp) => {
    setAllProperties((prev) => {
      const updated = [...prev, newProp];

      // Guardamos las propiedades extra (no las del JSON original) en localStorage
      const extras = updated.slice(properties.length);
      localStorage.setItem("propiedades", JSON.stringify(extras));

      return updated;
    });
  };

  return { allProperties, addProperty };
};
