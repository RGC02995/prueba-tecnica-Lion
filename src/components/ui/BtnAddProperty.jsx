export const BtnAddProperty = ({ addProperty, setAddProperty }) => {
  return (
    <button
      id="addProperty"
      className="bg-neutral-950 text-white px-4 py-2 rounded-md text-sm sm:text-base text-[0.6rem] hover:bg-neutral-700 flex items-center gap-2 self-start sm:self-auto"
      onClick={() => setAddProperty(!addProperty)}
    >
      <span className="text-xl font-bold">+</span>
      Añadir nueva propiedad
    </button>
  );
};
