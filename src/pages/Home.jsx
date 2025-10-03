export const Home = () => {
  return (
    <div className="bg-neutral-100 p-4 m-8 flex-1 flex-wrap  rounded-md border-2 border-neutral-100 h-[90vh]">
      <h1 className="text-neutral-400  font-semibold ">Propiedades</h1>
      <button className="bg-neutral-950 text-white px-4 py-2 rounded-md mt-4 hover:bg-neutral-500 flex items-center gap-2 flex-wrap">
        <i>+</i>Añadir nueva propiedad
      </button>
    </div>
  );
};
