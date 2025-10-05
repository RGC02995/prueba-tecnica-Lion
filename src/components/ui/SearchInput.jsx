export const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="mt-3 flex justify-center" id="searchInput">
      <div className="flex gap-2 items-center p-1 m-auto">
        <input
          type="text"
          placeholder="Buscar propiedad"
          className="rounded-md border-neutral-400 text-[0.5rem] border-1 text-xs p-1 w-30 sm:w-80 items-center text-left "
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <i></i>
      </div>
    </div>
  );
};
