export const PropertyList = ({ properties }) => {
  return (
    <div className="mt-4 overflow-x-auto rounded-md max-h-[60vh]">
      <table className="w-full border-collapse text-sm mt-4">
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
        <tbody>
          {properties.length > 0 ? (
            properties.map((property) => (
              <tr key={property.id} className="border-t text-center">
                <td className="p-2">
                  <img
                    src={property.images}
                    alt="foto"
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-2">{property.office}</td>
                <td className="p-2">{property.reference}</td>
                <td className="p-2">{property.type}</td>
                <td className="p-2">{property.location}</td>
                <td className="p-2">{property.price}€</td>
                <td className="p-2">{property.rooms}</td>
                <td className="p-2">{property.area} m2</td>
                <td className="p-2">{property.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center p-4 text-gray-500">
                No se encontraron propiedades
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
