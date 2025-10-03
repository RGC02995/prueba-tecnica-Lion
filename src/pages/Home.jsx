import { SearchInput } from "../components/ui/SearchInput";
import { PropertyList } from "../components/features/PropertyList";

export const Home = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col items-center py-6">
      {/* Ventana blanca */}
      <div className="bg-white w-[90vw] h-[90vh] p-6 rounded-lg shadow-lg flex flex-col">
        {/* Header: Título + Botón */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h1 className="text-neutral-800 text-lg sm:text-2xl font-semibold mb-2 sm:mb-0">
            Propiedades
          </h1>
          <button className="bg-neutral-950 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-neutral-700 flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xl font-bold">+</span>
            Añadir nueva propiedad
          </button>
        </div>
        {/* Buscador */}
        <SearchInput />
        {/*Lista de propiedades*/}
        <PropertyList />
      </div>
    </div>
  );
};
