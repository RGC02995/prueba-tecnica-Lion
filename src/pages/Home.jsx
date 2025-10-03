export const Home = () => {
  return (
    <div className="m-5 bg-white w-[90vw] h-[90vh] my-5 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/*Título*/}
      <h1 className="text-neutral-800 text-2xl sm:text-3xl font-semibold mb-4 sm:mb-0">
        Propiedades
      </h1>
      {/*Botón*/}
      <button className="bg-neutral-950 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-neutral-700 flex items-center gap-2 self-start sm:self-auto">
        <span className="text-xl font-bold">+</span>
        Añadir nueva propiedad
      </button>
    </div>
  );
};
