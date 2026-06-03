import { PropertyRow } from "./PropertyRow.jsx";
import { PropertyEmptyState } from "./PropertyEmptyState.jsx";
import { SortableColumn } from "../ui/SortableColumn.jsx";
import { COLUMNS } from "../../data/columns.js";

export const PropertyList = ({ properties, onRowClick, sort, onSort }) => (
  <div className="mt-3 h-full overflow-y-auto rounded-md no-scrollbar">
    <table className="w-full border-separate border-spacing-0 text-xs sm:text-sm mt-4 overflow-hidden rounded-tl-md rounded-tr-md">
      <thead className="bg-gray-200 font-thin text-gray-700">
        <tr>
          {COLUMNS.map(({ label, field }) => (
            <SortableColumn key={label} label={label} field={field} sort={sort} onSort={onSort} />
          ))}
        </tr>
      </thead>
      <tbody>
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyRow key={property.id} property={property} onRowClick={onRowClick} />
          ))
        ) : (
          <PropertyEmptyState />
        )}
      </tbody>
    </table>
  </div>
);
