export const PropertyList = () => {
  return (
    <div className=" mt-4 overflow-auto border border-neutral-300 rounded-md max-h-[60vh]">
      <table className="w-full table-auto border-collapse">
        {/* Header */}
        <thead className="bg-gray-100 ">
          <tr className="p-1">
            <th className=" text-left">Foto</th>
            <th className=" text-left">Oficina</th>
            <th className=" text-left">Referencia</th>
            <th className=" text-left">Tipo</th>
            <th className=" text-left">Dirección</th>
            <th className=" text-left">Precio</th>
            <th className=" text-left">Habitaciones</th>
            <th className=" text-left">Superficie</th>
            <th className=" text-left">Fecha</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
