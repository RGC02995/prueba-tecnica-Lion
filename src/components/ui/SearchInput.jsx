export const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="mt-3 flex justify-start" id="searchInput">
      <div className="flex gap-2 items-center p-1 w-full">
        <input
          type="text"
          placeholder="Buscar propiedad"
          className="rounded-md border border-neutral-400 text-xs p-1.5 w-full sm:w-80 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-colors duration-150"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
