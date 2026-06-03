import { useState, useMemo } from "react";
import { SearchInput } from "../../components/ui/SearchInput";
import { PropertyList } from "../../components/features/PropertyList";
import { HomeHeader } from "../../components/features/HomeHeader";
import { AddPropertyModal } from "../../components/features/AddPropertyModal.jsx";
import { SpecsPropertiesModal } from "../../components/features/SpecsPropertiesModal.jsx";
import { useProperties } from "../../hooks/useProperties";
import { filterProperties } from "../../utils/filterProperties";
import { sortProperties } from "../../utils/sortProperties";

export const Home = () => {
  const { allProperties, addProperty } = useProperties();
  const [search, setSearch] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showSpecs, setShowSpecs] = useState(false);
  const [sort, setSort] = useState({ field: null, direction: "asc" });

  const filteredProperties = useMemo(
    () => sortProperties(filterProperties(allProperties, search), sort),
    [allProperties, search, sort]
  );

  const handleSort = (field) => {
    setSort((prev) => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="w-full h-screen bg-neutral-200 flex flex-col items-center py-4 px-2">
      <div className="w-[95vw] sm:w-[90vw] h-[calc(100vh-2rem)] p-3 sm:p-6 rounded-lg shadow-lg flex flex-col bg-neutral-100">
        <HomeHeader addModal={addModal} setAddModal={setAddModal} />

        <SearchInput search={search} setSearch={setSearch} />

        <div className="flex-1 min-h-0">
          <PropertyList
            properties={filteredProperties}
            onRowClick={(property) => {
              setSelectedProperty(property);
              setShowSpecs(true);
            }}
            sort={sort}
            onSort={handleSort}
          />
        </div>
      </div>

      {addModal && (
        <AddPropertyModal
          setAddModal={setAddModal}
          addProperty={addProperty}
        />
      )}

      {showSpecs && selectedProperty && (
        <SpecsPropertiesModal
          selectedProperty={selectedProperty}
          onClose={() => setShowSpecs(false)}
        />
      )}
    </div>
  );
};
