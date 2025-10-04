import { SearchInput } from "../components/ui/SearchInput";
import { PropertyList } from "../components/features/PropertyList";
import { BtnAddProperty } from "../components/ui/BtnAddProperty";
import { filterProperties } from "../utils/filterProperties.js";
import { useState } from "react";
import propertiesData from "../data/properties.json";
export const Home = () => {
  {
    /*States*/
  }
  const [search, setSearch] = useState();
  const [addProperty, setAddProperty] = useState(false);
  {
    /*Functions*/
  }
  const filteredProperties = filterProperties(propertiesData, search);

  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col items-center py-6">
      {/* Ventana blanca */}
      <div className=" w-[90vw] h-[90vh] p-6 rounded-lg shadow-lg flex flex-col">
        {/* Header: Título + Botón */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h1 className="text-neutral-800 text-lg sm:text-2xl font-semibold mb-2 sm:mb-0">
            Propiedades
          </h1>
          {/*Boton */}
          <BtnAddProperty
            addProperty={addProperty}
            setAddProperty={setAddProperty}
          />
        </div>
        {/* Buscador */}
        <SearchInput search={search} setSearch={setSearch} />
        {/*Lista de propiedades*/}
        <PropertyList properties={filteredProperties} />
      </div>
      {addProperty ? <div>Hola españita</div> : null}
    </div>
  );
};
