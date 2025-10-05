import properties from "../data/properties.json";
import { useState, useEffect } from "react";

export const useProperties = () => {
  const [allProperties, setAllProperties] = useState([]);
  //Cargamos los datos iniciales y los añadidos del localStorage
  useEffect(() => {
    const stored = localStorage.getItem("extraProperties");
    const extras = stored ? JSON.parse(stored) : [];
    setAllProperties([...properties, ...extras]);
  }, []);

  //Añadir propiedad

  const addProperty = (NemPropertie) => {
    const stored = localStorage.getItem("extraProperties");
    const extras = stored ? JSON.parse(stored) : [];

    extras.push(NemPropertie);
    localStorage.setItem("extraProperties", JSON.stringify(extras));
    setAllProperties([...properties, ...extras]);
  };

  return { allProperties, addProperty };
};
