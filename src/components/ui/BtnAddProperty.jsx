export const BtnAddProperty = ({ addProperty, setAddProperty }) => {
  return (
    <button
      id="addProperty"
      className="bg-neutral-950 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-neutral-700 flex items-center gap-2 self-start sm:self-auto transition-colors duration-150"
      onClick={() => setAddProperty(!addProperty)}
    >
      <span className="text-xl font-bold">+</span>
      Añadir nueva propiedad
    </button>
  );
};
