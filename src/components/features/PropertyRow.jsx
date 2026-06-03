export const PropertyRow = ({ property, onRowClick }) => (
  <tr
    className="border-t text-center cursor-pointer hover:bg-neutral-300 transition-colors duration-150"
    onClick={() => onRowClick(property)}
  >
    <td className="p-1 sm:p-2">
      <img
        src={property.images[0]}
        alt="foto"
        className="w-10 h-10 object-cover rounded"
      />
    </td>
    <td className="p-1 sm:p-2">{property.office}</td>
    <td className="p-1 sm:p-2">{property.reference}</td>
    <td className="p-1 sm:p-2">{property.type}</td>
    <td className="p-1 sm:p-2">{property.location}</td>
    <td className="p-1 sm:p-2">{Number(property.price).toLocaleString("es-ES")}€</td>
    <td className="p-1 sm:p-2">{property.rooms}</td>
    <td className="p-1 sm:p-2">{property.area} m²</td>
    <td className="p-1 sm:p-2">{property.date}</td>
  </tr>
);
