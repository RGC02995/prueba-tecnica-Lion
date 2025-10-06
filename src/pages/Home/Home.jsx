import { useState } from "react";
import { SearchInput } from "../../components/ui/SearchInput";
import { PropertyList } from "../../components/features/PropertyList";
import { BtnAddProperty } from "../../components/ui/BtnAddProperty";
import { AddPropertyModal } from "../../components/features/AddPropertyModal.jsx";
import { SpecsPropertiesModal } from "../../components/features/SpecsPropertiesModal.jsx";
import { useProperties } from "../../hooks/useProperties";
import { filterProperties } from "../../utils/filterProperties";
import { onRowClick } from "../../utils/handleRowClick.js";

export const Home = () => {
  {
    /*Hooks */
  }
  const { allProperties, addProperty } = useProperties();
  {
    /*Estados*/
  }
  const [search, setSearch] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [selectedPropertie, setSelectedPropertie] = useState(null);
  const [showSpecs, setShowSpecs] = useState(false);

  {
    /*Funciones */
  }
  const filteredProperties = filterProperties(allProperties, search);

  return (
    <div className="w-full h-screen bg-neutral-200 flex flex-col items-center py-6 p-2 overflow-hidden">
      <div className="w-[90vw] h-[90vh] p-6 rounded-lg shadow-lg flex flex-col bg-neutral-100">
        {/*Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h1 className="text-neutral-800 text-lg sm:text-2xl font-semibold mb-2 sm:mb-0">
            Propiedades
          </h1>
          <BtnAddProperty addProperty={addModal} setAddProperty={setAddModal} />
        </div>
        {/*Buscador*/}
        <SearchInput search={search} setSearch={setSearch} />

        {/*TODO:Crear estado de carga y manejo de errores para el filtrado*/}

        <PropertyList
          properties={filteredProperties}
          onRowClick={(property) =>
            onRowClick(property, setSelectedPropertie, setShowSpecs)
          }
        />
      </div>

      {/*Modales*/}
      {addModal && (
        <AddPropertyModal
          addModal={addModal}
          setAddModal={setAddModal}
          addProperty={addProperty}
        />
      )}

      {showSpecs && selectedPropertie && (
        <SpecsPropertiesModal
          selectedPropertie={selectedPropertie}
          onClose={() => setShowSpecs(false)}
        />
      )}
    </div>
  );
};
