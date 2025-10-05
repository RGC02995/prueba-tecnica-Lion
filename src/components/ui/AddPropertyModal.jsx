export const AddPropertyModal = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const json = JSON.stringify(data);

    console.log(json);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-30">
      <form
        onSubmit={handleSubmit}
        className="w-[300px] p-4 z-40 bg-neutral-600 
                   absolute top-1/2 left-1/2 transform 
                   -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg"
      >
        <h2 className="text-m text-center mb-4">Añadir propiedad</h2>
        <input
          type="file"
          name="imagen"
          accept="image/*"
          className="w-full p-2.5 mb-2 rounded bg-neutral-100"
        />
        <input
          name="office"
          type="text"
          placeholder="Oficina"
          className=" h-1  w-full p-2.5 mb-2 rounded text-black bg-neutral-100"
        />
        <input
          name="type"
          type="text"
          placeholder="Tipo"
          className=" h-1  w-full p-2.5 mb-2 rounded text-black bg-neutral-100"
        />
        <input
          name="location"
          type="text"
          placeholder="Dirección"
          className=" h-1  w-full p-2.5 mb-2 rounded text-black bg-neutral-100"
        />
        <input
          name="price"
          type="text"
          placeholder="Precio"
          className=" h-1  w-full p-2.5 mb-2 rounded text-black bg-neutral-100"
        />
        <input
          name="rooms"
          type="text"
          placeholder="Habitaciones"
          className=" h-1  w-full p-2.5 mb-2 rounded text-black bg-neutral-100"
        />
        <input
          name="area"
          type="number"
          placeholder="m2"
          className=" h-1  w-full p-2.5 mb-2 rounded text-black bg-neutral-100"
        />
        <input
          name="date"
          type="date"
          placeholder="Fecha"
          className=" h-1  w-full p-2.5 mb-2 rounded text-black bg-neutral-100"
        />
        <button
          type="submit"
          className=" bg-neutral-500 hover:bg-neutral-100 px-4 py-2 rounded"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
