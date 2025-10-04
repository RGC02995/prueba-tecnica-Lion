import { SearchInput } from "../components/ui/SearchInput";
import { PropertyList } from "../components/features/PropertyList";
import { BtnSearchPropertie } from "../components/ui/BtnSearchPropertie";

export const Home = () => {
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
          <BtnSearchPropertie />
        </div>
        {/* Buscador */}
        <SearchInput />
        {/*Lista de propiedades*/}
        <PropertyList />
      </div>
    </div>
  );
};
