const SortIcon = ({ field, sort }) => {
  if (sort.field !== field) return <span className="text-neutral-400">↕</span>;
  return <span>{sort.direction === "asc" ? "↑" : "↓"}</span>;
};

export const SortableColumn = ({ label, field, sort, onSort }) => (
  <th
    className={`p-1 sm:p-2 text-center sticky top-0 bg-gray-200 z-10 ${
      field ? "cursor-pointer hover:bg-gray-300 transition-colors duration-150 select-none" : ""
    }`}
    onClick={() => field && onSort(field)}
  >
    <span className="flex items-center justify-center gap-1">
      {label}
      {field && <SortIcon field={field} sort={sort} />}
    </span>
  </th>
);
