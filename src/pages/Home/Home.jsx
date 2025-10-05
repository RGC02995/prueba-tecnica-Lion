import { useState } from "react";

import { SearchInput } from "../../components/ui/SearchInput";
import { PropertyList } from "../../components/features/PropertyList";
import { BtnAddProperty } from "../../components/ui/BtnAddProperty";
import { AddPropertyModal } from "../../components/ui/AddPropertyModal";

import { filterProperties } from "../../utils/filterProperties.js";
import { SpecsPropertiesModal } from "../../components/ui/SpecsPropertiesModal";
import { onRowClick } from "../../utils/onRowClick.js";
// import propertiesData from "../data/properties.json";

import { useProperties } from "../../hooks/useProperties.js";

export const Home = () => {
  {
    /*Hooks */
  }

  const { allProperties, addProperty } = useProperties();

  {
    /*States*/
  }

  const [search, setSearch] = useState();
  const [addModal, setAddModal] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [selectedPropertie, setSelectedPropertie] = useState();

  {
    /*Functions*/
  }

  const filteredProperties = filterProperties(allProperties, search);

  return (
    <div className="w-full h-screen bg-neutral-200 flex flex-col items-center py-6 p-2 overflow-hidden">
      {/* Ventana blanca */}
      <div className=" w-[90vw] h-[90vh] p-6 rounded-lg shadow-lg flex flex-col bg-neutral-100">
        {/* Header: Título + Botón */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h1 className="text-neutral-800 text-lg sm:text-2xl font-semibold mb-2 sm:mb-0">
            Propiedades
          </h1>
          {/*Boton */}
          <BtnAddProperty addProperty={addModal} setAddProperty={setAddModal} />
        </div>
        {/* Buscador */}
        <SearchInput search={search} setSearch={setSearch} />
        {/*Lista de propiedades*/}
        <PropertyList
          properties={filteredProperties}
          onRowClick={onRowClick}
          setSelectedPropertie={setSelectedPropertie}
          setShowSpecs={setShowSpecs}
          showSpecs={showSpecs}
        />
      </div>
      {/*Modales */}
      {addModal && (
        <AddPropertyModal
          addModal={addModal}
          setAddModal={setAddModal}
          addProperty={addProperty}
        />
      )}

      {showSpecs && (
        <SpecsPropertiesModal
          selectedPropertie={selectedPropertie}
          setShowSpecs={setShowSpecs}
        />
      )}
    </div>
  );
};
