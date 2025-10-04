import propertiesData from "../../data/properties.json";

export const PropertyList = () => {
  return (
    <div className=" mt-4 overflow-x-auto min-w-[300px] rounded-md  max-h-[60vh] sm:font-medium font-light">
      <table className="w-full border-collapse text-sm">
        {/* Header */}
        <thead className="bg-gray-200 font-thin text-gray-700">
          <tr>
            <th className="p-2 text-center">Foto</th>
            <th className="p-2 text-center">Oficina</th>
            <th className="p-2 text-center">Referencia</th>
            <th className="p-2 text-center">Tipo</th>
            <th className="p-2 text-center">Dirección</th>
            <th className="p-2 text-center">Precio</th>
            <th className="p-2 text-center">Habitaciones</th>
            <th className="p-2 text-center">Superficie</th>
            <th className="p-2 text-center">Fecha</th>
          </tr>
        </thead>

        {/*Body*/}
        <tbody className="">
          {propertiesData.map((property) => (
            <tr
              key={property.id}
              className="border-t border-black  text-center m-auto"
            >
              <td className="p-4">
                <img
                  src={property.images}
                  alt="imagen random"
                  className=" w-30 min-w-20 rounded-md"
                />
              </td>
              <td className="p-4">{property.office}</td>
              <td className="p-4">{property.reference}</td>
              <td className="p-4">{property.type}</td>
              <td className="p-4">{property.location}</td>
              <td className="p-4">{property.price}€</td>
              <td className="p-4">{property.rooms}</td>
              <td className="p-4">{property.area} m2</td>
              <td className="p-4">{property.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
