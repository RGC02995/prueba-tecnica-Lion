import { useState } from "react";
import properties from "../data/properties.json";

export const useProperties = () => {
  // Estado con las propiedades iniciales
  const [allProperties, setAllProperties] = useState([...properties]);

  // Función para añadir nueva propiedad
  const addProperty = (newProp) => {
    // Creamos un nuevo array con push al final
    setAllProperties((prev) => [...prev, newProp]);
  };

  return { allProperties, addProperty };
};
