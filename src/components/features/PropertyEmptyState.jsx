import { COLUMNS } from "../../data/columns.js";

export const PropertyEmptyState = () => (
  <tr>
    <td colSpan={COLUMNS.length} className="text-center py-16 text-gray-400">
      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl">🏠</span>
        <span className="text-sm font-medium">No se encontraron propiedades</span>
        <span className="text-xs text-gray-400">Prueba con otro término de búsqueda</span>
      </div>
    </td>
  </tr>
);
